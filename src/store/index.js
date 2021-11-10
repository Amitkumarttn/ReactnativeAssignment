import ListStore from './ListStore';

class RootStore {
  constructor() {
    this.listStore = new ListStore();
  }
}

export default RootStore;
