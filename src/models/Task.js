import {BSON} from 'realm';

class Task {
  constructor({
    id = new BSON.ObjectId(),
    empId,
    name,
    designation,
    salary,
    isComplete = false,
  }) {
    this._id = id;
    this.name = name;
    this.designation = designation;
    this.salary = salary;
    this.empId = empId;
    this.isComplete = isComplete;
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      designation: 'string',
      salary: 'string',
      empId: 'string',
      isComplete: {type: 'bool', default: false},
    },
  };
}

export default Task;
