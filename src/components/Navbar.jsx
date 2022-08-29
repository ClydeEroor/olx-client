import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { checkIsAuth, logOut } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(logOut())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }


    const activeStyles = {
        color: 'white',
    }



    return (
        <div className="flex py-4 justify-between items-center">
            <span className="flex justify-center items-center w-20 h-10 bg-gray-500  text-xs text-white">POSTER</span>

            {
                isAuth && <ul className="flex gap-8">
                    <li>
                        <NavLink
                            to={'/'}
                            href="/"
                            className='text-xs text-gray-400 hover:text-white'
                            style={({isActive}) => isActive ? activeStyles : undefined}
                        >Главная</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/posts'}
                            href="/"
                            className='text-xs text-gray-400 hover:text-white'
                            style={({isActive}) => isActive ? activeStyles : undefined}
                        >Мои посты</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/new'}
                            href="/"
                            className='text-xs text-gray-400 hover:text-white'
                            style={({isActive}) => isActive ? activeStyles : undefined}
                        >Добавить пост</NavLink>
                    </li>
                </ul>
            }


            <div
                className="flex justify-center items-center bg-white text-xs text-black hover:text-teal-500 rounded-sm px-4 py-2">

                {isAuth ? (
                    <button onClick={logOutHandler}>Выйти</button>) : (<Link to={'/login'}>Войти</Link>)}
            </div>

        </div>
    );
};

export default Navbar;
