import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this); //bind 함수를 사용하여 this의 범위가 CheckBox 컴포넌트의 객체로 정의
  }
  componenetDidMount() {
    if (this.props.autoFocus) {
      //autoFocus값이 true일 경우 출력후 input에 자동으로 커서배치
      this.ref.focus();
    }
  }
  handleClick(e) {
    const { name, onChange } = this.props;
    onChange(name, e.target.checked);
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, children, styles, checked } = this.props;
    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox"
            checked={checked && 'checked'}
            onClick={this.handleClick}
          />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);
