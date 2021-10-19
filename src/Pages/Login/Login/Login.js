import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] =useState(false);

    const location= useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }


    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(email, password)
        if(password.length < 6){
            setError('Password must be at least 6 characters long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setError('');
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const proccessLogin = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error =>{
            setError(error.message);
        })
    }


    const googleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }


    const handlePassword = e =>{
        setPassword(e.target.value);
    }


    const {signInUsingGoogle} = useAuth();

    return (
        <div className="login-section ">
            <div>
                <Form onSubmit={handleLogin} className="mt-5 mb-5 mx-5">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck" onChange={toggleLogin}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Already Registered?" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <h5 className="text-danger">{error}</h5>
                        <Button type="submit">Please {isLogin? 'Login': 'Register'}</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <div className="login-btn">
                <button onClick={googleLogin} className="all-btn">Sign With Google</button>
            </div>
        </div>




















    //    <div>
    //         <form>
    //             <div class="row mb-3">
    //                 <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    //                 <div class="col-sm-10">
    //                 <input type="email" class="form-control" id="inputEmail3"/>
    //                 </div>
    //             </div>
    //             <div class="row mb-3">
    //                 <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    //                 <div class="col-sm-10">
    //                 <input type="password" class="form-control" id="inputPassword3"/>
    //                 </div>
    //             </div>
    //             <div class="row mb-3">
    //                 <div class="col-sm-10 offset-sm-2">
    //                 <div class="form-check">
    //                     <input class="form-check-input" type="checkbox" id="gridCheck1"/>
    //                     <label class="form-check-label" for="gridCheck1">
    //                     Example checkbox
    //                     </label>
    //                 </div>
    //                 </div>
    //             </div>
    //             <button type="submit" class="btn btn-primary">Sign in</button>
    //         </form>
    //    </div>
    );
};

export default Login;