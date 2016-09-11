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

const peopleSrc = [
  {id:"jin", img: require('../static/exec/jin.jpg'), name: 'Jin Woo Kim', more: '(2018, Course 6-2) President'},
  {id:"haeyoon", img: require('../static/exec/haeyoon.jpg'), name: 'Haeyoon Chung', more: '(2018, Course 20) Vice President'},
  {id:"jiseok", img: require('../static/exec/jiseok.jpg'), name: 'Ji Seok Kim', more: '(2019, Course 6-3) Treasurer'},
  {id:"jenna", img: require('../static/exec/jenna.jpg'), name: 'Jenna Hong', more: '(2019, Course 9) Secretary'},
  {id:"kyubin", img: require('../static/exec/kyubin.jpg'), name: 'Kyubin Lee', more: '(2019, Course 2) Community Service Chair'},
  {id:"tiffany", img: require('../static/exec/tiffany.jpg'), name: 'Tiffany Min', more: '(2018, Course 6-2) Social Chair'},
  {id:"slava", img: require('../static/exec/slava.jpg'), name: 'Slava Kim', more: '(2019, Course 6-3) Webmaster'},
  {id:"yuree", img: require('../static/exec/yuree.jpg'), name: 'Yuree Kim', more: '(2019, Course 2) Publicity Chair'},
  {id:"helen", img: require('../static/exec/helen.jpg'), name: 'Helen Bang', more: '(2019, Course 6-3) Membership Chair'},
  {id:"julia", img: require('../static/exec/julia.jpg'), name: 'Julia Lee', more: '(2019, Course 6-3) Social Chair'},
  {id:"ashley", img: require('../static/exec/ashley.jpg'), name: 'Ashley Lee', more: '(2019, Course 6-7) Culture Chair'},
];

export default function (props) {
  const people = peopleSrc.map((person) =>
      <Row id={person.id} key={person.id} imageUrl={person.img}>
        <h2>{person.name}</h2>
        <h3>{person.more}</h3>
      </Row>
  );
  return (
      <DocumentTitle title={"Exec | " + config.siteTitle}>
        <div id="exec">
          <Splash id="exec" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>MIT KSA Exec</h1>
            {people}
          </div>
        </div>
      </DocumentTitle>
  );
}
