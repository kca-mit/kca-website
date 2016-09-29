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
import CoverImg from '../static/beach-exec.jpg';
import StudyPoolImg from '../static/studypool-partner-badge.png';

const peopleSrc = [
  {id:"jin", img: require('../static/exec/jin.jpg'), name: 'Jin Woo Kim', major: '(2018, Electrical Engineering and Computer Science)', position: 'President', more: `Grew up in Orange County, California. Loves to shoot a bow and arrows, and was a member of the 2014 US Archery Team/USA Junior Dream Team. Aiming for medical school. Involvements on campus include Camp Kesem at MIT, Phi Beta Epsilon fraternity, Red Cross, and MIT Archery Club. Favorite ice cream? Toscanini's Earl Grey.`},
  {id:"haeyoon", img: require('../static/exec/haeyoon.jpg'), name: 'Haeyoon Chung', major: '(2018, Bioengineering)', position: 'Vice President', more: `yum... coffee <3`},
  {id:"jiseok", img: require('../static/exec/jiseok.jpg'), name: 'Ji Seok Kim', major: '(2019, Physics & Computer Science)', position: 'Treasurer', more: `I'm a badass break dancer. I almost walked into a bison this summer without realizing it. I discovered a star. A lover of states' rights and a proud patriot, I want to own a Cracker Barrel in the South someday. Lee Greenwood's "God Bless the U.S.A." is my theme song.`},
  {id:"jenna", img: require('../static/exec/jenna.jpg'), name: 'Jenna Hong', major: '(2019, Brain and Cognitive Sciences, Computer Science)', position: 'Secretary', more: `Born and raised in New England! I love dad jokes, I love funny videos, I love fruity ice cream. Sitting in the bow of a boat makes me happy.`},
  {id:"kyubin", img: require('../static/exec/kyubin.jpg'), name: 'Kyubin Lee', major: '(2019, Mechanical Engineering)', position: 'Community Service Chair'},
  {id:"tiffany", img: require('../static/exec/tiffany.jpg'), name: 'Tiffany Min', major: '(2018, Electrical Engineering and Computer Scince)', position: 'Social Chair', more: `I really like ddukbokki. I am single.`},
  {id:"slava", img: require('../static/exec/slava.jpg'), name: 'Slava Kim', major: '(2019, Computer Science)', position: 'Webmaster', more: `I am a Kazakhstani Korean and I am taking Korean classes at MIT.`},
  {id:"yuree", img: require('../static/exec/yuree.jpg'), name: 'Yuree Kim', major: '(2019, Mechanical Engineering)', position: 'Publicity Chair'},
  {id:"helen", img: require('../static/exec/helen.jpg'), name: 'Helen Bang', major: '(2019, Computer Science)', position: 'Membership Chair'},
  {id:"julia", img: require('../static/exec/julia.jpg'), name: 'Julia Lee', major: '(2019, Computer Science)', position: 'Athletic Chair'},
  {id:"ashley", img: require('../static/exec/ashley.jpg'), name: 'Ashley Lee', major: '(2019, Computer Science and Molecular Biology)', position: 'Culture Chair'},
  {id:"caitlyn", img: require('../static/exec/caitlyn.jpg'), name: 'Caitlyn Oak', major: '(2018, Brain and Cognitive Sciences)', position: 'Social Chair', more: `I love listening to music and attempting to sing! I like playing basketball and sometimes golf. My all-time favorite TV show is Friends (watched the entire series at least 3 times)!`},
  {id:"wonjune", img: require('../static/exec/wonjune.jpg'), name: 'Wonjune Kang', major: '(2020, Electrical Engineering and Computer Science)', position: 'Freshman Representative', more: `I hate (love) bad puns. I play varsity squash, but love sports in general. You'll probably hear me (try to) sing along when there's a Coldplay song playing.
`},
  {id:"seri", img: require('../static/exec/seri.jpg'), name: 'Seri Choi', major: '(2020, Computer Science)', position: 'Freshman Representative', more: `I've been playing the violin for about 12 years. I enjoy dancing and wanted to try it, so I joined DT this semester!`},
  {id:"chiho", img: require('../static/exec/chiho.jpg'), name: 'Chiho Im', major: '(2020, Computer Science)', position: 'Freshman Representative', more: `I slay ‘em with my melodious voice of a baritone/bass. I was born and raised in Korea but went to school in the States for 8 years. Would love to own a winery in the future.`},
  {id:"john", img: require('../static/exec/john.jpg'), name: 'John Kim', major: '(2020, Mechanical Engineering / Computer Science)', position: 'Freshman Representative', more: `I'm a classical pianist/cellist who loves to DJ! Also a snowboard maniac..
Do I eat to live, or live to eat? Gimme food and you'll find out. `},
];

export default function (props) {
  const people = peopleSrc.map((person) =>
      <Row id={person.id} key={person.id} imageUrl={person.img}>
        <h2>{person.name} </h2>
        <smaller>{person.position}</smaller>
        <p>{person.major}</p>
        <p>{person.more || ``}</p>
      </Row>
  );
  return (
      <DocumentTitle title={"Exec | " + config.siteTitle}>
        <div id="exec">
          <Splash id="exec" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>MIT KSA Exec</h1>
            {people}
            <div id="studypool"><img src={StudyPoolImg}/>
              <div>Sponsored by <a href="http://studypool.com">Studypool</a>, Homework Help</div></div>
          </div>
        </div>
      </DocumentTitle>
  );
}
