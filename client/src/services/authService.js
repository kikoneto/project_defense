const baseUrl = 'https://softuni-final-exam-app-server.herokuapp.com';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const register = async (email, username, password, gender, avatarUrl) => {
    let res = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, username, password, gender, avatarUrl: 'https://robohash.org/sapientenihilquaerat.png?size=50x50&set=set1' })
    });

    return await res.json();
}