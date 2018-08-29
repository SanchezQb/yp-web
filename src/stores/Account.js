import { observable, action } from "mobx";
import axios from 'axios'

class Account {
  @observable user = {
    token: '',
    avatar: null,
    email: '',
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    role: null,
  }
  @observable authenticated = false
  @observable disabled = false
  @observable open = false



  // Functions (Use actions for anything that modifies observables)
  @action
  login(data, history) {
    const request = {
      user: {
        ...data
      }
    }
    this.open = true
    this.disabled = true
    axios({
      url: 'https://ypn-base-01.herokuapp.com/login', 
      method: 'POST', 
      data: request,
      headers: {'Access-Control-Allow-Origin': '*'}
      
  }).then(res => {
      this.disabled = false
      this.user.token = res.data.data.token
      this.user.avatar = res.data.data.user.avatar
      this.user.email =  res.data.data.user.email
      this.user.id = res.data.data.user.id
      this.user.firstname = res.data.data.user.firstname
      this.user.lastname = res.data.data.user.lastname
      this.user.username = res.data.data.user.username
      this.user.role = res.data.data.user.role
      this.authenticated = true
      localStorage.setItem('admin', JSON.stringify(this.user))
      localStorage.setItem('authenticated', JSON.stringify({authenticated: true}))
      history.push('/home')
  }).catch(err => {
    alert(err.response.data.errors);
    this.disabled = false
  })
  }
  logout() {
    this.authenticated = false
    localStorage.clear()
  }
  setAuth(data) {
    this.user = {...data}
    this.authenticated = true
  }
  checkAuth() {
    return this.authenticated
  }
}


const accountStore = new Account()
export default accountStore