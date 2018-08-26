import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Nav />
            <div className="paper">
                <Link to={'/users'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#FFA500'}}>
                        <h3>User Management</h3>
                    </div>
                </Link>
                <Link to={'/office'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#0881af'}}>
                        <h3>Run for Office Management</h3>
                    </div>
                </Link>
                <Link to={'/volunteers'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#d74955'}}>
                        <h3>Volunteers Management</h3>
                    </div>
                </Link>
                <Link to={'/excos'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#008000'}}>
                        <h3>Excos</h3>
                    </div>
                </Link>
                <Link to={'/membership'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#663271'}}>
                        <h3>Membership</h3>
                    </div>
                </Link>
                <Link to={'/donation'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#ec4758'}}>
                        <h3>Donation Management</h3>
                    </div>
                </Link>
                <Link to={'/elected-officials'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#de8a45'}}>
                        <h3>Elected Officials Management</h3>
                    </div>
                </Link>
                <Link to={'/sponsored-candidates'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#24747b'}}>
                        <h3>Sponsored candidates Management </h3>
                    </div>
                </Link>
                <Link to={'/electoral-candidates'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#1e0d61'}}>
                        <h3>Electoral candidates Management </h3>
                    </div>
                </Link>
                <Link to={'/careers'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#a92a56'}}>
                        <h3>Careers</h3>
                    </div>
                </Link>
                <Link to={'/questionnaire'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#590649'}}>
                        <h3>Questionnaire</h3>
                    </div>
                </Link>
                <Link to={'/calendar-management'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#a09dd7'}}>
                        <h3>Calendar Management</h3>
                    </div>
                </Link>
                <Link to={'/gallery'} className="paper-link">
                    <div className="paper-item" style={{backgroundColor: '#847671'}}>
                        <h3>Gallery Management</h3>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Home