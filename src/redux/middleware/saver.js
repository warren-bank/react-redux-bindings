import constants from 'redux/data/constants'

const C = constants.middleware

const saver = store => next => action => {
    next(action)
    localStorage[C.LOCAL_STORAGE] = JSON.stringify(store.getState())
}

export default saver
