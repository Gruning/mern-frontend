import React from 'react'
import './Input.css'

const Input = props =>{
    const element = props.element ==='input' ? <input/> : <textarea/>

    return <div className={`form-control`}>
        <label htmlFor={props.id}>{props.label}</label>
    </div>
}

export default Input