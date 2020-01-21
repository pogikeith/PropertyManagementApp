import axios from 'axios'; 

export function signinUser({email, password}) {
    axios.post('/signin')
}