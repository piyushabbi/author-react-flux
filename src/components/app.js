/*------- This file bootstraps the app. It uses browserify to render. Written in CommonJS pattern. This pattern has an obj and all properties and method are in thecontext of that object and then, to reuse the object, we export it at the bottom using module.exports -------*/

$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function () {
        return(
            <div>
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;
