import React from 'react'
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from "../../shared/util/validators";

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
    const indentifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)
    if (!indentifiedPlace) {
        return <div className='center'>
            <h2>Clould Find no Place</h2>
        </div>
    }
    return <form>
        <Input
            id="title"
            element='input'
            type='text'
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Enter a valid title'
            onInput={()=>{}}
            value= {indentifiedPlace.title}
            valid={true}
        />
        <Input
            id="description"
            element='textarea'
            label='Description'
            validators={[VALIDATOR_MINLENGTH]}
            errorText='minimum 5 characters'
            onInput={()=>{}}
            value= {indentifiedPlace.description}
            valid={true}
        />
        <Button type='submit' disabled={true}>Update</Button>
        
    </form>
}

export default UpdatePlace
