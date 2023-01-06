import React, { Component } from 'react';
import './style.css';
import { Button, Space } from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

interface State {
  isLogin: boolean;
}

class Home extends Component {
  state = {
    isLogin: true,
  };

  componentDidMount() {
    this.state.isLogin;
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({ isLogin: false });
      }
    });
  }
  render() {
    const { isLogin } = this.state;
    if (isLogin) {
      return (
        <div className='home-page'>
          <Button type='primary'>start crawler</Button>
          <Button type='primary'>show data</Button>
          <Button type='primary'>logout</Button>
        </div>
      );
    } else {
      return <Redirect to='/login' />;
    }
  }
}

export default Home;
