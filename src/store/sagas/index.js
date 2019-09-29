import { all, takeLatest, call, put, select } from 'redux-saga/effects'
import api from './../../services/api'
import { Creators as LoginActions, Types as LoginTypes } from './../ducks/login'
import { Creators as RepositoriesActions, Types as RepositoriesTypes } from './../ducks/repositories'
import { navigate } from './../../services/navigation'

function* login(action) {
    try {
        const { username } = action.payload
        const response = yield call(api.get, `/users/${username}`)
        yield put(LoginActions.loginSuccess(response.data))
        navigate('Repositories')
    } catch(e) {
        yield put(LoginActions.loginFailure())
    }
}

function* loadRepositories() {
    try {
        const { username } = yield select(state => state.login.user)
        const response = yield call(api.get, `/users/${username}/repos`)
        yield put(RepositoriesActions.loadRepositoriesSuccess(response.data))
    } catch(e) {
        yield put(RepositoriesActions.loadRepositoriesFailure())
    }
}

export default function* rootSaga() {
    return yield all([
        takeLatest(LoginTypes.REQUEST, login),
        takeLatest(RepositoriesTypes.REQUEST, loadRepositories)
    ])
}