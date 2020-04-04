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
