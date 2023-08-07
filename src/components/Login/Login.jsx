import { Button } from '../Button/Button';
import './Login.scss';
import { Input } from '../../components/Input/Input'
import { useContext } from 'react';
import { RateContext } from '../../context/RateContext';

export const Login = () => {
    const {renderInputs} = useContext(RateContext)

    return (
        <>
            <div className="modal-form">
                {renderInputs()}
            </div>
            <div className="modal-btn">
                <Button text="Войти" />
            </div>
        </>
    )
}