'use strict';

var React = require('react');

var Input = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },

    render: function() {
        //Add extra class at parent node in case of error
        var wrapperClass = 'form-group';

        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += ' ' + 'has-error';  //String Concatination for error
        }

        return (
            <div className={ wrapperClass }>
                <label htmlFor={ this.props.name }>{ this.props.label }</label>
                <input type="text"
                    className="form-control"
                    name={ this.props.name }
                    placeholder={ this.props.placeholder }
                    value={ this.props.value }
                    onChange={ this.props.onChange } />

                <div className="input"> { this.props.error } </div>
            </div>
        );
    }
});

module.exports = Input;
