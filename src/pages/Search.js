import React, { Component } from 'react';
import SearchArea from '../components/SearchArea/SearchArea';
import request from 'superagent';
import BookList from '../components/BookList/BookList'
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';



class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);

                this.setState({
                    books: [...data.body.items]
                })
            })
    }

    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Your Own Personal Library</NavbarBrand>
                    <NavItem>
                        <NavLink href="/search/">Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/books/">Your Books</NavLink>
                    </NavItem>
                </Navbar>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} />
            </div >
        );
    }
}


export default Books;