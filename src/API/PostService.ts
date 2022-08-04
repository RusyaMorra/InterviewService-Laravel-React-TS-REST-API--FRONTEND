import axios from "axios";

export default class PostService  {

    static async getAll(defaultLimit:number = 10, pageId:number) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: defaultLimit,
                _page: pageId
            }
        });
        return response;
    }

    static async getById(id:number) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id:number) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}
