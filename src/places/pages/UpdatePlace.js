import React from 'react'
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import './PlaceForm.css'
import { useForm } from "../../shared/hooks/form-hook";

const DUMMY_PLACES =[
        {
            id:'p1',
            title:'Empire State Building',
            description:'a famous Building',
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
            address:'20 W 34th St, New York, NY 10001, United States',
            location:{
                lat:40.7484405,
                lng:-73.9878531,
            },
            creator:'u1',
        },
        {
            id:'p2',
            title:'Empire State Building',
            description:'the same building',
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Empire_State_Building%2C_New_York%2C_NY.jpg/256px-Empire_State_Building%2C_New_York%2C_NY.jpg",
            address:'20 W 34th St, New York, NY 10001, United States',
            location:{
                lat:40.7484405,
                lng:-73.9878531,
            },
            creator:'u2',
        },
    ]

const UpdatePlace = ()=>{
    const placeId = useParams().placeId
    
    const [formState, inputHandler, setFormData]=useForm({
        title:{
            value : '',
            isValid: false
        },
        description:{
            value : '',
            isValid:false
        }
    },false)
    
    const indentifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    setFormData({
            title:{
            value : '',
            isValid: false
        },
        description:{
            value : '',
            isValid:false
        }
    },true)

    const placeUpdateSubmitHandler = event =>{
        event.preventDefault()
        console.log(formState.inputs)
    }

    if (!indentifiedPlace) {
        return <div className='center'>
            <h2>Clould Find no Place</h2>
        </div>
    }
    return <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
        <Input
            id="title"
            element='input'
            type='text'
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Enter a valid title'
            onInput={inputHandler}
            initialValue= {formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
        />
        <Input
            id='description'
            element='textarea' 
            label='Description' 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText='Enter a valid description (minimum 5 characters)' 
            onInput={inputHandler}
            initialValue= {formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>Update</Button>
        
    </form>
}

export default UpdatePlace
