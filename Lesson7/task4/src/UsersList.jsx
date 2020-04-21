import React, { Component }  from 'react';
import User from "./User";
import Pagination from './Pagination.jsx';

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
            itemsPerPage: 3
        }
    }
    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    render() {
        const fitstElem = this.state.currentPage * this.state.itemsPerPage;
        const userList = this.props.users
        .slice(fitstElem, fitstElem + 3);  


        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    currentPage={this.state.currentPage}
                    totalItems={this.props.users.length}
                    itemsPerPage={this.state.itemsPerPage}
                />
                <ul className="users">
                    {userList.map(user => <User key={user.id} {...user} />)}
                </ul>
            </div>
        )
    }
}

export default UsersList;