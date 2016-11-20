'use strict';

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
            <section className="jumbotron bg-home">
                <div className="container">
                    <h1>Records App</h1>
                    <p>This will keep track of the records.</p>
                    <Link to="about" className="btn btn-primary btn-lg">More Info</Link>
                </div>
            </section>
        );
    }
});

module.exports = Home;
