import { RateContext } from '../../context/RateContext';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import './Modal.scss';
import { useState, useContext } from 'react';

export const Modal = () => {
    const {
        state,
        modalHideHandler,
    } = useContext(RateContext)
    const [val, setVal] = useState('login')
    const links = [
        {name: 'Вход', id: 'login'},
        {name: 'Регистрация', id: 'register'},
    ]
    const cls = ['modal',]
    const windowHandler = id => {
        setVal(id)
    }
    if (state.showModal) {
        cls.push('modal-show')
    }

    return (
        <div className={cls.join(' ')}>
            <div className="modal-head">
                <ul>
                    {links.map((link, i) => (
                        <li
                            style={{
                                fontWeight: link.id === val ? "bold" : "normal",
                                cursor: 'pointer',
                            }}
                            key={i}
                            onClick={() => windowHandler(link.id)}
                        >{link.name}</li>
                    ))}
                </ul>
                <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={modalHideHandler}
                />
            </div>
            <hr />
            {
                val === 'register' ? <Register /> : <Login />
            }
        </div>
    )
}