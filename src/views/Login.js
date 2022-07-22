import React, { useState, useEffect } from 'react';
import { useSkin } from '@hooks/useSkin'
import { Link, useNavigate } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'
import '@styles/react/pages/page-authentication.scss'
import { useTranslation } from 'react-i18next'

import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '@store/login'
import PreDashboardWrapper from './PreDashboardWrapper';
import {LOGIN_DARK, LOGIN_} from '../utility/Source';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { skin } = useSkin()
  const {t } = useTranslation();
  const navigate = useNavigate();
  const illustration = skin === 'dark' ? LOGIN_DARK : LOGIN_;
  const dispatch = useDispatch();

  const signIn = ()=>{
    let payload = {
      username: email,
      password: password,
    }
    dispatch(getLogin(payload))
  }  

  return (
    <PreDashboardWrapper bgPage={illustration}>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Welcome to Chloe! 👋
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account</CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='Email Address' autoFocus onChange={e=>setEmail(e.target.value)} />
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password'  onChange={e=>setPassword(e.target.value)} />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
              <Button color='primary' block onClick={signIn}>
                Sign in
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
        </PreDashboardWrapper>
          )
}

export default Login
