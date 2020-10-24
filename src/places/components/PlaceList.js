import React from 'react'
import Card from '../../shared/components/UIElements/Card'

import './PlaceList.css' 

const PlaceList = props =>{
    if (props.items.length === 0) 
        return<div className='place-list center'>
            <Card>
                <h2>No Places found. Create one!</h2>
                <button></button>
            </Card>
        </div>
    
    return
}

export default PlaceList