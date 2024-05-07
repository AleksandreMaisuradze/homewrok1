export async function register(user) {
    const resp = await fetch("https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    }
    throw new Error(data.msg);
};

export async function login(user) {
    const resp = await fetch("https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    }
    throw new Error(data.msg);
};
