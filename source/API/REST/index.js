import { Auth } from './modules/auth';
import { Med } from './modules/med';

export default new class API {
    auth = new Auth();
    med = new Med();
}();
