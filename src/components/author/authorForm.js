'use strict';

var React = require('react');
var Input = require('../common/inputText');

var AuthorForm = React.createClass({

    propTypes: {
        authorInfo: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form className="col-sm-8">

                {/* Custom Input Component */}
                <Input name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={ this.props.authorInfo.firstName }
                    onChange={ this.props.onChange }
                    error={ this.props.errors.firstName } />

                {/* Custom Input Component */}
                <Input name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={ this.props.authorInfo.lastName }
                    onChange={ this.props.onChange }
                    error={ this.props.errors.lastName } />

                <br />

                <button type="submit"
                    className="btn btn-primary"
                    onClick={ this.props.onSave }>Save</button>

            </form>
        );
    }
});

module.exports = AuthorForm;
