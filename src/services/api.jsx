export async function getUserInfos(token) {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
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
