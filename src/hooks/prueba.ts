export async function prueba(){
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/`
        const res  = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });
        console.log(res)

        const data = await res.json();
        console.log(data)

        return data
    } catch (error) {
        console.log(error)
        return { error: "An error ocurred" };
    }
}