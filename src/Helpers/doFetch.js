export const doFetch = async (url, type, data) => {

    let method = type || 'GET';
    let body = data || null;

    const options = {
        method: method,
        body: body,
    };

    try {
        let response = await fetch(url, options);
        let data = await response.json();

        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export const doFetchKey = async (url, type, data, key) => {
    let method = type || 'GET';
    let body = data || null;

    const options = {
        method: method,
        body: body,
        headers: {
            'authorization': `Bearer ${key}`
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    }
    catch(error) {
        console.log(error);
    }
}