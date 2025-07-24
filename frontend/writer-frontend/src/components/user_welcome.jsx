import { useState } from "react";
import "../index.css"

export default function UserWelcomeCard() {
    const [ SignIn, setSignIn ] = useState(true);

    let content;
    if(SignIn) {
        content = <SignInForm setSignIn={setSignIn}/>;
    } else {
        content = <SignUpForm setSignIn={setSignIn}/>;
    }

    return (
        <>
            {content}
        </>
    );
}

function SignInForm({ setSignIn }) {
    function switchToSignUp() {
        setSignIn(false);
    }

    return (
        <div className="login">
            <form>
                <div className='input_box'>
                    <label for='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                    />
                </div>
                
                <div className='input_box'>
                    <label for='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter your password'
                    />
                </div>
                <input
                    type='submit'
                    value='Sign In'
                    className='btn'

                />
            </form>
            <a href='#'>Forgot password?</a>
            <p>Don't have an account? <button onClick={switchToSignUp}>Sign Up</button></p>
        </div>
    )
}

function SignUpForm({ setSignIn }) {
    function switchToSignIn() {
        setSignIn(true);
    }

    return (
        <div className="login">
            <form>
                <div className='input_box'>
                    <label for='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                    />
                </div>
                
                <div className='input_box'>
                    <label for='create_password'>Password</label>
                    <input
                        type='password'
                        id='create_password'
                        name='password'
                        placeholder='Create password'
                    />
                </div>

                <div className='input_box'>
                    <label for='confirm_password'>Password</label>
                    <input
                        type='password'
                        id='confirm_password'
                        name='password'
                        placeholder='Confirm password'
                    />
                </div>

                <input
                    type='submit'
                    value='Sign In'
                    className='btn'

                />
            </form>
            <a href='#'>Forgot password?</a>
            <p>Already have an account? <button onClick={switchToSignIn}>Sign In</button></p>
        </div>
    );
}