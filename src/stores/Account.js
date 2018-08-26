import { observable, action } from "mobx";

class Account {
  @observable admin = {
    token: '',
    avatar: null,
    email: '',
    id: null,
    bio: '',
    firstname: '',
    lastname: '',
    phone: '',
    state: null,
    lga: null,
    ward: null,
    username: '',
    membership_number: '',
    role: null,
    roles: null,
    vin: null,
  }
  @observable authenticated = false
  @observable disabled = false
  @observable price = 1000


  // Functions (Use actions for anything that modifies observables)
  @action
  login(history) {
    this.authenticated = true
    history.push('/home')
    console.log(this.authenticated)
  }
  logout() {
    this.authenticated = false
  }
  changePrice() {
    this.price = 7000
    console.log(this.price)
  }
}


const accountStore = new Account()
export default accountStore