import * as types from './types';
import $ from 'jquery';

export const updateSearchThunk = (input, filter = {}) => {
  return (dispatch) => {
    var searchTerm = typeof input === 'string' ?
      input :
      input.target.value;
    dispatch(updateSearchTerm(searchTerm));
    $.get({
      url: '/recipeSearch',
      data: {
        query: searchTerm,
        filter: filter
      },
      dataType: 'json',
      success: (results) => {
        dispatch(updateSearchResults(results));
      }
    });
  };
}

export const updateSearchResults = results =>
  ({ type: types.UPDATE_SEARCH_RESULTS, results });

export const updateSearchTerm = searchTerm =>
  ({ type: types.UPDATE_SEARCH_TERM, searchTerm });

export const updateSearchType = () =>
  ({ type: types.UPDATE_SEARCH_TYPE });

export const updateCuisineType = (cuisine) =>
  ({type: types.UPDATE_CUISINE_TYPE, cuisine: cuisine});

export const updateNumCalories = (calories) =>
  ({type: types.UPDATE_NUM_CALORIES, calories: calories});

export const updatePrepTime = (time) =>
  ({type: types.UPDATE_PREP_TIME, time: time});

export const updateToggleButton = () =>
  ({type: types.UPDATE_TOGGLE_BUTTON});
