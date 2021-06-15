import React from 'react'
import './imageUpload'

const imageUpload = props => {
    return <div className="form-control">
        <input id ={props.id} style={{display:none}} type="file" accept=".jpg" />
    </div>
}
export default imageUpload