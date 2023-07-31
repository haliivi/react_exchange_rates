export const addClass = (Component, className) => {
    return (props) => (
        <div className={className}>
            <Component />
        </div>
    )
}