import React from 'react'
import { Link, browserHistory } from 'react-router'

import { prefixLink } from '../utils/urls.js'
import { Dropdown } from './_sharedComponents';
import '../css/markdown-styles'

import '../analytics.js';

import LogoImg from '../static/ksa-logo.png';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div id="zbt-root">
        <header>
          <div className="logo">
            <span className="logo-pic">
              <Link to={prefixLink("/")}>
                <span className="logo-span" style={{backgroundImage: `url("${prefixLink(LogoImg)}")`}}></span>
              </Link>
            </span>
          </div>
          <Nav/>
        </header>
        <div className="page-container">
        {this.props.children}
        <footer className="flex">
          <span>
            <div>MIT Korean Students Association</div>
            <div> Webdev by <a href="https://github.com/Slava">Slava Kim</a> </div>
            <div> <a href="mailto:slv@mit.edu">Contact the web-master</a> </div>
          </span>
        </footer>
        </div>
      </div>
    )
  },
})

function Nav() {
  const links = [
    'events',
    'exec',
    'commservice',
    'misti korea',
    'classes',
    'contact',
  ];

  const linkify = (x) => <Link key={x} className="flex-cell" to={prefixLink(`/${x.replace(/ /g, '-')}/`)}>{x.toUpperCase()}</Link>;
  const leftLinks = links.slice(0, 3).map(linkify);
  const rightLinks = links.slice(3, 6).map(linkify);

  const navigate = (route) => {
    if (route === 'HOME') {
      browserHistory.push('/');
    } else {
      browserHistory.push(prefixLink(route.toLowerCase() + "/"));
    }
  };

  const dropdownList = ['home', ...links].map(x => x.toUpperCase());

  return (
    <div className="nav">
      <div className="big-nav contents flex">
        <span className="left flex-cell flex">
          {leftLinks}
        </span>
        <span className="right flex-cell flex">
          {rightLinks}
        </span>
      </div>
      <div className="small-nav contents">
        <Dropdown list={dropdownList} selected={"GO TO PAGE"} onSelected={navigate}/>
      </div>
    </div>
  );
}
