import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
            <div>
            <Nav history={this.props.history}/>
            <div className="paper">
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#F0BA00'}}>
                        <h3>User Management</h3>
                    </div>
                    <Link to={'/users'} className="paper-link">
                        <h5>View All Users</h5>
                    </Link>
                    <Link to={'/subadmin'} className="paper-link">
                        <h5>View All Sub-Admins</h5>
                    </Link>
                    <Link to={'/subadmin/add'} className="paper-link">
                        <h5>Add Sub-Admin</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#444'}}>
                        <h3>Run for Office Management</h3>
                    </div>
                    <Link to={'/office'} className="paper-link">
                        <h5>View Run for Office Requests</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#82BE30'}}>
                        <h3>Career Management</h3>
                    </div>
                    <Link to={'/careers'} className="paper-link">
                        <h5>Vacancies</h5>
                    </Link>
                    <Link to={'/volunteers'} className="paper-link">
                        <h5>Volunteers</h5>
                    </Link>
                </div>
                    <div className="paper-item" style={{backgroundColor: '#fff'}}>
                        <div style={{backgroundColor: '#F0BA00'}}>
                            <h3>Excos</h3>
                        </div>
                        <Link to={'/excos'} className="paper-link">
                            <h5>View All Excos</h5>
                        </Link>
                        <Link to={'/excos/add'} className="paper-link">
                            <h5>Add Exco</h5>
                        </Link>
                    </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#82BE30'}}>
                        <h3>Donation Management</h3>
                    </div>
                    <Link to={'/party-donations'} className="paper-link">
                        <h5>Party Donations</h5>
                    </Link>
                    <Link to={'/candidate-donations'} className="paper-link">
                        <h5>Candidate Donation</h5>
                    </Link>
                    <Link to={'/campaign-donations'} className="paper-link">
                        <h5>Campaign Donation</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#F0BA00'}}>
                        <h3>Candidates</h3>
                    </div>
                    <Link to={'/elected-officials'} className="paper-link">
                        <h5>Elected Officials</h5>
                    </Link>
                    <Link to={'/electoral-candidates'} className="paper-link">
                        <h5>Electoral Candidates</h5>
                    </Link>
                    <div className="poll-grid">
                        <Link to={'/positions/add'} className="paper-link">
                            <h5>Add Position</h5>
                        </Link>
                        <Link to={'/sponsored-candidates'} className="paper-link">
                            <h5>Sponsored Candidates</h5>
                        </Link>
                    </div>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#444'}}>
                        <h3>Polls</h3>
                    </div>
                    <div>
                        <Link to={'/opinion-polls'} className="paper-link">
                            <h5>View Polls </h5>
                        </Link>
                        <Link to={'/election-polls'} className="paper-link">
                            <h5>Add Poll</h5>
                        </Link>
                    </div>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#F0BA00'}}>
                        <h3>Events</h3>
                    </div>
                    <Link to={'/calendar-management'} className="paper-link">
                        <h5>Calendar Management</h5>
                    </Link>
                    <Link to={'/townhall'} className="paper-link">
                        <h5>Town Hall Management</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#444'}}>
                        <h3>Gallery Management</h3>
                    </div>
                    <Link to={'/gallery'} className="paper-link">
                        <h5>View Gallery</h5>
                    </Link>
                    <Link to={'/gallery/add'} className="paper-link">
                        <h5>Add Photo or Video to Gallery</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#82BE30'}}>
                        <h3>Debate Management</h3>
                    </div>
                    <Link to={'/debate'} className="paper-link">
                        <h5>View Debate Topics</h5>
                    </Link>
                    <Link to={'/debate/add'} className="paper-link">
                        <h5>Add Debate Topic</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#F0BA00'}}>
                        <h3>Chat Management</h3>
                    </div>
                    <Link to={'/chat'} className="paper-link">
                        <h5>View All Group Chats</h5>
                    </Link>
                </div>
                <div className="paper-item" style={{backgroundColor: '#fff'}}>
                    <div style={{backgroundColor: '#444'}}>
                        <h3>Reports</h3>
                    </div>
                    <div className="poll-grid">
                        <Link to={'/opinion-polls'} className="paper-link">
                            <h5>Campaign Report </h5>
                        </Link>
                        <Link to={'/push-polls'} className="paper-link">
                            <h5>User Report</h5>
                        </Link>
                    </div>
                    <Link to={'/exit-polls'} className="paper-link">
                        <h5>Candidate Report</h5>
                    </Link>
                    <Link to={'/tracking-polls'} className="paper-link">
                        <h5>Polls</h5>
                    </Link>
                </div>
            </div>

        </div>
        )
    }
}


export default Home