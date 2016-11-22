'use strict';

var React = require('react');
var Input = require('../common/inputText');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form className="col-sm-8">

                <Input name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={ this.props.authorInfo.firstName }
                    onChange={ this.props.onChange } />

                <br />

                <Input name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={ this.props.authorInfo.lastName }
                    onChange={ this.props.onChange } />

            </form>
        );
    }
});

module.exports = AuthorForm;
