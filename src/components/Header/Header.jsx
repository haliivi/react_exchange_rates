import './Header.scss';
import { Navbar } from '../Navbar/Navbar';
import { useContext } from 'react';
import '../../context/RateContext'
import { RateContext } from '../../context/RateContext';

export const Header = () => {
    const {modalShowHandler} = useContext(RateContext)

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
                    <i
                        className="fa fa-user"
                        aria-hidden="true"
                        onClick={modalShowHandler}
                    />
                </div>
            </div>
            <hr />
        </div>
    )
}