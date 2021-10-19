import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css';

const Contact = () => {
    const history = useHistory();
    const messegeBtn = () =>{
        history.push('/messege')
    }
    return (
        <div className="contact-body">
            <h1 className="contact-title">Contact With Us</h1>
            <div className="contact-body-1">
                <div className="contact-img">
                <img src="https://assets.wam.ae/uploads/2021/06/1182412984659664.jpg" alt="" />
                </div>
                <div className="contact-detail">
                    <h3>Address</h3>
                    <h5>13323 California St.Omaha, NE, 18813</h5>
                    <h3>Tel:</h3>
                    <h5>1 (855) 123 780 456</h5>
                    <h5>+8801744503499</h5>
                    <h3>Email</h3>
                    <h5 className="margin-bottom">farukabdullahal9@gmail.com</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write YOu Want</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <button onClick={messegeBtn} className="form-btn">SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;