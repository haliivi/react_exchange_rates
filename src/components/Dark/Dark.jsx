import './Dark.scss'

export const Dark = props => {
    const cls = ['dark']
    if (props.showModal) {
        cls.push('show-dark')
    }

    return <div className={cls.join(' ')} onClick={props.modalHideHandler}></div>
}