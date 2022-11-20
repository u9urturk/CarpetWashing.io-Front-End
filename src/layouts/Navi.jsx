import React, {useState} from 'react'
import {  Menu ,Container , Image} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import "./CartSummary.css"

export default function Navi() {

  const[isAuthenticated,setIsAuthenticated] = useState(true)

  function handleSignOut(params){
    setIsAuthenticated(false);
  }

  function handleSignIn(params){
    setIsAuthenticated(true);
  }

  return (
    <div> <Menu fixed='top' inverted>
      <Container>
        <Menu.Item><Image className='navlogo'  src="https://p81.cooltext.com/Rendered/Cool%20Text%20-%20nem%20Ykama%20423882323353241.png"/></Menu.Item>
        

        <Menu.Menu position='right'>

          {isAuthenticated? <SignedIn signOut={handleSignOut}></SignedIn>:<SignedOut signIn={handleSignIn}></SignedOut>}
          
         
        </Menu.Menu>

      </Container>

    </Menu> </div>
  )
}
