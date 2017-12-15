### [react-redux-bindings](https://github.com/warren-bank/react-redux-bindings)

#### Background:

According to the `react-redux` page on [troubleshooting](https://github.com/reactjs/react-redux/blob/master/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux):

> `connect()` implements [shouldComponentUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate) by default, assuming that your component will produce the same results given the same props and state. This is a similar concept to React's [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html).

#### Test case #1:

* component tree hierarchy:
  * (App) -> (container A) -> (presentation A') -> (container B) -> (presentation B')

* update Redux store state such that:
  * in container A, values returned by `mapStateToProps(state)` and `mapDispatchToProps(dispatch, ownProps)` are not modified
  * in container B, value returned by `mapStateToProps(state)` is modified

* assertion:
  * presentation B' will __not__ update

* observed behavior:
  * assertion is entirely __incorrect__
  * render updates are extremely efficient
    * when props to A' change:
      * A' render is called
      * B' render is not
    * when props to B' change:
      * B' render is called
      * A' render is not

* conclusions:
  * `react-redux` is much more efficient than I originally gave them credit for..
