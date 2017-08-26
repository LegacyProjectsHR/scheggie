import * as types from '../actions/types';
import data from '../../../sampleData.js';

const INITIAL_STATE = {
  searchTerm: '',
  searchType: 'RECIPES',
  results: data,
  cuisine: '',
  calories: '',


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
    return _.extend({}, state, {
      cuisine: action.cuisine
    });
    case types.UPDATE_NUM_CALORIES:
    return _.extend({}, state, {
      cuisine: action.calories
    })
    case types.UPDATE_PREP_TIME:
    return _.extend({}, state, {
      cuisine: action.calories
    })
    case types.UPDATE_TOGGLE_BUTTON: 
    return _.extend({}, state, {
      cuisine: action.calories
    })
  }
  return state;
}

export default reducer;
