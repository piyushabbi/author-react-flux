'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authorInfo: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    },

    render: function() {
        return (
            <section className="container">
                <h1>Manage Author</h1>
                <AuthorForm
                    authorInfo="this.state.authorInfo"/>
            </section>
        );
    }
});

module.exports = ManageAuthorPage;
