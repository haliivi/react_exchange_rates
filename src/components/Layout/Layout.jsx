import { addClass } from '../../hoc/AddClass';
import { Home } from '../../pages/Home/Home';
import { Calc } from '../../pages/Calc/Calc'
import { Info } from '../../pages/Info/Info'
import { Sample } from '../../pages/Sample/Sample'
import { Header } from '../Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar'
import './Layout.scss';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';

const Layout = () => {
    const {state} = useContext(RateContext)

    return (
        <>
            <Header />
            <div className="content">
                <div className="routes">
                        <Routes>
                            {state.auth ?
                                <>
                                    <Route path={'/'} element={<Home />} />
                                    <Route path={'/calc'} element={<Calc />} />
                                    <Route path={'/info'} element={<Info />} />
                                    <Route path={'/sample'} element={<Sample />} />
                                </>
                                :
                                <Route path={'/'} element={<Home />} />
                            }
                        </Routes>
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default addClass(Layout, 'layout')