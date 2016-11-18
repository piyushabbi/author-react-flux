'use strict';

var React = require('react');

var AuthorList = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function() {
        var createAuthorRow = function (data) {
            return(
                <tr key={data.id}>
                    <td><a href={ '#/authors/' + data.id } className="list-id">{data.id}</a></td>
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
