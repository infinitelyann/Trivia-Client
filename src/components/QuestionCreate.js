import React from 'react'
import { Button, Checkbox, Form, Radio} from 'semantic-ui-react'


const CreateQuestion = (props, user) => {
        console.log(user)
//     state = {}
//   handleChange = (e, { value }) => this.setState({ value })
    return(

        <>

        <Form>
            <Form.Field>
                <Radio
                    label='Multiple Choice'
                    name='radioGroup'
                    value='Multiple Choice'

                />
                  <Radio
                    label='Multiple Choice'
                    name='radioGroup'
                    value='True / False'

                />
            </Form.Field>
            <Form.Field>
            <label>Question:</label>
                <input placeholder='Enter your trivia question!' />
            </Form.Field>
            <Form.Field>
            <label>O:</label>
                <input placeholder='Enter your trivia question!' />
            </Form.Field>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>D</Button>
        </Form>
        </>
    )


    

}

export default CreateQuestion