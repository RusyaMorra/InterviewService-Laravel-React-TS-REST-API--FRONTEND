import React,{ FC, useState } from "react";
import MyButton from "../../../UI/MyButton/MyButton"
import MyInput from "../../../UI/MyInput/MyInput"
import {BlogPostsInterface,callbackCreatePost} from "../../../@TS-TYPES/ComponentInterfaces";





const PostForm: FC<callbackCreatePost> = ({create})=> {

    const [post, setPost] = useState< BlogPostsInterface >({title: '',body: ''})

    function addpost(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}

        create(newPost)
        setPost({title: '',body: ''})
    }






    return(
        <div>
            <form>

                {/*<h1 >{title} </h1>
                   <h1 >{title2} </h1>
                   <MyInput ref = {bodyInputRef}   title = {"добавить заголовок"} />
                   <MyInput ref = {bodyInputRef2}   title = {"добавить описание"} />
                   < input type = "text"  ref = {bodyInputRef} /> */}
               <MyInput value = {post.title} onChange = {(e:React.ChangeEvent<HTMLInputElement>|any) => setPost({...post, title : e.target.value})}  title = {"добавить заголовок"} />
               <MyInput value = {post.body}  onChange = {(e:React.ChangeEvent<HTMLInputElement>|any) => setPost({...post, body : e.target.value})} title = {"добавить описание"} />
               <MyButton onClick = {addpost} >добавить</MyButton>
           </form>

        </div>
    )


};


export default PostForm
