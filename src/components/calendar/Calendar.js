import React, { Component, Fragment} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Nav from '../Nav'
import moment from 'moment';
import events from './Events'

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
  eventStyleGetter(event, start, end, isSelected) {
    console.log(event);
    var backgroundColor = '#' + event.hexColor;
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
  render() {
    return (
        <Fragment>
          <Nav />
          <div className="calendar">
            <BigCalendar
              defaultDate={new Date()}
              selectable
              onSelectEvent={event => {this.props.history.push(`/calendar-management/${event.id}`, event)}}
              events={events}
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




