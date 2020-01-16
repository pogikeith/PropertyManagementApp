import React, { Component } from 'react'; 
import { Field, reduxForm } from 'redux-form'; 

class Signin extends Component {

    renderInput(Field) {
        return <input className="form-control" {...field.input} type="field.type"/>
    }

    handleSubmit = function () {
        console.log('trying to handle');
    }

    render() {
        const { handleSubmit } = this.props; 

        return (
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
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