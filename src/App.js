import React,{useContext,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext)
  const {db,auth} = useContext(FirebaseContext)
  useEffect(()=>{
     auth.onAuthStateChanged((user)=>{
      setUser(user)
     })
  })
  return (
    <div>
      <Post>
      <BrowserRouter>
        <Routes>
        <Route exact  path='/' Component={Home}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/login' Component={Login}/>
        <Route path='/create' Component={Create}/>
        <Route path='/view' Component={View}/>
        </Routes>
      </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
