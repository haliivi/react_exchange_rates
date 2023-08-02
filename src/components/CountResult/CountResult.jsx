import './CountResult.scss';
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext'

export const CountResult = () => {
    const {state} = useContext(RateContext)
    return (
        <div className="calculate-result">
            <ul>
                <li>
                    <p>
                        <span>{state.inputValue}&nbsp;{state.base}</span>
                        &nbsp;=&nbsp;
                        <span>{state.result}&nbsp;{state.currencyValue}</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}