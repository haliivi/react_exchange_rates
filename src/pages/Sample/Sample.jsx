import './Sample.scss';
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../../components/Button/Button'

export const Sample = () => {
    const {
        state,
        baseHandler,
        base2Handler,
        sampleDateHandler,
        dataWrite,
    } = useContext(RateContext)
    return (
        <div className="sample">
            <div className="sample-container">
                <div className="">
                    <h3>
                        Получить курс: &nbsp;
                        <select onChange={baseHandler} value={state.sample.base}>
                            {Object.keys(state.currency).map((item, i) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                            &nbsp;&nbsp;к&nbsp;&nbsp;
                        <select onChange={base2Handler} value={state.sample.base2}>
                            {Object.keys(state.currency).map((item, i) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </h3>
                </div>
                <div className="sample-head">
                    <span>Дата: <input type="date" onChange={sampleDateHandler} /></span>
                    <Button text='Получить курс' onClick={dataWrite} arg={state.sample} />
                </div>
                <div className="sample-result">
                    <ul></ul>
                </div>
            </div>
        </div>
    )
}