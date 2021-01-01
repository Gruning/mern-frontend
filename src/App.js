import React,{useState, useCallback} from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Auth from './user/pages/Auth'
import {AuthContext} from './shared/context/auth-context'

const App =() => {
  const [isLoggedIn,setIsLoggedIn]= useState(false)
  
  const login = useCallback(()=>{
    setIsLoggedIn(true)
  },[])

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  },[])

  let routes
  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces/>
        </Route>

        <Redirect to='/auth'/>
      </React.Fragment>
    )
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces/>
        </Route>
        <Route path='/auth'>
          <Auth/>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId" exact>
          <UpdatePlace/>
        </Route>
        <Redirect to='/'/>
      </React.Fragment>
    )
  }

  return(
    <AuthContext.Provider 
    value={{isLogedIn:isLoggedIn, login:login, logout:logout}}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>{routes}</Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  ) 
}

export default App