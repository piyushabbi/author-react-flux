'use strict';

var React = require('react');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form className="col-sm-8">
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    name="firstName"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    value={this.props.authorInfo.firstName} />

                <br />

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    value={this.props.authorInfo.lastName} />
            </form>
        );
    }
});

module.exports = AuthorForm;
