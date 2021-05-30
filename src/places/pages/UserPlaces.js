import React from 'react'
import { useParams } from "react-router-dom"

import PlaceList from '../components/PlaceList'
import { useHttpClient } from '../../shared/hooks/http-hook'

            //'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
const UserPlaces=()=>{
    const {isLoading, error, sendRequest,clearError}= useHttpClient()
    const userId = useParams().userId
    const loadedPlaces = {}// DUMMY_PLACES.filter(place=>place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces