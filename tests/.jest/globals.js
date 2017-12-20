// utils
import deepFreeze               from 'deep-freeze'

// React
import React                    from 'react'
import {shallow, mount, render} from 'enzyme'

// Redux
import {storeFactory}           from 'redux/store'
import actions                  from 'redux/actions'

Object.assign(global, {
  deepFreeze,
  React,
  enzyme: {
    shallow,
    mount,
    render
  },
  redux: {
    storeFactory,
    actions
  }
})
