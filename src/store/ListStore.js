import {observable, makeObservable, action} from 'mobx';

class ListStore {
  constructor() {
    makeObservable(this);
  }
  @observable lists = [];

  @action addListItem(item, val) {
    this.lists.push({
      title: item,
      body: val,
    });
  }
  @action removeList(index) {
    this.lists.splice(index, 1);
  }
  @action updateList(title, body, index) {
    var obj = this.lists.map((item, i) => {
      if (i === index) {
        item = {
          ...item,
          title: title,
          body: body,
        };
      }
      return item;
    });
    this.lists = obj;
  }
}

export default ListStore;
