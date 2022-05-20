import { userApi } from '../API/API'
import { auth } from '../data/firebase'
import { preload } from './AuthReducer'

const SET_DATA_USER = 'SET_DATA_USER'

const setDataUser = (name, tag, userId) => ({
    type: SET_DATA_USER,
    name,
    tag,
    userId,
})

let initialState = {
    id: '',
    tag: '',
    name: '',
    location: '',
    followers: null,
    following: null,
    shots: [],
    collections: [],
    linkWeb: '',
    linkInst: '',
    linkFace: '',
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_USER:
            return {
                ...state,
                id: action.userId,
                tag: action.tag,
                name: action.name,
            }
        default:
            return {
                ...state,
            }
    }
}

const setUser = (name, tag) => {
    return async (dispatch) => {
        dispatch(preload(true))
        const user = auth.currentUser
        await userApi.setUser(name, tag, user.uid)
        dispatch(setDataUser(name, tag, user.uid))
        dispatch(preload(false))
    }
}

export { userProfileReducer, setUser }
