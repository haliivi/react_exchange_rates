import { addClass } from '../../hoc/AddClass'
import { Header } from '../Header/Header'
import './Layout.scss'

const Layout = () => {
    return (
        <Header />
    )
}

export default addClass(Layout, 'layout')