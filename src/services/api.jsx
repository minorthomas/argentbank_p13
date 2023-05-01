export async function getToken(data) {
    try {
        const res = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let body = await res.json();

        return body.body.token;
    } catch (err) {
        console.log(err);
        return;
    }
}

export async function getUserInfos(token) {
    try {
        const res = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        let body = await res.json();

        return body.body;
    } catch (err) {
        console.log(err);
        return;
    }
}
