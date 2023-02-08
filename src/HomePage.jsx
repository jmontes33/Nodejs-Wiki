import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import HomePageAuthenticated from './HomePageAuthenticated';
import HomePageNoAuthenticated from './HomePageNoAuthenticated';

function HomePage() {
    const {isAuthenticated} = useAuth0();

  if (isAuthenticated) {
    return (
        <HomePageAuthenticated />
    )
  } else {
    return (
        <HomePageNoAuthenticated />
    )
  }
}

export default HomePage