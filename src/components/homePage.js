'use strict';

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <section className="jumbotron bg-home">
                <div className="container">
                    <h1>Records App</h1>
                    <p>This will keep track of the records.</p>
                </div>
            </section>
        );
    }
});

module.exports = Home;
