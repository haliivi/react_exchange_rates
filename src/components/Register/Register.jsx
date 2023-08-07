import './Register.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';

export const Register = () => {
    const {
        renderInputs,
        state,
        registerHandler,
    } = useContext(RateContext)

    return (
        <>
            <div className="modal-form">
                {renderInputs()}
            </div>
            <div className="modal-btn">
                <Button
                    text="Зарегистрироваться"
                    disabled={!state.isFormValid}
                    onClick={registerHandler}
                />
            </div>
        </>
    )
}