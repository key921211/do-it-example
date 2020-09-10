import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값 : {String(Object.entries(objValue))}</div>
        <div>필수값 : {requiredStringValue} </div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  //특수변수 isRequired를 이용하여 requiredStringValue를 필수 프로퍼티로 지정
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
