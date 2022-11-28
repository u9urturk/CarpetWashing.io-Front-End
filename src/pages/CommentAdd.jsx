import React from 'react'
import { Formik, Form,Field,ErrorMessage } from 'formik'
import * as Yup from "yup"
import { FormField ,Button, Label} from 'semantic-ui-react'
import "./commentAdd.css"

export default function CommentAdd() {
    const initialValues = { id: 1, userId: 1, comment: "" }
    const schema = Yup.object({
        comment: Yup.string().required("Yorum yapılmalı")
    })


    return (
        
            <Formik 
            initialValues={initialValues} 
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
            }} >
                <Form  className='ui form'>
                    <FormField className='deneme'>
                       <Field name="comment" placeholder="Yorum"></Field>
                       <ErrorMessage name="comment" render={
                        error=> <Label pointing basic color='red' content={error}></Label>
                       }></ErrorMessage>
                    </FormField> 
                    <Button color="green" type="submit">Gönder</Button>
                </Form>
            </Formik>


        
    )
}
