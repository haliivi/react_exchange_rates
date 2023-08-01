import { useContext } from 'react';
import { RateContext } from '../../context/RateContext'
import './Exchange.scss';

export const Exchange = () => {
    const {state} = useContext(RateContext)
    const currency = {...state.currency}

    return (
        <div className="exchange">
            <div className="exchange-container">
                <div className="exchange-content">
                    <div className="">
                        <p>Базовая валюта: {state.base}&nbsp;Дата: {state.date}&nbsp;</p>
                    </div>
                    <ul>
                        {
                            Object.keys(currency).map((item, i) => (
                                <li key={item}>
                                    <span><img src={currency[item].flag} alt={currency[item].name} />&nbsp;{item}</span>
                                    <span>{`1 ${state.base} = ${currency[item].course} ${item}`}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}