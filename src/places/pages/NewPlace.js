import React from 'react'
import './NewPlace.css'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'

const NewPlace =()=>{
    return <form className='place-form'>
        <Input 
        element='input' 
        type='text' 
        label='title' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Enter a valid title' 
        />
    </form>
}

export default NewPlace