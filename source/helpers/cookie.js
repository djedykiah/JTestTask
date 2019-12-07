// Class to work with document.cookie
export default new class Cookie {

    setCookie (name, value, days) {
        const date = new Date();
        const cookieData = escape(JSON.stringify(value));

        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

        const expires = `expires=${date.toUTCString()}`;

        document.cookie = `${name}=${cookieData};domain=${window.location.hostname};${expires};path=/`;
    }

    getCookie (name) {
        const cookieName = `${name}=`;
        const cookieArray = document.cookie.split(';');
        const cookieArrayLength = cookieArray.length;

        for (let i = 0; i < cookieArrayLength; i++) {
            let value = cookieArray[i];

            while (value.charAt(0) === ' ') {
                value = value.substring(1);
            }
            if (value.indexOf(cookieName) === 0) {
                return JSON.parse(unescape(value.substring(cookieName.length, value.length)));
            }
        }

        return null;
    }

}();
