const INITIAL_STATE = {
  data: [],
  updateDataObject: {},
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_LOADED':
      return {...state, data: action.payload.val};
    case 'UPLOAD_OBJECT':
      return {...state, updateData: action.payload};
    case 'SAVE':
      const obj = state.data.map(item => {
        if (item.id == state.updateDataObject.id) {
          item = {
            ...item,
            title: state.updateDataObject.title,
            body: state.updateDataObject.body,
          };
        }
        return item;
      });
      return {...state, data: obj};
    default:
      return state;
  }
};

export default itemsReducer;
