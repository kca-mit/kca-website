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
import CoverImg from '../static/misti-korea-2.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"MISTI Korea | " + config.siteTitle}>
        <div>
          <Splash id="misti" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>MISTI Korea</h1>
            <p>This page is under development.</p>
      <p>TODO: Information about misti. pictures. links to misti website. testimony, how it can help you immerse in the korean culture.</p>
          </div>
        </div>
      </DocumentTitle>
  );
}
