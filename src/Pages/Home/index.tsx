import React, { Component} from 'react';
import './style.css';
import { Button } from 'antd';
import axios from 'axios';
import { Route, Navigate, Routes } from 'react-router-dom';

interface State {
  isLogin: boolean;
}

class Home extends Component {
  state = {
    loaded: false, // need to reload
    isLogin: true
  };

  componentDidMount() {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({ isLogin: false, loaded:true });
      }
    });
  }
  render() {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if(loaded){
        return (
          <div className='home-page'>
            <Button type='primary'>start crawler</Button>
            <Button type='primary'>show data</Button>
            <Button type='primary'>logout</Button>
          </div>
        );
      }
      return null;
    } else {
      return (
        // <Routes>
        <Routes>
        <Route
        path="*"
        element={<Navigate to="/login" replace />}
        />
        </Routes>
      );
    }
  }
}

export default Home;
