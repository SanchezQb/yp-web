import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import accountStore from '../stores/Account'
import { AuthRoute, UnauthRoute } from 'react-router-auth'
import { observer } from 'mobx-react'
import Login from './Login'
import Home from './Home'
import Users from './users/Users'
import UserData from './users/UserData'
import EditUser from './EditUser'
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
import AddPosition from './electoral/AddPosition'
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
import Debate from './debate/Debate'
import DebateData from './debate/DebateData'
import AddDebate from './debate/AddDebate'
import EditDebate from './debate/EditDebate'
import TownHall from './townhall/TownHall'
import AddTownHall from './townhall/AddTownHall'
import TownHallData from './townhall/TownHallData'
import EditTownHall from './townhall/EditTownHall'
import SubAdmin from './subadmin/SubAdmin'
import AddSubAdmin from './subadmin/AddSubAdmin'
import SubAdminData from './subadmin/SubAdminData'
import EditSubAdmin from './subadmin/EditSubAdmin'
import Career from './careers/Career'
import AddCareer from './careers/AddCareer'
import EditCareer from './careers/EditCareer'
import CareerData from './careers/CareerData'
import CareerAppliedData from './careers/CareerAppliedData'
import Chat from './chat/Chat'
import ChatData from './chat/ChatData'
import Polls from './Polls'
import Opinion from './opinion/Opinion'
import OpinionData from './opinion/OpinionData'
import AddOpinion from './opinion/AddOpinion'
import EditOpinion from './opinion/EditOpinion'
import Exit from './exit/Exit'
import ExitData from './exit/ExitData'
import AddExit from './exit/AddExit'
import EditExit from './exit/EditExit'
import Push from './push/Push'
import PushData from './push/PushData'
import AddPush from './push/AddPush'
import EditPush from './push/EditPush'
import Tracking from './tracking/Tracking'
import TrackingData from './tracking/TrackingData'
import AddTracking from './tracking/AddTracking'
import EditTracking from './tracking/EditTracking'
import Reports from './Reports'
import ElectionPolls from './election/ElectionPolls'
import AddElectionPolls from './election/AddElectionPolls'
import ElectionPollsData from './election/ElectionPollsData'
import Policy from './policy/Policy'
import AddPolicy from './policy/AddPolicy'
import PolicyData from './policy/PolicyData'
import PartyDonations from './partydonations/PartyDonations'
import AddPartyDonation from './partydonations/AddPartyDonation'
import PartyDonationData from './partydonations/PartyDonationData'
import CampaignDonations from './campaigndonations/CampaignDonations';
import CampaignDonationData from './campaigndonations/CampaignDonationData';
import AddCampaignDonation from './campaigndonations/AddCampaignDonation';
import CampaignUsersData from './campaigndonations/CampaignUsersData';
import EditCampaignDonation from './campaigndonations/EditCampaignDonation';
import CandidateDonations from './candidatedonations/CandidateDonations';
import AddCandidateDonation from './candidatedonations/AddCandidateDonation';
import CandidateDonationData from './candidatedonations/CandidateDonationData';
import CandidateUsersData from './candidatedonations/CandidateUsersData';
import OpenPositions from './electoral/OpenPositions';
import Failure from './forgot/failure'
import ForgotPassword from './forgot/form'
import Success from './forgot/success';
import ConfirmEmail from './confirmPassword'


export default class Main extends Component {

   state = {
       authenticated: localStorage.getItem('authenticated') ? true : false
   }

