import { React, useState, useEffect } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import CommentService from '../services/commentService'
import "./CartSummary.css"


export default function CartSummary() {

    const [images, setImages] = useState([])
    useEffect(() => {

        let commentService = new CommentService()
        commentService.getCommentsDetail().then(result => setImages(result.data.data))


    }, [])



    return (
        <div>


            <Container className='cart-summary'>
                
                    {
                        images.map(image => (


                            <Card   key={image.id} >
                                <Image className='cImage' src={image.url}   wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{image.name}  {image.surname}</Card.Header>
                                    <Card.Meta>{image.addDate}</Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                </Card.Content>

                            </Card>



                        ))
                    }
                

            </Container>



        </div>
    )
}
