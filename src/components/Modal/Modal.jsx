import { Login } from '../Login/Login';
import { Register } from '../Register/Register'
import './Modal.scss';

export const Modal = () => (
    <div className="modal">
        <div className="modal-head">
            <ul>
                <li>Вход</li>
                <li>Регистрация</li>
            </ul>
            <img className="fa fa-times" src="" alt="" aria-hidden="true" />
        </div>
        <hr />
        <Login />
        {/* <Register /> */}
    </div>
)