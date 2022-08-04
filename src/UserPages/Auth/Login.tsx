import React, {useContext} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import AuthContext from "../../Context/index";

const Login = () => {
    const {isAuth, setIsAuth} = useContext<undefined|any>(AuthContext);

    const login = (event:any) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }



    return (
        <div>
            <h1>Страница для логина</h1>
            <form  onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
