import React from "react";
import {useNavigate } from 'react-router-dom';
import MyButton from "../../../UI/MyButton/MyButton"

const PostItem = function ({Mykey,...props}:{Mykey: number, post:any,DeletePost:any}) {

    const router = useNavigate();



    return(

        <article key = {Mykey}  className = "aa1">
            <div   className = "postwrapper" >
                <h1>{props.post.id}.{props.post.title}</h1>
                 <p>{props.post.body}</p>
            </div>
            <MyButton onClick = {() => router(`/posts/${props.post.id}`)} >Открыть</MyButton>
            <MyButton onClick = {()=> props.DeletePost(props.post)}  >удалить</MyButton>

        </article>

    )


}

export default PostItem
