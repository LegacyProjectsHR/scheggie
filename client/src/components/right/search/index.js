import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Filter from '../filter/filter.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      // cuisine: '',
      // totalTimeInSeconds: 10000,
      // calories: ''
    };
    this.debouncedSearch = _.debounce(
      this.props.actions.updateSearchThunk,
      300
    );
    this.updateSearch = this.updateSearch.bind(this);
    this.updateCategoryTerm = this.updateCategoryTerm.bind(this);
    this.updateSearchAndFilter = this.updateSearchAndFilter.bind(this);
  }

 updateSearch(event) {
    this.setState({searchTerm: event.target.value});
  }

  updateCategoryTerm(category, term) {
    console.log('the category chosen is ', category);
    console.log('the term chosen is ', term);
    if(category === 'cuisine') {
      // this.setState({
      //   cuisine: term
      // })
      this.props.actions.updateCuisineType(term);
    } else if (category === 'totalTimeInSeconds') {
      // this.setState({
      //   totalTimeInSeconds: term
      // })
      this.props.actions.updatePrepTime(term);
    } else if (category === 'calories') {
      // this.setState({
      //   calories: term
      // })
      this.props.actions.updateNumCalories(term);
    }
  }

  updateSearchAndFilter() {
    // var filter = {
    //   cuisine: this.state.cuisine,
    //   totalTimeInSeconds: this.state.totalTimeInSeconds,
    //   calories: this.state.calories
    // }


    var filter = {
      cuisine: this.props.search.cuisine,
      // totalTimeInSeconds: this.props.search.totalTimeInSeconds,
      // calories: this.props.search.calories
    }
    this.props.search.totalTimeInSeconds === '' ? filter.totalTimeInSeconds = "10000" : filter.totalTimeInSeconds = this.props.search.totalTimeInSeconds
    this.props.calories === '' ? filter.calories = "10000" : filter.calories = this.props.search.calories
    
    this.debouncedSearch(this.state.searchTerm, filter);
  }

  updateSearchOnEnter(e) {
    if (e.keyCode === 13) {
      this.updateSearchAndFilter();
    }
  }

  getFavoritesButton() {
    let toggled = this.props.searchType === 'FAVORITES';

    return (
      toggled ?
        <RaisedButton
          label="Favorites"
          labelColor='white'
          backgroundColor='rgb(40, 130, 150)'
          rippleColor='#E1F5FE'
          margin-left='500px'
          onClick={this.props.actions.updateSearchType}
        /> :
        <RaisedButton
          label="Favorites"
          onClick={this.props.actions.updateSearchType}
        />
    )
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '15px'
      }}>
      <img
        style={{
          'height': '100px',
          'margin-left': '25px'
        }}
        src="https://i.imgur.com/3RjUCdI.png"
        alt="Scheggie: The vegetarian's meal planner"
      />
        <div style={{
          display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
        }}>
          <div style={{
            paddingLeft: '520px',
            paddingTop: '10px'

          }}>
            { this.getFavoritesButton() }
          </div>
          <div style={{
            paddingLeft: '30px'
          }}>
            <TextField
              hintText="Find recipes..."
              textareaStyle={{
                backgroundColor: 'gray'
              }}
              underlineFocusStyle={{
                borderColor: 'rgb(40, 130, 150)',
                borderBottomStyle: 'solid',
                borderBottomWidth: 2,
                transform: 'scaleX(0)',
              }}
              style={{
                width: '400px'
              }}
              value={this.state.searchTerm}
              onChange={this.updateSearch}
              onKeyUp={(e) => this.updateSearchOnEnter(e)}
            />
            <span style={{paddingLeft: '98px', paddingTop: '30px'}}>
              <RaisedButton
                label="SEARCH"
                labelColor='white'
                backgroundColor='rgb(40, 130, 150)'
                rippleColor='#E1F5FE'
                onClick={this.updateSearchAndFilter}
              />
            </span>
            <span style={{width: '30px'}}></span>
          </div>
          <Filter updateCategoryTerm = {this.updateCategoryTerm} actions = {this.props.actions} search = {this.props.search}/>
        </div>
        <div style={{
          paddingRight: '30px'
        }}>
        </div>

      </div>
    );
  }
}

export default Search;
