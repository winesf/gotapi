import React, {Component} from 'react';
import ItemList from '../itemList';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import ErrorMessage from "../error";

export class BooksPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
            onItemSelected={(itemId) => {
                this.props.history.push(`/books/${itemId}`);
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    }
}
export default withRouter(BooksPage);