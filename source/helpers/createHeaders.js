// API Headers
export const createHeaders = (method, data, multipart = false, customHeaders = null) => {
    const headers = new Headers();
    const init = {
        method: method.toUpperCase(),
    };

    headers.append(
        'Content-Type',
        multipart ? 'multipart/form-data': 'application/json; charset=utf-8'
    );

    if (customHeaders && typeof customHeaders === 'object') {
        for (const key in customHeaders) {
            if (customHeaders.hasOwnProperty(key)) {
                headers.append(
                    key,
                    typeof customHeaders[key] === 'string' ? customHeaders[key] : JSON.stringify(customHeaders[key])
                );
            }
        }
    }

    if (
        method.toUpperCase() === 'POST' ||
        method.toUpperCase() === 'PATCH' ||
        method.toUpperCase() === 'PUT') {
        init.body = JSON.stringify(data);
    } else if (method.toUpperCase() === 'DELETE' && data) {
        init.body = JSON.stringify(data);
    }

    init.headers = headers;

    return init;
};
