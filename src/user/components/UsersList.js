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
        {props.items.map(user=>{
            return <UserItem/>
        })}
    </ul>
}
export default UsersList 