import React from 'react';

// import css
import "./sign-up.styles.css";

function SignUp(props) {
    return(
        <div className="signUp">
            <div className="signUp__text"><a href={props.url}>{props.text}</a></div>
        </div>
    );
}

export default SignUp;