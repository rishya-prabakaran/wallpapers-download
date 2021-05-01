import React from 'react';
import {BrowserRouter, Link,Route} from 'react-router-dom';
import Router from './Router';
//import SearchPage from './SearchPage'
//import Photos from './Photos'

class Form extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <form className="Form-Component">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          name="keyword"
          placeholder="Search images..."
          autoComplete="off"
        />
        <BrowserRouter>
        <nav>
        <Link to={`/search/${this.state.value}`}>
          <button onClick={this.props.onSubmit} style={{display: 'none'}}>
            Search Button
          </button>
        </Link>
        </nav>
        <Route
        path={`/search/${this.state.value}`}
                    component={Router}
                    exact
        />
        </BrowserRouter>

      </form>
    );
  }
}

export default Form;
