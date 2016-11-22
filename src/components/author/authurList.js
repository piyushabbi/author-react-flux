'use strict';

var React = require('react');
var Link = require('react-router').Link;

var AuthorList = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function() {
        var createAuthorRow = function (data) {
            return(
                <tr key={data.id}>
                    <td>
                        <Link to="manageAuthor" params={{id: data.id}}>{data.id}</Link>
                    </td>
                    <td>{data.firstName} {data.lastName}</td>
                </tr>
            );
        };

        return (
            <section className="jumbotron bg-authors">
                <div className="container">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.authors.map(createAuthorRow, this)}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
});

module.exports = AuthorList;
