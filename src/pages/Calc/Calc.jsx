import './Calc.scss';
import { Counter } from '../../components/Counter/Counter'
import { CountResult } from '../../components/CountResult/CountResult'

export const Calc = () => {
    return (
        <div className="calculator">
            <div className="calculator-container">
                <Counter />
                <CountResult />
            </div>
        </div>
    )
}