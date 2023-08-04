import './Register.scss';
import { Button } from '../Button/Button';

export const Register = () => (
    <>
        <div className="modal-form">
            <div className="modal-input">
                <span>Войти</span>
                <input type="text" />
            </div>
            <div className="modal-input">
                <span>Войти</span>
                <input type="text" />
            </div>
        </div>
        <div className="modal-btn">
            <Button text="Зарегистрироваться" />
        </div>
    </>
)