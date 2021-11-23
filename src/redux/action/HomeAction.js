export const getData = dispatch => {
  dispatch(getDataActionCreator());
};

const getDataActionCreator = () => {
  return middlewareFunction;
};

const middlewareFunction = (dispatch, getState) => {
  dispatch({type: 'IS_FETCHING'});
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'IS_SUCCESS', payload: data});
    })
    .catch(error => {
      dispatch({type: 'IS_FAILURE', payload: error});
    });
};
