export async function login(email: string, password: string) {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
        console.log(url)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include"
        });

        const data = await response.json();
        return data
    } catch {
        return { error: "An error ocurred" };
    }
}