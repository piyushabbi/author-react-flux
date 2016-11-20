'use strict';

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse margin0 border-none">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="app">
                            <img src="images/logo.png" height="80" width="90"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="app">Home</Link>
                        </li>
                        <li>
                            <Link to="authors">Authors</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
