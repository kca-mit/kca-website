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
import CoverImg from '../static/contact.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Contact | " + config.siteTitle}>
        <div>
          <Splash id="contact" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Contact</h1>
            <p>Hello!</p>
            <p>For any inqueries you can email the exec team at: <a href="mailto:ksa-exec@mit.edu">ksa-exec@mit.edu</a></p>
            <p>To report a typo on the website or make a suggestion, email the current web-master: <a href="mailto:slv@mit.edu">slv@mit.edu</a></p>
          </div>
        </div>
      </DocumentTitle>
  );
}
