import React from 'react'
import { Grid, Image,Container } from 'semantic-ui-react'
import './home.css'
import CartSummary from '../layouts/CartSummary'

export default function Home() {
    return (
        <div >
            <Container className='deneme'>
                <Grid columns={2} padded="vertically" >
                    <Grid.Row>
                        <Grid.Column width={8}  >
                            <Image className='img'  centered src='https://res.cloudinary.com/dubzmvbcl/image/upload/v1669322380/unem_vdpb3f.png' size="medium"></Image>
                        </Grid.Column>
                        <Grid.Column className='par' width={8}>
                            <CartSummary></CartSummary>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>



        </div>
    )
}
