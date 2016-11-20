'use strict';

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

//List of Routes for the application
var routeList = (
    <Route name="app" path="/" handler={require("./components/app")}>
        <DefaultRoute handler={require("./components/homePage")} />
        <Route name="authors" handler={require("./components/author/authorPage")} />
        <Route name="about" handler={require("./components/about/aboutPage")} />
        <NotFoundRoute handler={require("./components/notFoundPage")} />
    </Route>
);

module.exports = routeList;
