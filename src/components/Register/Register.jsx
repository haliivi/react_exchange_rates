import './Register.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';

export const Register = () => {
    const {renderInputs} = useContext(RateContext)
    return (
        <>
            <div className="modal-form">
                {renderInputs()}
            </div>
            <div className="modal-btn">
                <Button text="Зарегистрироваться" />
            </div>
        </>
    )
}