import { Button } from '../Button/Button'
import './Login.scss'

export const Login = () => (
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
            <Button text="Войти" />
        </div>
    </>
)