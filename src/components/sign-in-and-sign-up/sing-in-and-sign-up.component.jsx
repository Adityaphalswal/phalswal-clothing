import React from "react";

import SignIn from "../sign-in/sign-in.components";
import SignUp from "../sign-up/sign-up.components";

import './sign-in-and-sign-up.styles.scss';

const SignInAndSingUpPage = () => (
    <div className="sing-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);
export default SignInAndSingUpPage