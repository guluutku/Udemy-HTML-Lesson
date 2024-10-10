import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { FormGroup, Form, Button, Input, Label } from 'reactstrap';

export default class FormDemo2 extends Component {

    state = {
        email: "",
        password: "",
        city: "",
        description: ""
    }

    onChangeHandler = (e) => {
        // this.setState({ username: e.target.value });
        let name = e.target.name;
        let value = e.target.value;

        this.setState({ [name]: value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        alertify.success(this.state.email + " - added to DB!");
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input name="email" type='email' id='email' placeholder='Enter Email' onChange={this.onChangeHandler} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type='password' id='password' placeholder='Enter Password' onChange={this.onChangeHandler} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">description</Label>
                        <Input name="description" type='text' id='description' placeholder='Enter Description' onChange={this.onChangeHandler} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input name="city" type='select' id='city' placeholder='Enter City' onChange={this.onChangeHandler} >
                            <option>Ankara</option>
                            <option>Adana</option>
                            <option>Diyarbakır</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                        </Input>
                    </FormGroup>

                    <Button type='submit'>Save</Button>
                </Form>
            </div>
        )
    }

}
