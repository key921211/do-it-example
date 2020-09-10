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
    const { errorMessage, label, value, name, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`}
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label className="active" for={`input_${name}`}>
          {label}
        </label>
        {errorMessage && <span className="helper-text">{errorMessage}</span>}
      </div>
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
  name: 'test',
};
export default Input;
