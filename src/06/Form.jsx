import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './FormContext';

class FormProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: {}, //1. 입력된 값을 모두 저장하는 객체
      errors: {}, //2. 유효성 검사 함수가 반환한 오류 메세지를 입력 항목 이름과 함께 해시맵 구조로 저장한 객체
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(name, updatedValue) {
    //3. Input 컴포넌트에서 입력값이 변경될 때 실행될 콜백 함수
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue, //4. 입력값을 values의 새값으로 변경
        },
      }),
      () => this.validate(this.state.values), //5. state가 변경된 다음 변경된 state의 값으로 유효성 검사 함수를 실행
    );
  }
  reset() {
    this.setState({ values: {}, errors: {} }); //6. 컨텍스트의 values, errors값을 초기화함
  }
  submit() {
    this.props.onSubmit(this.state.values); //7. 소비자에서 submit()함수가 호출되면 onSubmit 프로퍼티로 전달받은 콜백함수에 현재 입력된 값을 인자로 전달
  }
  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values); //8. 폼 공급자는 유효성 검사 로직을 포함하지 않고 validate프로퍼티로 전달된 콜백 함수를 실행하여 유효성 오류 결과값만을 저장
    this.setState({
      errors, //9. 유효성 검증의 오류 메시지를 컨텍스트의 errors에 저장
    });
  }
  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors, //10. 컨텍스트 데이터에 오류 메시지를 포함시킴
          values, //11. 컨텍스트 데이터에 입력값을 포함시킴
          onChange: this.onChange, //12. 입력된 컨텍스트값을 변경하는 콜백 함수 this.onChange()를 전달
          reset: this.reset, //13. 입력된 컨텍스트값을 초기화하는 this.reset() 함수를 전달
          submit: this.submit, //14. 폼 전송 콜백 함수 this.submit()를 전달
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

FormProvider.defaultProps = {
  validate: () => ({}),
};
export default FormProvider;
