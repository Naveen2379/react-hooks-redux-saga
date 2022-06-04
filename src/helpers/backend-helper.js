export const getPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result_1 = await res.json()
        return result_1
    } catch (err) {
        return err
    }
}
