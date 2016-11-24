'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/AuthorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        //Action, with types defined in constants and data:-
        //This dispatcher will tell stores that an action happened, ie author created
        Dispatcher.dispatch({
            actionTypes: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    };
};

module.exports = AuthorActions;
