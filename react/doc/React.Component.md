# React.Component

This page contains a detailed API reference for the React component class definition. It assumes you're familiar with fundamental React concepts, such as Components and Props, as well as State and Lifecycle. If you're not, read them first.

## Overview

React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component calss, you need to extend React.Component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The only method you must define in a React.Component subclass is called render(). All the other methods described on this page are optional.

We strongly recommend against creating your own base component classes. In React components, code reuse is promarily achieved through composition rather than inheritance.

> ## Note:
>
> React doesn't force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.

The Component Lifecycle

Each component has several "lifecycle methods" that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

> ## Note:
>
> These methods are considered legacy and you should avoid them in new code:
>
> - UNSAFE_componentWillMount()

## Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

> ## Note:
>
> These emthods are considered legacy and you should avoid them in new code:
>
> - UNSAFE_componentWillUpdate()
> - UNSAFE_componentWillReceiveProps()

## Unmounting

This method is called when a comonent is being removed from the DOM:

- componentWillUnmount()

Error Handling

These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- static getDerivedStateFromError()
- componentDidCatch()

### Other APIs

Each component also provides some other APIs:

- setState()
- forceUpdate()

### Class properties

- defaultProps
- displayName

### Instance properties

- props
- state

## Reference

### Commonly Used Lifecycle Methods

The methods in this section cover the vast majority of use cases you'll encounter creating React components. For a visual reference, check out this lifecycle diagram.

### render()

```jsx
render();
```

This render() method is the only required method in a class component.

When called, it should ecamine this.porps and this.state and return one of the following types:

- React elements. Typically created vis JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
- Arrays and fragments. Let you return multiple elements from render, See the documentation on fragments from more details.
- Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
- String and numbers. These are rendered as text nodes in the DOM.
- Booleans or null. Render nothing, (Mostly exists to support return test && <Child /> pattern, where test is boolean.)

The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not idrectly interact with the browser.

If you need to interact with the browser, perform you work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

> ## Note
>
> render() will not be invoked if shouldComponentUpdate() return false.

### constructor()

```jsx
constructor(props);
```

If you don't initalize state and you don't bind methods, you don't need to implement a constructor for your React component.

The constructor for a REact component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) berore any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

Typically, in React constructors are only used for two purposes:

- initializing local state by assigning an object to this.state.
- Binding event handler methods to an instance.

You should not call setStae() in the constructor(). Instead, if your component needs to use local shate, assign the initial state to this.state directly in the constructor:

```jsx
constructor(props) {
  super(props);

  this.state = {counter: 0};
  this.handleClick = this.handleClick.bind(this);
}
```

Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead.
