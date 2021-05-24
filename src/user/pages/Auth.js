import React,{useState, useContext} from 'react'

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
}from '../../shared/util/validators'
import {useForm} from '../../shared/hooks/form-hook'
import {AuthContext} from '../../shared/context/auth-context'
import './Auth.css'

const Auth = ()=>{
    const auth = useContext(AuthContext)
    const [isLoginMode,setIsLoginMode]=useState(true)
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState()
    const [formState, inputHandler, setFormData] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    },false)
    const switchModeHandler = () =>{
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name:undefined
            },formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name:{
                    value:'',
                    isValid:false
                }
            },false)
        }
        setIsLoginMode(prevMode =>!prevMode)
    }
    const authSubmitHandler = async e =>{
        e.preventDefault()

        if(isLoginMode){

        }else{
            try{
                setIsLoading(true)
                const response= await fetch('http://localhost:5000/api/users/signup',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/Json'
                    },
                    body: JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                })

                const responseData= await response.json()
                console.log(responseData)
                setIsLoading(false)
                auth.login()
            }catch(err){
                console.log(err)
                setIsLoading(false)
                setError(err.message|| 'Error authenticating')    
            }
        }   

    }
    return <Card className='authentication'>
        {isLoading && <LoadingSpinner asOverlay/>}
        <h2>Login required</h2>
        <hr/>
        <form onSubmit={authSubmitHandler}>
            {!isLoginMode && <Input
                element='input'
                id='name'
                type='text'
                label='Username'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Username is required'
                onInput={inputHandler}
            />}
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
                {isLoginMode? 'Login': 'Signup'}
            </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
            Switch to {isLoginMode? 'Signup': 'Login'}
        </Button>
    </Card>
}

export default Auth
