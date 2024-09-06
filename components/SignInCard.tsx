import { Button, Card, Divider, Form, Input } from 'antd';
import type { FC } from 'react';

interface SignInCardProps {}

const SignInCard: FC<SignInCardProps> = ({}) => {
        return (
            <Card title='Sign In' extra={<div><img src="/assets/signin.png" alt='images' className='w-5 h-5'></img></div>} className='shadow-md text-xl font-semibold font-montserrat'>
                <Form layout='vertical' variant="borderless">
                <Form.Item label='Email'>
                <Input variant='borderless'/>
                <Divider className='p-0 m-0' style={{ borderColor: "#407BFF" }}></Divider>
                </Form.Item>

                <Form.Item label='Password' className='border-none'>
                <Input.Password variant='borderless'/>
                <Divider className='p-0 m-0' style={{ borderColor: "#407BFF" }}></Divider>
                </Form.Item>
                <p className='text-accent-color italic underline text-xs float-end cursor-pointer'>Forgot Password?</p>

                <Button type='primary' className='w-full my-4 py-5'>Sign In</Button>
                <p className='text-accent-color'>Don’t have an account yet? <a href="/home/nationality"><span className='underline font-semibold cursor-pointer'>Register</span></a></p>
                </Form>
            </Card>
        );
}
export default SignInCard;