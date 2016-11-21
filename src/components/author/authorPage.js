'use strict';

var React = require('react');
var Link = require('react-router').Link;

var AuthorAPI = require('../../api/authorApi');
var AuthorList = require('./authurList');

var AuthorPage = React.createClass({

    getInitialState: function () {
        return {
            authorData: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({
                authorData: AuthorAPI.getAllAuthors()
            });
        }
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
                    <h1>Authors List</h1>
                    <p><Link to="author" className="btn btn-default">Add More</Link></p>

                    <p>Following are the best peeps. Click id to view their details :-</p>

                    <AuthorList authors={this.state.authorData} />
                </div>
            </section>
        );
    }
});

module.exports = AuthorPage;
