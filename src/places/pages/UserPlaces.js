import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import PlaceList from '../components/PlaceList'
import { useHttpClient } from '../../shared/hooks/http-hook'

            //'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
const UserPlaces=()=>{
    const [loadedPlaces,setLoadedPlaces]= useState()
    const {isLoading, error, sendRequest,clearError}= useHttpClient()
    const userId = useParams().userId
    useEffect(()=>{
        const fetchPlaces = async () =>{
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/places/user/${userId}`)
                setLoadedPlaces(responseData.places)

            } catch (err) {}
        }
        fetchPlaces()
    },[sendRequest, userId])
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces