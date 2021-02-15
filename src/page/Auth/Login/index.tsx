import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import AppForm from '../../../components/Form/AppForm';
import AppInput from '../../../components/Input/AppInput'

import { startGoogleLoginAction, startLoginEmailPasswordAction } from '../../../actions/Auth/authAction'

import { IUiPayload } from '../../../types/Reducers/Ui/uiTypes';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email().trim(),
  password: yup.string().required().min(6).trim(),
});

export default function Login () {

    const dispatch = useDispatch();

    const stateUi = useSelector((state: IUiPayload) => state.ui)

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: IFormInputs): void => {
        dispatch(startLoginEmailPasswordAction(data.email, data.password));
    }

    const handleGoogleLogin = (): void => {
        dispatch(startGoogleLoginAction())
    }

    return (
        <>
            <h1 className="auth__title">Login</h1>

            <AppForm
                handleSubmit={handleSubmit(onSubmit)}
            >

                <AppInput
                    className="auth__input" 
                    type="text"
                    placeholder="email"
                    name="email"
                    autoFocus={false}
                    autoComplete="on"
                    register={register}
                    messageError={errors.email?.message}
                />

                <AppInput
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    register={register}
                    messageError={errors.password?.message}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={stateUi.loading}
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    className="link"
                    to="/auth/register"
                >
                    Create new account
                </Link>

            </AppForm>
        </>
    )
}
