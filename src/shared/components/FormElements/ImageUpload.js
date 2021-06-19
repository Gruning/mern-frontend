import React ,{useRef} from 'react'
import Button from './Button'
import './imageUpload.css'

const imageUpload = props => {
    const pickImageHandler =() => {}
const filePickerRef = useRef()
    return <div className="form-control">
        <input 
        id ={props.id} 
        style={{display:none}} 
        type="file" 
        accept=".jpg,.png,.jpeg" 
        />
        <div className={`image-upload ${props.center && 'center'}`} >
            <div className='image-upload__preview'>
                <img src='' alt='Preview'/>
            </div>
            <Button type='button' onClick={pickImageHandler}>Pick Image</Button>
        </div>
    </div>
}
export default imageUpload