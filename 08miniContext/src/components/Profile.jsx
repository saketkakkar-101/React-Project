import React, { useContext } from 'react'
import UserContext from '../context/userContext'
function Profile() {
    const {user} = useContext(UserContext)
if (!user) return <div>please login</div>

return <div>Welcome {user.usernme}</div>

}

export default Profile

