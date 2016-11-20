'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function () {
        return(
            <section className="container">
                <h1>404 Error! Page Not Found.</h1>
                <h3>You entered a wrong URL Bro! Click below to go back to home page.</h3>
                <Link to="app" className="btn btn-danger btn-lg">Home Page</Link>
            </section>
        );
    }
});

module.exports = NotFoundPage;
