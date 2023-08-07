import './Input.scss'

function isInvalid({valid, touched,shouldValidate}) {
    return !valid && touched && shouldValidate
}

export const Input = props => {
    const cls = ['modal-input']
    const {
        type='text',
        value,
        onChange,
        label,
        errMessage,
    } = props

    const htmlFor = `${type}-${Math.random()}`

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={type}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
            {
                isInvalid(props) ? <span className="input-invalid">{errMessage || 'Введите верное значение'}</span> : null
            }
        </div>
    )
}