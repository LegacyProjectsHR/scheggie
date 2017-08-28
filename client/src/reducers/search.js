import * as types from '../actions/types';
import data from '../../../sampleData.js';

const INITIAL_STATE = {
  searchTerm: '',
  searchType: 'RECIPES',
  results: data,
  cuisine: '',
  totalTimeInSeconds: '',
  calories: '',
  filterToggled: false,
  selected: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_TERM:
      return _.extend({}, state, {searchTerm: action.searchTerm});
    case types.UPDATE_SEARCH_TYPE:
      return _.extend({}, state, {
        searchType: state.searchType === 'RECIPES' ? 'FAVORITES' : 'RECIPES'
      });
    case types.UPDATE_SEARCH_RESULTS:
      return _.extend({}, state, {
        results: action.results
      });
    case types.UPDATE_CUISINE_TYPE:
    console.log('the action is ', action)
    console.log('updated cuisine val version: ', _.extend({}, state, {
      cuisine: action.cuisine
  }));
      return _.extend({}, state, {
        cuisine: action.cuisine
    });
    case types.UPDATE_NUM_CALORIES:
    console.log('updated calories time val version: ', _.extend({}, state, {
      calories: action.calories
  }));
      return _.extend({}, state, {
      calories: action.calories
    })
    case types.UPDATE_PREP_TIME:
    console.log('updated prep time val version: ', _.extend({}, state, {
      totalTimeInSeconds: action.totalTimeInSeconds
  }));
      return _.extend({}, state, {
        totalTimeInSeconds: action.totalTimeInSeconds
    })
    case types.UPDATE_TOGGLE_BUTTON:
      return _.extend({}, state, {
        filterToggled: !state.filterToggled
    })
    case types.UPDATE_SELECTED_FILTER_VAL:
      console.log('updated selected filter val version: ', _.extend({}, state, {
        selected: action.selected
    }));
      return _.extend({}, state, {
        selected: action.selected
    });
  }
  return state;
}

export default reducer;
