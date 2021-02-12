import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import AppForm from '../../../components/Form/AppForm'
import AppInput from '../../../components/Input/AppInput'

interface IFormInputs {
    name: string;
    email: string;
    password: string;
    password2: string;
}
  
  const schema = yup.object().shape({
    name: yup.string().required().trim(),
    email: yup.string().required().email().trim(),
    password: yup.string().required().min(6).trim(),
    password2: yup.string().required().min(6).trim(),
});

export default function Register () {

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: IFormInputs) => {

        if(data.password !== data.password2){
            return console.log("Contrasena no coincide")
        }

        console.log(data);
    }

    return(
        <>
            <h1 className="auth__title">Register</h1>

            <AppForm
                handleSubmit={handleSubmit(onSubmit)}
            >

                <AppInput
                    className="auth__input" 
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoFocus
                    autoComplete="off"
                    register={register}
                    messageError={errors.name?.message}
                />

                <AppInput
                    className="auth__input" 
                    type="text"
                    placeholder="email"
                    name="email"
                    autoComplete="off"
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

                <AppInput
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    register={register}
                    messageError={errors.password2?.message}
                />

                <div className="auth__alert-error">
                    hola
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>


                <Link 
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>

            </AppForm>
        </>
    )
}