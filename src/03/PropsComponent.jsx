import React, { Component } from 'react';
//prop-types 라이브러리를 PropTypes라는 이름으로 임포트함
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

//프로퍼티 - 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
//자료형을 선언하는 예제
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
