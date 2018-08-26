import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui/icons/Menu';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Nav extends Component {
    state = {
        open: false
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        const Logged = (props) => (
            <div>
                {/* <MenuIcon
                {...props}
                iconButtonElement={
                    <IconButton><MoreVertIcon color="#fff" /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <List primaryText="Manage Sub-Admin" containerElement={<Link to="/sub-admin" />} />
                    <List primaryText="Settings" containerElement={<Link to="/settings" />} />
                    <List primaryText="Log out" />
                </MenuIcon> */}
            </div>
        );
        return (
            <div>
                <AppBar
                    style={{backgroundColor: '#0881af'}}
                    title={
                        <Link to="/home" className="title-link"><h3 className="ypn-title">YPN</h3></Link>
                    }
                    iconElementRight={<Logged />}
                    onLeftIconButtonClick={this.handleToggle}
                />
                <div>
                    <Drawer
                        docked={false}
                        width={250}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        >
                        <List primaryText="Settings" containerElement={<Link to="/settings" />} />
                    </Drawer>
                </div>
            </div>
        )
    }
}
export default Nav