# React Top-Level API

React is the entry point to the React library. If you load React from a <script> tag, these top-level APIs are available on the React global. If  you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').

## Overview

Components

React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React.Component of React.PureComponent.

If you don't use ES6 calsses, you may use the create-react-class module in stead. See Using React without ES6 for more information.

React components can be defined as functions which can be wrapped:

React.memo

## Cerateing React Elements

We recommend using JSX to describe what your UI should look like, Each JSX elements is just syntactic sugar for calling React.createElement(). You will not typically invoke the following methods directly if you are using JSX.

createElement()
createFactory()

See Using React without JSX for more information.

## Transforming Elements

React provides several APIs for manipulating elements:

- cloneElement()
- isValidElement()
- React.Children

## Fragments

React also provides a component for rendering multiple elements without a wrapper.

- React.Fragment

## Refs

- React.createRef
- React.forwardRef

## Suspense

Suspense lets components "wait" for something, before rendering. Today, Suspense only supports one use case: Loading components dynamically with React.lazy. In the future, it will support other use cases like data fetching.

- React.lazy
- React.Suspense

## hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks have a dedicated docs section and a separate API reference:

## Reference

## React.Component

React.Component is the base calss for React components when they are defined using ES6 class:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

See the React.Component API Reference for a list of methods and properties related to the base React.Component class.

## React.PureComponent

React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn't implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component's render() function renders the some result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

> ## Note
> React.PureComponent't shouldComponentUpdate() only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only extend PureComponent when you expect to have simple props and state, or use forceUpate() when you know deep data structures have changed. Or, consider using immutable objects to facilitate fast comparisons of nested data.
> 
>  Furthermore, React.PureComponent's shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also 'Pure'.

