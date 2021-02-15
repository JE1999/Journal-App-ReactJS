import { memo } from "react"

interface IError {
    error: string
}

const Alert = ({error}: IError) => {

    return (
        <div className="auth__alert-error">
            {error}
        </div>
    )

}

export default memo(Alert)
