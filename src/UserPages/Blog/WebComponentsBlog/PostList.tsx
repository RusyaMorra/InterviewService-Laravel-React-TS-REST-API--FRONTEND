import { useState } from "react";

import PostItem from "./PostItem"

const PostList = function ({posts, title, DeletePost}:{posts:any, title:string, DeletePost:any}) {

    return(
        <div className = "postList" >
            <h1>{title}</h1>
            {posts.map((post: any) =>
                <PostItem DeletePost = {DeletePost} Mykey = {post.id}  post = {post} />
            )}

        </div>
    )


}

export default PostList
