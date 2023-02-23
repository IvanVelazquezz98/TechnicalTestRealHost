import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes as userActions } from '../../Features/Users';


export default function* tryUserSearch(data) {

    try {
        
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(fetch, URL)
        const dataFech = yield call([response, 'json'])
        const dataFilter = []
          dataFech.filter((val) => {
            if (data.query === "") {
              return val
            } else if (val?.name.toLocaleLowerCase().includes(data.query.toLocaleLowerCase())) {
              return val
            }

          }).map(c => {
            dataFilter.push(c)
          })

       
        yield put({ type: userActions.SEARCH_SUCCESS, dataFilter })
    } catch (e) {
        
        yield put({ type: userActions.SEARCH_FAILED })
    }
}