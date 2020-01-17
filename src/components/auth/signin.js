import React, { Component } from 'react'; 
import { Field, reduxForm } from 'redux-form'; 

class Signin extends Component {

    renderInput(field) {
        return <input className="form-control" {...field.input} type="field.type"/>
    }

    handleFormSubmit({email, password})  {
        console.log(email)
        console.log(password)
    }

    render() {
        const { handleSubmit } = this.props; 

        return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <label htmlFor="email">Email</label>
            <Field name="email" component={this.renderInput} type="text"/>
            <label htmlFor="password">Password</label> 
            <Field name="password" component={this.renderInput} type="text"/>

            <button action="submit" className="btn btn-primary">Sign In</button>
        </form>
        )
    }
}

export default reduxForm({form: "signin"})(Signin);