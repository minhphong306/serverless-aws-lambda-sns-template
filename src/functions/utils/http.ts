import fetch from "node-fetch";

export const doPost = async (endpoint, body) => {
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
};