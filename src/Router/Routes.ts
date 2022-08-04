import PageBlog from "../UserPages/Blog/PageBlog"
import About from "../UserPages/AboutUs/About"
import Errors from "../UserPages/Errors/Errors"
import PostIdPage from "../UserPages/Blog/PostIdPage"
import Login from "../UserPages/Auth/Login"
import TodoPage from "../UserPages/Todo/TodoPage"
import MainPage from "../UserPages/MainPage/MainPage"
import InterviewService from "../UserPages/InterviewService/InterviewService"

export const privateRoutes = [
    {path: '/mainpage', component:MainPage, exact: true},
    {path: '/InterviewService', component:InterviewService, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: PageBlog, exact: true},
    {path: '/mytodo', component: TodoPage, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/errors', component: Errors, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
