import { memo } from "react";

interface IProps {
    className: string,
    type: string,
    name: string,
    placeholder?: string,
    autoFocus?: boolean,
    autoComplete?: 'on' | 'off',
    register: () => void,
    messageError?: string,
    value?: string,
}

const AppInput = (props: IProps) => {

    const {
        className,
        type,
        name,
        placeholder = '',
        autoFocus = false,
        autoComplete = 'off',
        register,
        messageError,
        value=""
    } = props

    return (
        <div className="auth__div-input">
            <input
                className={className} 
                type={type}
                name={name}
                placeholder={placeholder}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                ref={register}
                defaultValue={value}
            />
            <p>{messageError}</p>
        </div>
    )
}

export default memo(AppInput);