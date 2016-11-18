'use strict';

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse margin0 border-none">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/#home">
                            <img src="images/logo.png" height="80" width="90"/>
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/#home">Home</a>
                        </li>
                        <li>
                            <a href="/#authors">Authors</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
