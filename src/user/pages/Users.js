import React,{ useEffect, useState} from 'react'
import UsersList from '../components/UsersList'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import { useHttpClient } from '../../shared/hooks/http-hook'
const Users= ()=>{
    const {isLoading, error, sendRequest,clearError}= useHttpClient()
    const [loadedUsers,setLoadedUsers]= useState() 

    useEffect(()=>{
        const fetchUsers = async ()=> {
            try {                
                const responseData = await sendRequest(process.env.REACT_APP_BAKEND_URL + '/users/')
                setLoadedUsers(responseData.users)
            } catch (err) {}
        }
        fetchUsers()
    },[sendRequest])

    //image:'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=126',
    
    return <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
        <div className='center'>
            <LoadingSpinner/>
        </div>)}
        {!isLoading && loadedUsers && <UsersList items={loadedUsers}/>}

    </React.Fragment>
}
export default Users