//Core
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Button } from 'antd';

//Styles
import styled from 'styled-components';

//Components
import { Typography } from 'components';

const mapStateToProps = (state) => {
    return {
        type: state.modal.get('type'),
    };
};

@connect(mapStateToProps)
class WizardContainer extends React.Component {
  static propTypes = {
      onSubmit: PropTypes.func.isRequired,
  }
  static Page = ({ children }) => children

  constructor (props) {
      super(props);
      this.state = {
          page:   0,
          values: props.initialValues || {},
      };
  }
  next = (values) =>
      this.setState((state) => ({
          page: Math.min(state.page + 1, this.props.children.length - 1),
          values,
      }))

  previous = () =>
      this.setState((state) => ({
          page: Math.max(state.page - 1, 0),
      }))

  validate = (values) => {
      const activePage = React.Children.toArray(this.props.children)[
          this.state.page
      ];

      return activePage.props.validate ? activePage.props.validate(values) : {};
  }

  handleSubmit = (values) => {
      const { children, onSubmit } = this.props;
      const { page } = this.state;
      const isLastPage = page === React.Children.count(children) - 1;

      if (isLastPage) {
          return onSubmit(values);
      }
      this.next(values);

  }

  render () {
      const { children, className, type } = this.props;
      const text = type === 'MODAL_EDIT' ? 'Edit' : 'Create';
      const { page, values } = this.state;
      const activePage = React.Children.toArray(children)[page];
      const isLastPage = page === React.Children.count(children) - 1;

      return (
          <Form
              initialValues = { values }
              validate = { this.validate }
              onSubmit = { this.handleSubmit }>
              {({ handleSubmit, submitting, values }) => (
                  <form className = { className } onSubmit = { handleSubmit } >
                      <Typography size = 'h3'>
                          {text} medicine {page + 1} / 2
                      </Typography>
                      {activePage}
                      <br />
                      <div className = 'buttons'>
                          {page > 0 && (
                              <Button onClick = { this.previous }>
                                Previous
                              </Button>
                          )}
                          {!isLastPage && (
                              <Button htmlType = 'submit' type = 'primary'>
                                Next
                              </Button>
                          )}
                          {isLastPage && (
                              <>
                                  {' '}
                                  <Button disabled = { submitting } htmlType = 'submit' >
                                      {text}
                                  </Button>
                              </>
                          )}
                      </div>
                  </form>
              )}
          </Form>
      );
  }
}

const Wizard = styled(WizardContainer)`
    padding: 20px;
    button {
        margin: 0 10px;
    }
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input-group {
        display: grid;
        grid-template-columns: 30% 68%;
        grid-column-gap: 2%;
        margin-bottom: 20px;
    }
`;

export default Wizard;
