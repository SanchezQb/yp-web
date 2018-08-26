// import React, { Component } from 'react'
// import {List} from 'material-ui/List';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import CircularProgress from 'material-ui/CircularProgress';
// import axios from 'axios'
// import Nav from '../Nav'
// import CareerItem from './CareerItem'

// const style = {
//     margin: 0,
//     top: 'auto',
//     right: 20,
//     bottom: 20,
//     left: 'auto',
//     position: 'fixed'
//   };


// export default class Careers extends Component {
//     state = {
//         isLoading: true,
//         careers: []
//     }

//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => this.setState({
//             isLoading: false,
//             careers: res.data
//         }))
//     }
//     render() {
//         const careersData = this.state.careers.map(career => {
//             return (
//                 <CareerItem key={career.id} item={career} history={this.props.history}/>
//             )
//         })
//         if(this.state.isLoading) {
//             return (
//                 <div>
//                     <Nav />
//                     <div className="loader">
//                         <CircularProgress color="#590649" size={80} thickness={5} />
//                     </div>
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <Nav />
//                 <div className="questions">
//                     <h2>Questionnaire</h2>
//                     <List>
//                        {careersData}
//                     </List>
//                 </div>
//                 <FloatingActionButton style={style} onClick={() => {
//                         this.props.history.push('/questionnaire/add')
//                     }}>
//                         <ContentAdd />
//                 </FloatingActionButton>
//             </div>
//         )
//     }
// }