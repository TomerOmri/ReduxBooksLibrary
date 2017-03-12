/**
 * Created by I330971 on 2/26/2017.
 */
// reason: render a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux'; // { connect } means to get a one single property
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // makes sure that the action flows all over the reducers




class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={ () => this.props.selectBook(book)}
                    className="list-group-item"> {book.title} </li>
            );
        } );
    }


    render() {
        return (
            <ul className="list-group col-sm-4">{this.renderList()}</ul>
        )
    }
}

// making use of the connect we brought
// whenever we are making a container file, we dont want to export the class
// we want to export the container

//connect takes a function and component and produces a container
// the container is a component that aware of the state that contained by redux

// Promote BookList from a component to a container - it need to know
// About this new dispatch methos, selectedBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


function mapStateToProps(state) {
// take our application state as an argument (state = array of books and the active book)
    // whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers
    // dispatch function is like a tunnel that send the object to all the diffrent reducers
    return bindActionCreators( {selectBook: selectBook } , dispatch)
}