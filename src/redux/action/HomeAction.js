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
      let userData = data.data.sort((x, y) => {
        if (x.first_name < y.first_name) {
          return -1;
        }
        if (x.first_name > y.first_name) {
          return 1;
        }
        return 0;
      });
      dispatch({type: 'IS_SUCCESS', payload: userData});
    })
    .catch(error => {
      dispatch({type: 'IS_FAILURE', payload: error});
    });
};
