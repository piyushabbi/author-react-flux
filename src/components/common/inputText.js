'use strict';

var React = require('react');

var Input = React.createClass({
    render: function() {
        return (
            <div>
                <label htmlFor={ this.props.name }>{ this.props.label }</label>
                <input type="text"
                    className="form-control"
                    name={ this.props.name }
                    placeholder={ this.props.placeholder }
                    value={ this.props.value }
                    onChange={ this.props.onChange } />
            </div>
        );
    }
});

module.exports = Input;
