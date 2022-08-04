import { useState, useRef, useEffect } from "react";
import Counter from "../../UI/Counter/Counter";
import ClassCounter  from "../../UI/Counter/ClassCounter";
import PostList from "./WebComponentsBlog/PostList";
import PostForm  from "./WebComponentsBlog/PostForm";
import PostFilter from "./WebComponentsBlog/PostFilter";
import MyModal from "../../UI/MyModal/MyModal";
import MyButton from "../../UI/MyButton/MyButton";
import Loader from "../../UI/Loader/Loader";
import Pagination from "../../UI/Pagination/Pagination";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import {usePagination} from "../../hooks/usePagination";
import {useFetching} from "../../hooks/useFetching";
import {getPageCount} from "../../utils/pages";
import {BlogPostsInterface,FilterInterface } from "../../@TS-TYPES/ComponentInterfaces";
import {defaultType} from "../../@TS-TYPES/types";

const styles = {
    div:{
       width: '200px',
       heigth: '200px',
       backgroundColor: 'blue'
    },
    div2:{
        width: '200px',
        heigth: '200px',
        backgroundColor: 'red'
    }
}







function PageBlog() {

    const [posts, setPosts] = useState<BlogPostsInterface[]>([])
    const [filter, setFilter] = useState<FilterInterface>({sort: '',query: ''});
    const [modal, setModal] = useState<boolean>(false);

    const [totalPages, setTotalPages] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);

    const sortedAndSearchedPost: any = usePosts(posts, filter.sort, filter.query);
    let totalPageArray: number[] = usePagination(totalPages);

    const [fetchPosts, isPostsLoading, postError, setIsLoading] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));

    })





    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            fetchPosts();
        setIsLoading(false)

    },1000)
    },[filter,page] )







    const createPost = (newPost:BlogPostsInterface )=> {
        setPosts([ newPost,...posts])
        setModal(false)
    }

    const DeletePost = (PostID:any)=> {
        setPosts( posts.filter(post =>   post.id !== PostID.id))

    }


    const changePosts = (page:number)=> {
        setPage(page)
    }





 return <div>
            <Loader isPostLoading= {isPostsLoading}  />
            <div style = {styles.div}>тренинг</div>
            <div style = {styles.div2}>тренинг</div>
            <div className = "aa">тренинг</div>

            <ClassCounter />

            <MyButton style={{marginTop: 30,cursor:"pointer"}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <h1>{filter.sort}</h1>
            <PostFilter filter = {filter}  setFilter={setFilter}  />
            {
                postError &&
                    <h1>Произошла ошибка</h1>
            }

            {posts.length < 1 ?
             <h1>Постов нет</h1>
            : <PostList DeletePost = {DeletePost}   posts = {sortedAndSearchedPost} title = {'Список постов'}/>
            }

            <Pagination totalPageArray = {totalPageArray}  changePosts = {changePosts} page = {page} />
        </div>
}

export default PageBlog;
