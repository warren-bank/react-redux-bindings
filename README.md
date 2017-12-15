### [react-redux-bindings](https://github.com/warren-bank/react-redux-bindings)

#### Description:

The purpose of this repository is to explore strategies for binding the Redux store with a React component tree, and compare these strategies concretely with an example "Todo List" application.

#### "Todo List" Application:

Based on [code](https://redux.js.org/docs/basics/ExampleTodoList.html) in the official `react-redux` [basics tutorial](https://redux.js.org/docs/basics/)

#### Strategies (one per branch):

* [react-redux](https://github.com/warren-bank/react-redux-bindings/tree/react-redux)
  * the [react-redux](https://github.com/reactjs/react-redux) library contains the "official React bindings for Redux"
  * authored by the primary creator of React: [Dan Abramov](https://github.com/gaearon)
  * overview:
    * presentation components are stateless
    * container components wrap presentation components and provide the binding necessary to map properties from:
      * state data held by the Redux store
      * callback functions which:
        * create Redux actions from data passed through the callback function
        * dispatch these actions to the Redux store
  * usage:
    * this pattern encourages creating a container component for each presentation component (1-to-1)
    * each container component obtains a reference to the Redux store from its context, which is created by an ancestor component that is an instance of `Provider`<br>ex: `<Provider store={store}><App /></ Provider>`
  * considerations:
    * this pattern could be considered as placing an emphasis on configuration
    * pros:
      * separation between the Redux store and presentation components, allowing for greater reuse
      * data can be passed to presentation components without "laying tracks" through the component tree to reach the destination presentation component
    * cons:
      * increased number of components (x2)
      * requires quite a bit of boiler-plate
      * the resulting component tree loses the ability to optimize its rendering performance by virtue of the fact that no component can be assumed to contain a pure render function
        * "pure" in the functional programming sense, whereby the output of the function is deterministic and only dependent upon its input (ie: properties)
        * if a branch of the component tree was known to contain __only__ pure components, then:
          * the root component of this tree could short-circuit attempts to re-render so long as its input properties have not changed since the previous time the component tree was called to render
        * following the `react-redux` pattern whereby container components are scattered throughout the component tree, which can cherry-pick data from the Redux store to pass to child components, then:
          * there is no way for a component to know whether one of its descendants will require an update, so the component can never short-circuit attempts to re-render

* [context-actions](https://github.com/warren-bank/react-redux-bindings/tree/context-actions)
  * overview:
    * presentation components are stateless
    * presentation components are passed to a higher-order component which:
      * returns an instance of `React.PureComponent`
      * provides access to context
    * presentation components obtain all input data from properties
      * consequently, data must be passed from root to leaf
      * specifically, no external data can be obtained from the Redux store
    * presentation components do __not__ pass callback functions in properties
      * all callback functions are stored in the context: `context.actions`
      * `context.actions` is an Object
    * there is a single container component for the entire application, which:
      * adds context
      * renders the `<App store={store} />` "pure" presentation component
      * subscribes to the Redux store and re-renders every time the reducers complete
  * usage:
    * this pattern encourages:
      * a collection of modules that each export a single action creator function
      * presentation components that use callback functions which match the signatures of action creators
    * a single module aggregates all the action creators into a single Object
    * the container component re-maps this Object and adds it to context
      * each key is mapped to a function having the same signature as the corresponding action creator
      * the function:
        * creates the action, using the input parameters
        * dispatches the action to the Redux store
  * considerations:
    * this pattern could be considered as placing an emphasis on convention
    * pros:
      * separation between the Redux store and presentation components, allowing for greater reuse
      * requires little-to-no boiler-plate
      * all presentation components are "pure", which enables branches of the component tree to skip rendering updates when the input properties haven't changed
    * cons:
      * all pertinent data needs to be passed through the presentation component tree (from root to leaf) as properties
        * it strikes me as _wrong_ to call this a 'con', since this convention strictly obeys the React methodology of one-way data flow
