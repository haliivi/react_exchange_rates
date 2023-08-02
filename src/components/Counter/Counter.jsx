import { useContext } from 'react';
import { RateContext } from '../../context/RateContext'
import './Counter.scss';

export const Counter = () => {
    const {
        state,
        inputValueHandler,
        currencyValueHandler,
        calculatorHandler,
    } = useContext(RateContext)
    return (
        <div className="calculator-head">
            <div>
                <h4>Я хочу обменять:</h4>
            </div>
            <div className="operation">
                <span>
                    <input
                        type="number"
                        value={state.inputValue}
                        onChange={inputValueHandler}
                    />&nbsp; {state.base}
                </span>
                <select value={state.currencyValue} onChange={currencyValueHandler}>
                    {Object.keys(state.currency).map(item => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
                <button onClick={() => calculatorHandler(state.currencyValue)}>Посчитать</button>
            </div>
        </div>
    )
}