import { RateContext } from '../../context/RateContext';
import './Sidebar.scss';
import { useContext } from 'react';

export const Sidebar = () => {
    const {state} = useContext(RateContext)
    return (
        <div className="sidebar">
            <div className="sidebar-head">
                <h3>Все валюты</h3>
            </div>
            <div className="sidebar-content">
                <ul>
                    {
                        Object.keys(state.currency).map((item, i) => (
                            <li key={item}>
                                <p>
                                    <span>
                                        <img src={state.currency[item].flag} alt={item} />&nbsp;{item}
                                    </span>
                                    &nbsp;{state.currency[item].name}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}