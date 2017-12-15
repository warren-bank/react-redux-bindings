import { createStore, applyMiddleware } from 'redux'

import constants    from './data/constants'
import initialState from './data/initial_state'
import logger       from './middleware/logger'
import saver        from './middleware/saver'
import rootReducer  from './reducers'

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
