import React, { Component, Fragment} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Nav from '../Nav'
import moment from 'moment';
import config from '../../config'
import axios from 'axios'

BigCalendar.momentLocalizer(moment);

const floatStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

export default class Calendar extends Component {

  state = {
    isLoading: true,
    events: []
  }

  componentDidMount() {
      this.fetchEvents()
  }
  eventStyleGetter(event, start, end, isSelected) {
    let unitArray = ['444','82be30', 'f0ba00']
    let rand = unitArray[Math.floor(Math.random() * unitArray.length)];
    var backgroundColor = '#' + rand;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: '#fff',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}

fetchEvents = async () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
  await axios({
       url: `${config.nodeService}/events`, 
       method: 'GET', 
       headers: {
           "Content-Type": "application/json",
           "Authorization": token
       },
   }).then(res => {
       console.log(res.data.data)
       const response = []
       res.data.data.map(event => {
           const obj = {
                id: event._id,
                title: event.name,
                start: event.startDate,
                end: event.endDate,
                attendees: event.members,
                details: event.details
           }
           response.push(obj)
           this.setState({events: response, isLoading: false})
       })
   })
   .catch(error => {
       this.setState({
           isLoading: false,
           error: true
       })
   })
}
  render() {
    if(this.state.isLoading) {
      return (
          <div>
              <Nav />
              <div className="loader">
                  <CircularProgress color="#82BE30" size={60} thickness={5} />
              </div>
          </div>
      )
  }
    return (
        <Fragment>
          <Nav />
          <div className="calendar">
            <BigCalendar
              defaultDate={new Date()}
              selectable
              onSelectEvent={event => {this.props.history.push(`/calendar-management/${event.id}`, event)}}
              events={this.state.events}
              views={['month', 'week', 'day']}
              step={60}
              showMultiDayTimes
              eventPropGetter={(this.eventStyleGetter)}
          />
        </div>
          <FloatingActionButton style={floatStyle} onClick={() => {
                this.props.history.push('/calendar-management/add')
            }}>
                <ContentAdd />
          </FloatingActionButton>
        </Fragment>
    )
  }
}




