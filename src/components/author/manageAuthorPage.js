'use strict';

var React = require('react');
var Router = require('react-router');

var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({

    mixins: [
        Router.Navigation   //This is navigation mixin to navigate to different page on save
    ],

    getInitialState: function() {
        return {
            authorInfo: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    },

    //Updating state that is bubbled up from child elements. This method is called on every keypress
    setAuthorState: function (event) {
        var inputField = event.target.name;
        var value = event.target.value;

        this.state.authorInfo[inputField] = value;  //set state of that field equal to the value passed

        return this.setState({
            authorInfo: this.state.authorInfo
        });
    },

    //Submit Handler to save changes on Author Page
    submitAuthor: function (event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.authorInfo);

        this.transitionTo('authors');   //To route to authors page, once the save operation is carried out
    },

    render: function() {
        return (
            <section className="container">
                <h1>Manage Author</h1>
                <AuthorForm
                    authorInfo={ this.state.authorInfo }
                    onChange={ this.setAuthorState }
                    onSave={ this.submitAuthor } />
            </section>
        );
    }
});

module.exports = ManageAuthorPage;
