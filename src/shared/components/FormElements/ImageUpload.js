import React ,{useRef, useState, useEffect} from 'react'
import Button from './Button'
import './ImageUpload.css'

const ImageUpload = props => {
    const [file,setFile]= useState()
    const [previewUrl, setPreviewUrl]= useState()
    const [isValid, setIsValid]= useState(false)

    useEffect(()=> {
        if (!file) {
           return 
        }
        
    },[file])

    const filePickerRef = useRef()

    const pickedHandler = event =>{
        let pickedFile
        let fileIsValid= isValid
        if(event.target.files && event.target.files.length === 1){
            pickedFile = event.target.files[0]
            setFile(pickedFile)
            setIsValid(true)
            fileIsValid = true
        }else{
            setIsValid(false)
            fileIsValid = false
        }
        props.onInput(props.id, pickedFile, fileIsValid)
    }

    const pickImageHandler =() => {
        filePickerRef.current.click()
    }

    return <div className="form-control">
        <input 
        id ={props.id}
        ref={filePickerRef} 
        style={{display:'none'}} 
        type="file" 
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler} 
        />
        <div className={`image-upload ${props.center && 'center'}`} >
            <div className='image-upload__preview'>
                <img src='' alt='Preview'/>
            </div>
            <Button type='button' onClick={pickImageHandler}>Pick Image</Button>
        </div>
    </div>
}
export default ImageUpload