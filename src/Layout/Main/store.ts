import { produce } from 'immer'
import { AnyAction } from 'redux'
import { UserState } from './store.d'

/**
 * type
 * action
 * effect
 * reducer
 */

const SET_IS_LOGIN = 'main/SET_IS_LOGIN'

export const changeIsLoginAction = (data: boolean) => ({ type: SET_IS_LOGIN, data })

const defaultState: UserState = {
  isLogin: false,
}

export const reducer = produce((draft: UserState, {type, data}: AnyAction) => {
  switch(type) {
    case SET_IS_LOGIN:
      draft.isLogin = data
      break;
    default:
      break;
  }
}, defaultState)
