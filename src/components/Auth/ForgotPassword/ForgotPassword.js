import { AuthHeader, AuthWrapper, ForgotForm, Image } from '../AuthStyles'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ButtonWrapperFP, InputWrapper } from '../../Style/StyleForm'
import Back from '../../../assets/images/auth-another-back.png'
import Group from '../../../assets/images/group-other-auth.png'
import styled from 'styled-components'
import React from 'react'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../../../redux/AuthReducer'

const ForgotPassword = () => {
    const dispatch = useDispatch()

    return (
        <AuthWrapper>
            <AuthHeader>
                <Image src={Back} alt="back" />
            </AuthHeader>
            <ForgotForm>
                <Title>TYPE YOUR EMAIL</Title>
                <Message>
                    We will send you instruction on how to reset your password
                </Message>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    onSubmit={(values) => {
                        dispatch(resetPassword(values.email))
                    }}
                >
                    {() => (
                        <Form>
                            <InputWrapper>
                                <Field
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                />
                                <ErrorMessage name="email" component="div" />
                            </InputWrapper>

                            <ButtonWrapperFP>
                                <button type="submit">SEND</button>
                            </ButtonWrapperFP>
                        </Form>
                    )}
                </Formik>
            </ForgotForm>
            <GroupImg>
                <img src={Group} alt="group" />
            </GroupImg>
        </AuthWrapper>
    )
}

const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #5151c6;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 14px;
`

const Message = styled.div`
    background: #f1f1fe;
    padding: 16px 24px;
    border-radius: 12px;
    text-align: center;
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 40px;
    width: 100%;
`

const GroupImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    position: relative;
    z-index: 1;
`

export { ForgotPassword }
