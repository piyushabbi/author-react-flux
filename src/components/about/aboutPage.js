'use strict';

var React = require('react');

var About = React.createClass({
    render: function () {
        return(
            <section className="jumbotron bg-about">
                <div className="container">
                    <h1>The About Page</h1>
                    <p>This app uses the following tech:-</p>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </section>
        );
    }
});

module.exports = About;
