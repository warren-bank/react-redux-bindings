import { createStore, applyMiddleware } from 'redux'

import constants    from 'redux/data/constants'
import initialState from 'redux/data/initial_state'
import logger       from 'redux/middleware/logger'
import saver        from 'redux/middleware/saver'
import rootReducer  from 'redux/reducers'

const C = constants.middleware

const storeFactory = (stateData=initialState) =>
    applyMiddleware(logger, saver)(createStore)(
        rootReducer,
        (localStorage[C.LOCAL_STORAGE]) ?
            JSON.parse(localStorage[C.LOCAL_STORAGE]) :
            stateData
    )

const store = storeFactory()

export default store
