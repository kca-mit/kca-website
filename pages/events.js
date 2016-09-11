import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import {
  Row,
  Splash,
  Split,
} from './_sharedComponents'

import { prefixLink } from '../utils/urls.js'
import CoverImg from '../static/icecream.jpg';
import CultureShowImg from '../static/culture-show.jpg';
import SoccerTournamentImg from '../static/soccer-tournament-2.jpg';
import GBMImg from '../static/icecream-gbm-2.jpg';
import CPWImg from '../static/cpw.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Events | " + config.siteTitle}>
        <div>
          <Splash id="events" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Events</h1>
          </div>
          <Row flipped id="gbm" imageUrl={GBMImg}>
            <h2>General Body Meetings</h2>
            <p>At regular meetings you have an opportunity to meet and hang out with other members. Another purpose of GBMs is to provide a time and place for new exec and cabinet elections.</p>
            <p>KSA events are accompained by delicious Korean cultural dishes. Be sure to check out KSA events over Campus Preview Weekend, KBBQ on the week of orientation and gelato icecream at every General Body Meeting.</p>
          </Row>
          <Row id="culture-show-small" imageUrl={CultureShowImg}>
            <h2>Culture Show</h2>
            <p>Culture Show is the biggest event KSA organizes annually. We invite Korean students clubs from all schools in Boston to come and help us to introduce the wider MIT community to the Korean culture.</p>
            <p>The every year features a unique theme, includes catered Korean dishes, games, performances by clubs like MIT Takewondo, Asian Dance Team, music bands from Berklee College of Music, MIT, Boston University, as well as other individual perfomers.</p>
            <p>Look out for emails about this years Culture Show this fall!</p>
          </Row>
          <Row flipped id="soccer-tourn" imageUrl={SoccerTournamentImg}>
            <h2>Annual Soccer Tournament</h2>
            <p>Every year MIT KSA organizes an intercollegiate soccer tournaments between Korean culture clubs of schools in Boston area.</p>
            <p>The tournament includes cash prizes, but its primary role is to be a fundraiser event.</p>
            <p>If you represent a Korean culture club at your school and you would like to learn more about participating, <Link to={prefixLink("/contact/")}>contact the exec team</Link>.</p>
          </Row>
          <Row id="cpw" imageUrl={CPWImg}>
            <h2>CPW Events</h2>
            <p>Traditionally KSA has been organizing an event for freshmen during Campus Preview Weekend in Spring.</p>
            <p>As many other clubs on campus, we are happy to welcome the new class to the MIT community and treat them the best we can.</p>
            <p>You can also meet KSA exec members at the CPW activities midway.</p>
          </Row>
        </div>
      </DocumentTitle>
  );
}
