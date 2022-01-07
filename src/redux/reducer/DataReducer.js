const INITIAL_STATE = {
  isLoading: true,
  arrData: [],
  error: '',
  updateDataObject: {},
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return {...state, isLoading: true};
    case 'IS_SUCCESS':
      return {...state, isLoading: false, arrData: action.payload, error: ''};
    case 'IS_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    case 'UPLOAD_OBJECT':
      return {...state, updatedData: action.payload};
    case 'DELETE_USER':
      const newArr = state.arrData.splice(action.payload, 1);
      const newdata = state.arrData;
      console.log(newdata);
      const filterArr = state.arrData.filter(
        userdata => userdata.index !== action.payload,
      );
      return {...state, arrData: filterArr};
    case 'SAVE':
      const obj = state.arrData.map(item => {
        if (item.id === state.updateDataObject.id) {
          item = {
            ...item,
            first_name: state.updateDataObject.first_name,
            last_name: state.updateDataObject.last_name,
            email: state.updateDataObject.email,
          };
        }
        return item;
      });
      return {...state, arrData: obj};
    default:
      return state;
  }
};
export default dataReducer;
