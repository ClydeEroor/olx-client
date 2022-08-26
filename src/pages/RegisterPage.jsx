import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = Yup.object({
    username: Yup.string().min(3).required(),
    password: Yup.string().min(6).required()
})

export const RegisterPage = () => {
    const status = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status) {
            toast(status.status)
        }
    }, [status])

    const handleSubmit = ({username, password}) => {
        dispatch(registerUser({username, password}))
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className="w-1/4 h-60 mx-auto mt-60">
                <h1 className="text-lg text-white text-center">Регистрация</h1>
                <label className="text-xs text-gray-400">
                    Username:
                    <Field
                        id="username"
                        name={"username"}
                        placeholder={"User name"}
                        className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
                    />
                </label>
                <ErrorMessage name={'username'}/>


                <label className="text-xs text-gray-400">
                    Password:
                    <Field
                        id={"password"}
                        type="password"
                        name={"password"}
                        placeholder="Password"
                        className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2  text-xs outline-none placeholder:text-gray-700"
                    />
                </label>
                <ErrorMessage name={'password'}/>

                <div className="flex gap-8 justify-center mt-4">
                    <button
                        type="submit"
                        className="justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
                    >Подтвердить
                    </button>
                    <Link to='/login'
                          className="flex justify-center items-center text-xs text-white"
                    >Уже зарегистрированы ?
                    </Link>
                </div>
            </Form>
        </Formik>
    );
};

export default RegisterPage;
