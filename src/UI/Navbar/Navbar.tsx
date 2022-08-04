import React, {useContext,useState} from 'react';
import {Link} from "react-router-dom";
import AuthContext from "../../Context/index";
import MyButton from "../MyButton/MyButton";
import PopUpMenu  from "../PopUpMenu/PopUpMenu";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext<undefined|any>(AuthContext);
    const [droplist, setdroplist] = useState<boolean>(false);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    function droplistOn(e:React.MouseEventHandler<HTMLInputElement>|any) {
        setdroplist(true)
    }

    return (
        <div className="navbar">
            <div className="container-90">
                <div className="nav-bar-wrapper">
                    <div className="logo --header-logo">
                          <div>InterVcorp</div>
                    </div>
                    <div className="navbar__links">
                        <Link className="nav-menu__item"  to="/mainpage">Главная</Link>
                        <Link className="nav-menu__item"  to="/InterviewService">Сервис Cобеседований</Link>
                        <Link className="nav-menu__item"  to="/posts">блог</Link>
                        <Link className="nav-menu__item"  to="/about">Магазин</Link>
                        <Link className="nav-menu__item"  to="/about">Видео Уроки</Link>
                        <Link className="nav-menu__item"  to="/about">О сайте</Link>
                        <Link className="nav-menu__item"  to="/about">контакты</Link>
                        <Link className="nav-menu__item"  to="/about">онлайн чат</Link>
                        <Link to="/mytodo"onMouseMove = {droplistOn} className="nav-menu__item" >
                            Мой кабинет
                            <PopUpMenu classList={"droplist-header"}   visible={droplist} setVisible={setdroplist}>
                                <Link className="droplist__item"  to="/mytodo">Настройки профиля</Link>
                                <Link className="droplist__item"  to="/mytodo">Баланс</Link>
                                <Link className="droplist__item"  to="/mytodo">мой прогресс</Link>
                                <Link className="droplist__item"  to="/mytodo">Планировщик</Link>
                                <Link className="droplist__item"  to="/mytodo">уведомления</Link>
                                <Link className="droplist__item"  to="/mytodo">Сообщения</Link>
                                <Link className="droplist__item"  to="/mytodo">книги</Link>
                                <Link className="droplist__item"  to="/mytodo">Избранное</Link>
                                <Link className="droplist__item"  to="/mytodo">Мои видео</Link>
                                <Link className="droplist__item"  to="/mytodo">DiagramDrawer</Link>
                                <Link onClick={logout} className="droplist__item"  to="/mytodo">Выйти</Link>
                            </PopUpMenu>
                        </Link>
                    </div>
                    <div className="btn-reg-wrapper">
                        <Link  className="nav-btn-login-link"  to="/login">Войти</Link>
                        <Link  className="nav-btn-login-link"  to="/login">Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
