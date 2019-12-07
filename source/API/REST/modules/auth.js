// Config
import { API_URL } from '../../../config';

// Instruments
import { createHeaders } from '../../../helpers';

// Transform
import transform from '../../../transform';

export class Auth {

    async signIn (credentials) {
        const requestData = transform.auth.transformSignInOutput(credentials);
        const response = await fetch(`${API_URL}/sign-in`, createHeaders('POST', requestData));
        const data = await response.json();

        if (response.status !== 200) {
            throw new Error(response.message);
        }

        return transform.auth.transformSignInInput(data);
    }

}
