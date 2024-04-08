export async function fetchPosts() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(resp.ok){
        return await resp.json();
    }
    throw new Error("fetch API error");
}
