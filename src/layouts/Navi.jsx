import React, { useState } from 'react'
import { Menu, Container, Image,Button} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import "./CartSummary.css"



export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params) {
    setIsAuthenticated(false);
  }

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  const naviLogo = 'https://res.cloudinary.com/dubzmvbcl/image/upload/v1669322380/unem_vdpb3f.png';



  return (

    <div> <Menu fixed='top' inverted>
      <Container>

        <Menu.Item><Image className='navlogo' src={naviLogo} /></Menu.Item>
      


        <Menu.Menu position='right'>

          {isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}


        </Menu.Menu>
      </Container>

    </Menu>
    </div>
  )
}
