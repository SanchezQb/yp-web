import { observable, action } from "mobx";
import axios from 'axios'

class Account {
  @observable user = {
    token: '',
    avatar: null,
  }
  @observable disabled = false



  // Functions (Use actions for anything that modifies observables)
  @action
  login(data, history) {
    const request = {
      user: {
        ...data
      }
    }
    this.disabled = true
    axios({
      url: 'https://ypn-base-01.herokuapp.com/login', 
      method: 'POST', 
      data: request,
  
      
  }).then(res => {
      this.disabled = false
      history.push('/home')
      this.user.token = res.data.data.token
      localStorage.setItem('authenticated', JSON.stringify(res.data.data.token))

  }).catch(err => {
    if(err.response.status == 403) {
      alert("Incorrect email/password combination")
    }
    else {
      alert('An error occurred, please try again')
    }
    this.disabled = false
  })
  }
  logout() {
    localStorage.clear()
  }
  // loadData() {
  //   this.user =JSON.parse(localStorage.getItem('admin'))
  // }
}


const accountStore = new Account()
export default accountStore