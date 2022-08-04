import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <main className="container-90">
                <Outlet />
        </main>

    )
}

export default Layout
