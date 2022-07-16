import React from 'react';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div style={{margin: '20px'}}>Welcome {user?.email}</div>
  )
}

export default Home