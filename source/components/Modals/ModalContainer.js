import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal } from 'antd';

//Components
import Form from 'components/Form/index.js';
//Actions
import { hideModal } from 'store/reducers/modals/actions';

class ModalContainer extends Component {
  handleClose = () => this.props.hideModal();

  renderModal = (type) => {
      switch (type) {

          case 'MODAL_ADD': {
              return <Form type = 'add' />;
          }
          case 'MODAL_EDIT': {
              return <Form type = 'edit' />;
          }
          default:
              return null;
      }
  };

  render () {
      const { props } = this;

      return (

          <Modal
              footer = { null }
              visible = { props.isOpen }
              onCancel = { this.handleClose }
              onOk = { this.handleOk }>
              { this.renderModal(props.modal) }
          </Modal>

      );
  }
}

function mapStateToProps (state) {
    return {
        modal:  state.modal.get('type'),
        isOpen: state.modal.get('isOpen'),
    };
}

function mapDispatchToProps (dispatch) {
    return { hideModal: bindActionCreators(hideModal, dispatch) };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);