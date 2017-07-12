import { firebaseDatabase } from '../helpers/firebase';
import { browserHistory } from 'react-router';

export const actionTypes = {
  fetchRandomStoriesFulfilled: 'FETCH_RANDOM_STORIES_FULFILLED',
  fetchRandomStoriesRejected: 'FETCH_RANDOM_STORIES_REJECTED',
  fetchRandomStoriesStarted: 'FETCH_RANDOM_STORIES_STARTED',
  selectStory: 'SELECT_STORY'
};

export const fetchRandomStoriesStarted = () => ({
  type: actionTypes.fetchRandomStoriesStarted
});
export const fetchRandomStoriesFulfilled = stories => ({
  type: actionTypes.fetchRandomStoriesFulfilled,
  stories
});
export const fetchRandomStoriesRejected = error => ({
  type: actionTypes.fetchRandomStoriesFulfilled,
  error
});
export const fetchRandomStories = () => {
  return dispatch => {
    dispatch(fetchRandomStoriesStarted());
    firebaseDatabase
      .ref('/stories')
      .once('value')
      .then(snapshot => {
        dispatch(fetchRandomStoriesFulfilled(snapshot.val()));
      })
      .catch(err => {
        dispatch(fetchRandomStoriesRejected(err));
      });
  };
};

export const selectStory = story => ({
  type: actionTypes.selectStory,
  story
});
