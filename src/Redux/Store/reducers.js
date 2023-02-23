import {combineReducers} from 'redux';


import usersReducer, {NAME as usersName} from '../Features/Users';

export default () => 
    combineReducers({
    [usersName]: usersReducer,
});