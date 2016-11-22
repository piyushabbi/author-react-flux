'use strict';

var React = require('react');

var Input = React.createClass({

    propTypes: {
        name: React.propTypes.string.isRequired,
        label: React.propTypes.string.isRequired,
        onChange: React.propTypes.func.isRequired,
        placeholder: React.propTypes.string,
        value: React.propTypes.string,
        error: React.propTypes.string
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