    render() {   
        return (
            <main>
                <Switch>
                    <Route exact path = '/' component = {Login}/>
                    <AuthRoute exact path = '/home' component = {Home} redirectTo="/"authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/users' component = {Users} redirectTo="/" authenticated={this.state.authenticated} />
                    <AuthRoute exact path = '/users/:id' component = {UserData} redirectTo="/" authenticated={this.state.authenticated} />
                    <AuthRoute exact path = '/users/edit/:id' component = {EditUser} redirectTo="/" authenticated={this.state.authenticated} />
                    <AuthRoute exact path = '/excos' component = {Excos} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/excos/add' component = {AddExco} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/excos/:id' component = {ExcosData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/excos/edit/:id' component = {EditExco} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/office' component = {Office} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/office/:id' component = {OfficeData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/volunteers' component = {Volunteers} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/volunteers/:id' component = {VolunteersData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/membership' component = {Membership} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/elected-officials' component = {Elected} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/elected-officials/add' component = {AddElectedOfficial} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/elected-officials/:id' component = {ElectedOfficialData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/elected-officials/edit/:id' component = {EditElectedOfficial} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/sponsored-candidates' component = {Sponsored} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/sponsored-candidates/:id' component = {SponsoredData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/electoral-candidates' component = {Electoral} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/electoral-candidates/add' component = {AddElectoral} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/positions/add' component = {AddPosition} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/electoral-candidates/:id' component = {ElectoralData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/electoral-candidates/edit/:id' component = {EditElectoral} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/calendar-management' component = {Calendar} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/calendar-management/add' component = {AddCalendarEvent} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/calendar-management/:id' component = {CalendarData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/calendar-management/edit/:id' component = {EditCalendarData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/questionnaire' component = {Questionnaire} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/questionnaire/add' component = {AddQuestionnaire} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/questionnaire/:id' component = {QuestionnaireData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/questionnaire/edit/:id' component = {EditQuestionnaire} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/gallery' component = {Gallery} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/gallery/add' component = {AddGallery} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/gallery/:id' component = {Single} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/gallery/edit/:id' component = {EditGallery} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/debate' component = {Debate} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/debate/add' component = {AddDebate} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/debate/:id' component = {DebateData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/debate/edit/:id' component = {EditDebate} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/townhall' component = {TownHall} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/townhall/add' component = {AddTownHall} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/townhall/:id' component = {TownHallData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/townhall/edit/:id' component = {EditTownHall} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/subadmin' component = {SubAdmin} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/subadmin/add' component = {AddSubAdmin} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/subadmin/:id' component = {SubAdminData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/subadmin/edit/:id' component = {EditSubAdmin} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/careers' component = {Career} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/careers/add' component = {AddCareer} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/careers/:id' component = {CareerData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/careers/applied/:id' component = {CareerAppliedData} redirectTo="/" authenticated={this.state.authenticated}/>       
                    <AuthRoute exact path = '/careers/edit/:id' component = {EditCareer} redirectTo="/" authenticated={this.state.authenticated} />
                    <AuthRoute exact path = '/chat' component = {Chat} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/chats/:id' component = {ChatData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/polls' component = {Polls} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/opinion-polls' component = {Opinion} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/opinion-polls/add' component = {AddOpinion} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/opinion-polls/:id' component = {OpinionData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/opinion-polls/edit/:id' component = {EditOpinion} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/exit-polls' component = {Exit} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/exit-polls/add' component = {AddExit} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/exit-polls/:id' component = {ExitData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/exit-polls/edit/:id' component = {EditExit} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/push-polls' component = {Push} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/push-polls/add' component = {AddPush} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/push-polls/:id' component = {PushData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/push-polls/edit/:id' component = {EditPush} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/tracking-polls' component = {Tracking} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/tracking-polls/add' component = {AddTracking} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/tracking-polls/:id' component = {TrackingData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/tracking-polls/edit/:id' component = {EditTracking} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/reports' component = {Reports} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/election-polls' component = {ElectionPolls} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/election-polls/add' component = {AddElectionPolls} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/election-polls/:id' component = {ElectionPollsData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/policy-elections' component = {Policy} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/policy-elections/add' component = {AddPolicy} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/policy-elections/:id' component = {PolicyData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/party-donations' component = {PartyDonations} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/party-donations/add' component = {AddPartyDonation} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/party-donations/:id' component = {PartyDonationData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/campaign-donations' component = {CampaignDonations} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/campaign-donations/add' component = {AddCampaignDonation} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/campaign-donations/:id' component = {CampaignDonationData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/campaign-donations/donated/:id' component = {CampaignUsersData} redirectTo="/" authenticated={this.state.authenticated}/>       
                    <AuthRoute exact path = '/campaign-donations/edit/:id' component = {EditCampaignDonation} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/candidate-donations' component = {CandidateDonations} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/candidate-donations/add' component = {AddCandidateDonation} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/candidate-donations/:id' component = {CandidateDonationData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/candidate-donations/donated/:id' component = {CandidateUsersData} redirectTo="/" authenticated={this.state.authenticated}/>
                    <AuthRoute exact path = '/open-positions' component = {OpenPositions} redirectTo="/" authenticated={this.state.authenticated}/>
                    <Route exact path = '/reset/password' component = {ForgotPassword}/>
                    <Route exact path = '/confirm/mail' component = {ConfirmEmail}/>
                    <Route exact path = '/reset-password/success' component = {Success}/>
                    <Route exact path = '/reset-password/error' component = {Failure}/>
                </Switch>
            </main>
        )
    }
}
