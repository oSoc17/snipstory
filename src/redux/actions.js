import { firebaseDatabase, firebaseAuth } from '../helpers/firebase';
import { push } from 'connected-react-router';

export const actionTypes = {
  fetchRandomStoriesFulfilled: 'FETCH_RANDOM_STORIES_FULFILLED',
  fetchRandomStoriesRejected: 'FETCH_RANDOM_STORIES_REJECTED',
  fetchRandomStoriesStarted: 'FETCH_RANDOM_STORIES_STARTED',
  selectStory: 'SELECT_STORY',
  checkTeacherCodeRejected: 'CHECK_TEACHER_CODE_REJECTED',
  checkTeacherCodeFulfilled: 'CHECK_TEACHER_CODE_FULFILLED',
  checkingTeacherCode: 'CHECKING_TEACHER_CODE',
  createRoomStarted: 'CREATE_ROOM_STARTED',
  createRoomFulfilled: 'CREATE_ROOM_FULFILLED',
  createRoomRejected: 'CREATE_ROOM_REJECTED',
  fetchRoomDataStarted: 'FETCH_ROOM_DATA_STARTED',
  fetchRoomDataFulfilled: 'FETCH_ROOM_DATA_FULFILLED',
  fetchRoomDataRejected: 'FETCH_ROOM_DATA_REJECTED'
};

export const fetchRandomStoriesStarted = () => ({
  type: actionTypes.fetchRandomStoriesStarted
});
export const fetchRandomStoriesFulfilled = stories => ({
  type: actionTypes.fetchRandomStoriesFulfilled,
  stories
});
export const fetchRandomStoriesRejected = error => ({
  type: actionTypes.fetchRandomStoriesRejected,
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

export const checkTeacherCode = event => {
  return dispatch => {
    dispatch(checkingTeacherCode());
    const code = event.target.value;
    if (code === '')
      return dispatch(checkTeacherCodeRejected('No empty string allowed'));
    firebaseDatabase
      .ref('/tokens')
      .child(code)
      .once('value')
      .then(snapshot => {
        const val = snapshot.val();
        if (val) dispatch(checkTeacherCodeFulfilled(snapshot.val()));
        else dispatch(checkTeacherCodeRejected('No such code'));
      })
      .catch(err => {
        dispatch(checkTeacherCodeRejected('No such code'));
      });
  };
};

export const checkingTeacherCode = () => ({
  type: actionTypes.checkingTeacherCode
});

export const checkTeacherCodeFulfilled = ({ classId, userId }) => ({
  type: actionTypes.checkTeacherCodeFulfilled,
  error: '',
  classId,
  userId
});

export const checkTeacherCodeRejected = errorString => ({
  type: actionTypes.checkTeacherCodeRejected,
  error: errorString
});

export const createRoom = () => {
  return (dispatch, getState) => {
    dispatch(createRoomStarted());

    firebaseAuth().signInAnonymously().then(user => {}).catch(err => {
      console.log('auth failed', err);
      dispatch(createRoomRejected(err.message));
    });

    const roomKey = firebaseDatabase.ref().child('rooms').push().key;

    const data = {
      id: roomKey,
      ...getState().room,
      users: [getState().user]
    };

    let updates = {};
    updates['/rooms/' + roomKey] = data;
    firebaseDatabase
      .ref()
      .update(updates)
      .then(result => {
        dispatch(createRoomFulfilled(data));
        dispatch(push(`/rooms/${roomKey}`));
      })
      .catch(err => {
        dispatch(createRoomRejected(err.message));
      });
  };
};

export const createRoomStarted = () => ({
  type: actionTypes.createRoomStarted
});

export const createRoomFulfilled = newRoom => ({
  type: actionTypes.createRoomFulfilled,
  newRoom: newRoom
});

export const createRoomRejected = err => ({
  type: actionTypes.createRoomRejected,
  error: err
});

export const fetchRoomData = () => {
  return (dispatch, getState) => {
    dispatch(fetchRoomDataStarted());
    const roomId = getState().router.location.pathname.split('/rooms/')[1];

    firebaseDatabase
      .ref()
      .child('rooms')
      .child(roomId)
      .once('value')
      .then(response => {
        console.log('room data:', response.val());
        dispatch(fetchRoomDataFulfilled(response.val()));
      })
      .catch(err => {
        dispatch(fetchRoomDataRejected(err));
      });
  };
};

export const fetchRoomDataStarted = () => ({
  type: actionTypes.fetchRoomDataStarted
});

export const fetchRoomDataFulfilled = data => ({
  type: actionTypes.fetchRoomDataFulfilled,
  newRoom: data
});

export const fetchRoomDataRejected = err => ({
  type: actionTypes.fetchRoomDataRejected,
  error: err
});
