import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.focus(); //autoFocus 값이 true일 경우 출력 후 input박스에 자동으로 커서 배치
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.refs.focus(); //autoFocus 값이 true일 경우 출력 후 input박스에 자동으로 커서 배치
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange} /*input 값 변경될때 onChange 콜백함수 호출*/
          onFocus={onFocus} /*마우스 커서가 포커스 될때 상위 컴포넌트의 콜백함수 호출*/
          value={value}
          type={type}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']), //3가지중 하나만 가질 수 있음
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text', //기본 타입은 'text'
};
export default Input;
