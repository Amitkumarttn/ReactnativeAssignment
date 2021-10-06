# Counter Application which Increments Counter on Click of a Button.
# Parent will be class component and child will be Functional component.

# lifecycle  
Life Cycle in React native Class Component;

a). Mounting —  an instance of a component is being created and inserted into the DOM.

b). Updating — when the React component is born in the browser and grows by receiving new updates.

c). Unmounting — the component is not needed and gets unmounted.


# Mounting

1). constructor()

2). static getDerivedStateFromProps()

3). render()

4). componentDidMount()


# Updating

1). static getDerivedStateFromProps()

2). shouldComponentUpdate()

3). render()

4). getSnapshotBeforeUpdate()

5). componentDidUpdate()



# Unmounting

1). componentWillUnmount()


# Sequence of Parent and Child LifeCycle

*********LifeCycle*************


Parent Constructor Called...

Parent Get DerivedStateFromProps Called...

Parent Render Called...

Child Constructor Called...

Child Get DerivedStateFromProps Called... Object { "counterValue": 0,} null

Child Render Called...

Parent ComponentWillUnmount Called...

Child ComponentWillUnmount Called...

Child ComponentDidMount Called...

Parent ComponentDidMount Called...


# After Updating the  value


Parent Get DerivedStateFromProps Called...

ParentShould Component Update Called.. Object {} Object { "value": 1,}

Parent Render Called...

Child Get DerivedStateFromProps Called... Object {
  "counterValue": 1,
} Object {}


Child Should Component Update Called.. Object {
  "counterValue": 1,
} Object {}


Child Render Called...

Child getSnapshotBeforUpdate Called... Object {
  "counterValue": 0,
} Object {}


Parent getSnapshotBeforUpdate Called... Object {} Object {
  "value": 0,
}

Child ComponentDidUpdate Called... Object {
  "counterValue": 0,
} Object {}


Parent ComponentDidUpdate Called... Object {} Object {
  "value": 0,
}


# Screenshot

<img width="1680" alt="Screen Shot 2021-10-04 at 1 06 25 PM" src="https://user-images.githubusercontent.com/90309641/135813050-96253429-85b0-4bae-a8ac-e4e7d850c0c2.png">

