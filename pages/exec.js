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

export default function (props) {
  return (
      <DocumentTitle title={"Exec | " + config.siteTitle}>
        <div>
          <Splash id="exec" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>MIT KSA Exec</h1>
          </div>
        </div>
      </DocumentTitle>
  );
}
