import './Header.scss'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <div className="header">
            <div className="header-wrap">
                <div className="logo">
                    <a href="/">
                        <h2>RateApp</h2>
                    </a>
                </div>
                <Navbar />
                <div className="person">
                    <i className="fa fa-user" aria-hidden="true" />
                </div>
            </div>
            <hr />
        </div>
    )
}