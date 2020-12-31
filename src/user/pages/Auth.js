import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
}from '../../shared/util/validators'
import {useForm} from '../../shared/hooks/form-hook'
import './Auth.css'

const Auth = ()=>{
    const [formState, inputHandler] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    },false)

    return <Card className='authentication'>
        <h2>Login required</h2>
        <hr/>
        <form>
            <Input 
                element='input' 
                id='email' 
                type='email' 
                label='E-Mail'
                validators={[VALIDATOR_EMAIL()]} 
                errorText='Enter a valid email address'
                onInput={inputHandler}
            />
            <Input 
                element='input' 
                id='password' 
                type='password' 
                label='Password'
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText='Enter a valid password. At least 5 charcaters'
                onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
                Login
            </Button>
        </form>
    </Card>
}

export default Auth