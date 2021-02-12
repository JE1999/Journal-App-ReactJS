import { memo } from 'react'

interface IProps {
    children: JSX.Element[];
    handleSubmit: () => void;
}

const AppForm = (props: IProps) => {

    const {
        children,
        handleSubmit,
    } = props

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default memo(AppForm)