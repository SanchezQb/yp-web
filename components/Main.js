import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import Users from './users/Users'
import UserData from './users/UserData'
import EditUser from './EditUser'
import Careers from './Careers'
import Excos from './excos/Excos'
import ExcosData from './excos/ExcosData'
import EditExco from './excos/EditExco'
import AddExco from './excos/AddExco'
import Office from './office/Office'
import OfficeData from './office/OfficeData'
import Volunteers from './volunteers/Volunteers'
import VolunteersData from './volunteers/VolunteersData'
import Membership from './Membership'
import Elected from './elected/Elected'
import ElectedOfficialData from './elected/ElectedOfficialData'
import AddElectedOfficial from './elected/AddElectedOfficial'
import EditElectedOfficial from './elected/EditElectedOfficial'
import Sponsored from './sponsored/Sponsored'
import SponsoredData from './sponsored/SponsoredData'
import Electoral from './electoral/Electoral'
import ElectoralData from './electoral/ElectoralData'
import AddElectoral from './electoral/AddElectoral'
import EditElectoral from './electoral/EditElectoral'
import Calendar from './calendar/Calendar'
import AddCalendarEvent from './calendar/AddCalendarEvent'
import CalendarData from './calendar/CalendarData'
import EditCalendarData from './calendar/EditCalendarData'
import Questionnaire from './questionnaire/Questionnaire'
import AddQuestionnaire from './questionnaire/AddQuestionnaire'
import QuestionnaireData from './questionnaire/QuestionnaireData'
import EditQuestionnaire from './questionnaire/EditQuestionnaire'
import Gallery from './gallery/Gallery'
import EditGallery from './gallery/EditGallery'
import Single from './gallery/Single'
import AddGallery from './gallery/AddGallery'
import Donation from './donation/Donation'


export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path = '/' component = {Login} />
                    <Route exact path = '/home' component = {Home} />
                    <Route exact path = '/users' component = {Users} />
                    <Route exact path = '/users/:id' component = {UserData} />
                    <Route exact path = '/users/edit/:id' component = {EditUser} />
                    <Route exact path = '/careers' component = {Careers} />
                    <Route exact path = '/excos' component = {Excos} />
                    <Route exact path = '/excos/add' component = {AddExco} />
                    <Route exact path = '/excos/:id' component = {ExcosData} />
                    <Route exact path = '/excos/edit/:id' component = {EditExco} />
                    <Route exact path = '/office' component = {Office} />
                    <Route exact path = '/office/:id' component = {OfficeData} />
                    <Route exact path = '/volunteers' component = {Volunteers} />
                    <Route exact path = '/volunteers/:id' component = {VolunteersData} />
                    <Route exact path = '/membership' component = {Membership} />
                    <Route exact path = '/elected-officials' component = {Elected} />
                    <Route exact path = '/elected-officials/add' component = {AddElectedOfficial} />
                    <Route exact path = '/elected-officials/:id' component = {ElectedOfficialData} />
                    <Route exact path = '/elected-officials/edit/:id' component = {EditElectedOfficial} />
                    <Route exact path = '/sponsored-candidates' component = {Sponsored} />
                    <Route exact path = '/sponsored-candidates/:id' component = {SponsoredData} />
                    <Route exact path = '/electoral-candidates' component = {Electoral} />
                    <Route exact path = '/electoral-candidates/add' component = {AddElectoral} />
                    <Route exact path = '/electoral-candidates/:id' component = {ElectoralData} />
                    <Route exact path = '/electoral-candidates/edit/:id' component = {EditElectoral} />
                    <Route exact path = '/calendar-management' component = {Calendar} />
                    <Route exact path = '/calendar-management/add' component = {AddCalendarEvent} />
                    <Route exact path = '/calendar-management/:id' component = {CalendarData} />
                    <Route exact path = '/calendar-management/edit/:id' component = {EditCalendarData} />
                    <Route exact path = '/questionnaire' component = {Questionnaire} />
                    <Route exact path = '/questionnaire/add' component = {AddQuestionnaire} />
                    <Route exact path = '/questionnaire/:id' component = {QuestionnaireData} />
                    <Route exact path = '/questionnaire/edit/:id' component = {EditQuestionnaire} />
                    <Route exact path = '/gallery' component = {Gallery} />
                    <Route exact path = '/gallery/add' component = {AddGallery} />
                    <Route exact path = '/gallery/:id' component = {Single} />
                    <Route exact path = '/gallery/edit/:id' component = {EditGallery} />
                    <Route exact path = '/donation' component = {Donation} />
                </Switch>
            </main>
        )
    }
}
