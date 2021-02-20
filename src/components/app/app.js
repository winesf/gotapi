import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {Component} from "react/cjs/react.production.min";
import ErrorMessage from "../error";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';
import GotService from "../../services/gotService";
import {BooksItem, CharacterPage, HousesPage} from "../pages";
import {BooksPage} from "../pages/booksPage";

export default class App extends Component {

  gotService = new GotService();
  state = {
    showRandomChar: true,
    error: false,

  }
  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true
    })
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar
      }
    });
  }
  render() {
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const char = this.state.showRandomChar ? <RandomChar interval={15000}/> : null;
    return (
        <Router>
          <div className='app'>
            <Container>
              <Header />
            </Container>
            <Container>
              <Row>
                <Col lg={{size: 5, offset: 0}}>
                  {char}
                  <button
                    className="toggle-btn"
                    onClick={this.toggleRandomChar}>Toggle random character</button>
                </Col>
              </Row>
              <Route path='/characters' component={CharacterPage}/>
              <Route path='/houses' component={HousesPage}/>
              <Route path='/books' exact component={BooksPage}/>
              <Route path='/books/:id' render={
                ({match,location,history}) => {
                  // console.log(match);
                  // console.log(location);
                  // console.log(history);
                  const {id} = match.params;
                  return <BooksItem bookId={id}/>
                }
              }/>

            </Container>
          </div>
        </Router>
    );
  }
};