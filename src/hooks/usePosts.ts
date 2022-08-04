import { useMemo } from "react";


interface BlogPostsInterface {
    id: number;
    title: string;
    body: string;
}

export  const useSortedPosts =  (posts:any[], sort:string):BlogPostsInterface[] =>{
    const sortedPosts = useMemo(():BlogPostsInterface[]=>{

        if(sort){
            return [...posts].sort((a,b)=>  a[sort].localeCompare(b[sort]));
        }

        return posts;
     },[sort,posts]) ;

    return sortedPosts;
}





export const usePosts = (posts:any[], sort:string, query:string):BlogPostsInterface[]=> {
    const sortedPosts = useSortedPosts(posts,sort);

    const sortedAndSearchedPost = useMemo(()=>{
        return sortedPosts.filter(post => post.title.includes(query) );
     },[query, sortedPosts]) ;

    return  sortedAndSearchedPost;
}

