import { Auth } from './transformers/auth';

export default new class Transform {
    auth = new Auth();
}();
