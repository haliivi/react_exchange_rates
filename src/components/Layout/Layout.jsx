import { addClass } from '../../hoc/AddClass';
import { Home } from '../../pages/Home/Home';
import { Header } from '../Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar'
import './Layout.scss'

const Layout = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className="routes">
                    <Home />
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default addClass(Layout, 'layout')