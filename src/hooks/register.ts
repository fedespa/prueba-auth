export async function register(email: string, password: string) {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        console.log(response)
        const data = await response.json();

        return data
    } catch (error) {
        console.log(error)
        return { error: "An error ocurred" };
    }
}