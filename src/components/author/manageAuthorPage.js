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
            },
            errors: {}
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

    //Simple Form Validation
    formValidate: function () {
        var isValid = true;
        this.state.errors = {}; //Re-initialize state to clear previous errors

        if(this.state.authorInfo.firstName.length < 3) {
            this.state.errors.firstName = 'First Name is required and should be 3 digits atleast';
            isValid = false;
        }
        if(this.state.authorInfo.lastName.length < 3) {
            this.state.errors.lastName = 'Last Name is required and should be 3 digits atleast';
            isValid = false;
        }

        this.setState({
            errors: this.state.errors   //To change state at any time we call setState method
        });
        return isValid;
    },

    //Submit Handler to save changes on Author Page
    submitAuthor: function (event) {
        event.preventDefault();
        if(!this.formValidate()) {
            return;
        }

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
                    onSave={ this.submitAuthor }
                    errors={ this.state.errors } />
            </section>
        );
    }
});

module.exports = ManageAuthorPage;
