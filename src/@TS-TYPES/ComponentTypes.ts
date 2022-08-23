export interface ToDoInterface {
    title: string;
    id: number;
    completed: boolean;

}

export interface BlogPostsInterface {
    id?: number;
    title: string;
    body: string;
}
export interface FilterInterface {
    sort: string;
    query: string;
}

export interface PostInterface {
    userId?: number| undefined;
    id?: number| undefined;
    title?: string| undefined;
    body?: string| undefined;

}

export interface CommentsInterface {
    postId: number| undefined;
    id: number| undefined;
    name:string| undefined;
    email: string| undefined;
    body:string| undefined;
}


export interface callbackCreatePost{
    create: (newPost: any) => void;
}


export interface MyButtonInterface {
    children?: React.ReactChild| React.ReactNode;
    onClick?: (e: any) => void;
    style?: any;
    classList?:string;
}
