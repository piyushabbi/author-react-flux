'use strict';

var React = require('react');
var Router = require('react-router');
var routeList = require('./routes');

Router.run(routeList, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

//Router.HistoryLocation to be added next to routeList to avoid # based urls
