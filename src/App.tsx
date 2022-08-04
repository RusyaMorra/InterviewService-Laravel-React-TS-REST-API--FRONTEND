import React, {useEffect, useState}  from 'react';
import Navbar from "./UI/Navbar/Navbar"
import AppRouter from "./Router/AppRouter"
import AuthContext from "./Context/index";


function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading

        }}>
            <div className = 'app'>
                <Navbar/>
                <AppRouter/>
            </div>
        </AuthContext.Provider>

    )
}

export default App;
