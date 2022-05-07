import React from 'react';
import SignInStyle from "./SignIn.module.css";
import Google from "../../../assets/images/google.svg";
import Facebook from "../../../assets/images/facebook-sign.svg";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../../redux/AuthReducer";

const OtherSign = () => {
    const isRegisterDis = useDispatch()
    const navigate = () => {
        isRegisterDis(register(false))
    }

    return (
        <div className={SignInStyle.other}>
            <p className={SignInStyle.other__title}>
                OR LOG IN BY
            </p>
            <div className={SignInStyle.other__providers}>
                <button>
                    <img src={Google} alt="Google"/>
                </button>
                <button>
                    <img src={Facebook} alt="Facebook"/>
                </button>
            </div>
            <p className={SignInStyle.other__not_account}>
                Don't have account?
                <span>
                    <NavLink onClick={navigate} to='/signup'>SIGN UP</NavLink>
                </span>
            </p>
        </div>
    );
};

export {OtherSign};
