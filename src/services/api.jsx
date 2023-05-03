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
