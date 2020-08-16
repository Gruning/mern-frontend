import React from 'react' 
import './UsersList.css'
import UserItem from './UserItem'
const UsersList = props =>{ 
    if (props.items.lengh === 0) {
        return <div className="center">
            <h2>No users found</h2>
        </div>
    }
    return <ul>
        {props.items.map(user=>(
             <UserItem key= { user.id } id={ user.id }/>
        ))}
    </ul>
}
export default UsersList 