import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import swal from 'sweetalert2';
import { login } from '../services/login';
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        login(data).then(res => {
            if (res.data.type === 'error') {
                swal.fire({
                    title: 'Uyarı!',
                    text: res.data.message,
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Tamam'
                })
                return;
            }

            const payload = jwtDecode(res.data.token)
            const userData = {
                name: payload.fullname,
                role: payload.role,
                username: payload.username,
            };
            localStorage.setItem('userData', JSON.stringify(userData))
            navigate("/home");

        }).catch(err => console.log(err))
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className='mb-0 w-50 mt-4'>
                <CardBody>
                    <Row>
                        <Col style={{ textAlign: "left" }} lg="12">
                            <h2 className='brand-text text-primary ml-1 text-center'>Admin Panel</h2>
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label for="username">Kullanıcı Adı</Label>
                            <Input
                                style={{ margin: '0 auto' }}
                                type="text"
                                id="username"
                                name="username"
                                innerRef={register({ required: "Kullanıcı Adı boş bırakılamaz" })}
                                className='w-50'
                            />
                            <div>
                                {
                                    errors.username?.message
                                }
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password"> Şifre</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                innerRef={register({ required: "Şifre boş bırakılamaz" })}
                                className='w-50'
                                style={{ margin: '0 auto' }}
                            />
                            <div>
                                {
                                    errors.password?.message
                                }
                            </div>


                        </FormGroup>

                        <Button type="submit" color='primary'>
                            Giriş Yap
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div >
    )
}

export default Login