import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    //state정의
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this); //함수로 넘어갈 this는 받드시 생성자에서 bind()함수로 묶어줘야한다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    //state변경
    //state값을 직접변경안하고 setState()함수를 사용하는 이유는 render()함수로 화면을 그려주는 시점이 리액트 엔진이 정하기 때문
    //setState()함수를 호출하여 state값을 변경하면 리액트 엔진이 자동으로 render()함수를 호출하므로 화면에 변경된 state값을 출력할 수 있음
    this.setState({
      loading: false,
      formData: data + formData,
    });

    //일반 함수를 사용한 예
    //this.setState(function(prevState) {
    //  const newState = {
    //      loading : false,
    //      formData : data + prevState.formData,
    //  };
    //  return newState;
    //})

    //화살표 함수를 사용한 예
    //this.setState(prevState => ({
    //      loading : false,
    //      formData : data + prevState.formData,
    //  });
    console.log('loading값', this.state.loading);
  }
  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {String(this.state.formData)}</span>
      </div>
    );
  }
}

export default StateExample;
