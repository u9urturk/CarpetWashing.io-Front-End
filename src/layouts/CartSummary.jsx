import { React, useState, useEffect } from 'react'
import {  Card, Image } from 'semantic-ui-react'
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


           
                
                    {
                        images.map(image => (


                            <Card fluid   centered key={image.id} >
                                <Image className='cImage' src={image.url}   wrapped ui={false} />
                                <Card.Content >
                                    <Card.Header>{image.name}  {image.surname}</Card.Header>
                                    <Card.Meta>{image.addDate}</Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                </Card.Content>

                            </Card>



                        ))
                    }
                

            



        </div>
    )
}
