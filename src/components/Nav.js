import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import accountStore from '../stores/Account'


class Nav extends Component {
    state = {
        open: false
    }

    handleToggle = () => this.setState({open: !this.state.open});
    
    handleNestedListToggle = (item) => {
        this.setState({
          open: item.state.open,
        });
    };

    logout = () => {
       accountStore.logout()
       this.props.history.push('/')

    }

    render() {
        const Logged = (props) => (
            <div>
                <IconMenu
                {...props}
                iconButtonElement={
                    <IconButton><MoreVertIcon color="#fff" /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Manage Sub-Admin" containerElement={<Link to="/subadmin" />} />
                    <MenuItem primaryText="Settings" containerElement={<Link to="/settings" />} />
                    <Divider />
                    <h4 style={{fontWeight: 100, marginLeft: '7%', cursor: 'pointer'}} onClick={() => this.logout()}>Log out</h4>
                </IconMenu>
            </div>
        );
        return (
            <div>
                <AppBar
                    style={{backgroundColor: '#82BE30'}}
                    title={
                        <Link to="/home" className="title-link"><h3 className="ypn-title">Youth Party</h3></Link>
                    }
                    iconElementRight={<Logged history={this.props.history}/>}
                    onLeftIconButtonClick={this.handleToggle}
                />
                <div>
                    <Drawer
                        containerStyle={{backgroundColor: '#f2f2f2'}}
                        docked={false}
                        width={250}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        >
                    <h2 className="ypn-drawer-title">YPN</h2>
                    <h4 className="ypn-drawer-subtitle">Admin Panel</h4>
                    <Divider />
                    <MenuItem containerElement={<Link to="/home" />}>Home</MenuItem>
                    <MenuItem containerElement={<Link to="/users" />}>Users</MenuItem>
                    <Divider />
                    <List>
                        <ListItem
                            primaryText="Polls"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="View Polls"
                                    containerElement={<Link to="/opinion-polls" />}
                                    />,
                                <ListItem
                                    key={2}
                                    primaryText="Add Poll"
                                    containerElement={<Link to="/push-polls" />}
                                />
                            ]}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Careers"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Vacancies"
                                    containerElement={<Link to="/careers" />}
                                    />,
                                <ListItem
                                    key={2}
                                    primaryText="Volunteers"
                                    containerElement={<Link to="/volunteers" />}
                                />,
                            ]}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Event Management"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Calendar Management"
                                    containerElement={<Link to="/calendar-management" />}
                                    />,
                                <ListItem
                                    key={2}
                                    primaryText="Town Hall Management"
                                    containerElement={<Link to="/townhall" />}
                                />,
                            ]}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Candidates"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Elected Officials"
                                    containerElement={<Link to="/calendar-management" />}
                                    />,
                                <ListItem
                                    key={2}
                                    primaryText="Electoral Candidates"
                                    containerElement={<Link to="/townhall" />}
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="Sponsored Candidates"
                                    containerElement={<Link to="/townhall" />}
                                />
                            ]}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Donations"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Party Donations"
                                    containerElement={<Link to="/party-donations" />}
                                    />,
                                <ListItem
                                    key={2}
                                    primaryText="Candidate Donations"
                                    containerElement={<Link to="/candidate-donations" />}
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="Campaign Donations"
                                    containerElement={<Link to="/campaign-donations" />}
                                />,
                            ]}
                        />
                    </List>
                    <Divider />
                    <MenuItem containerElement={<Link to="/office" />}>Run for Office Management</MenuItem>
                    <MenuItem containerElement={<Link to="/gallery" />}>Gallery Management</MenuItem>
                    <MenuItem containerElement={<Link to="/debate" />}>Debate Management</MenuItem>
                    </Drawer>
                </div>
            </div>
        )
    }
}
export default Nav