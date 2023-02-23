import React from 'react';
import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux'

import {
  actionCreators as usersActions
} from '../../Redux/Features/Users'

const { Search } = Input;




const SearchUser = () => {
  const dispatch = useDispatch()
  const onSearch = (value) => {
    dispatch(usersActions.search(value))
  console.log('valor que escribo en el imput' , value)};


  return (<Space direction="vertical">

    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    
  </Space>)
  
};

export default SearchUser;