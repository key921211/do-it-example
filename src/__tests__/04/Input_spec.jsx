import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  it('assigns ther prop value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    expect(wrapper.find('input').prop('value')).toBe(expectedValue); //prop()를 사용하여 value의 프로퍼티 값과 컴포넌트의 전달된 값 (expectedValue) 을 검증
    const { type, value } = wrapper.find('input').props();
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
  });

  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0);
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage: expectedErrorMessage }); //setProps()함수로 errorMessage 프로퍼티의 값을 변경
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });
  describe('contains <input>', () => {
    it('renders one input', () => {
      const wrapper = shallow(<Input name="test_name" />);
      expect(wrapper.find('input')).toHaveLength(1); //find()를 사용하여 input 엘리먼트를 찾는다.
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });
  //it('has one element', () => {
  //const wrapper = shallow(<Input />);
  //expect(wrapper.length).toEqual(1);
  //expect(wrapper).toHaveLength(1);
  //});

  it('calls back onChange on input change', () => {
    const changeStub = jest.fn(); //감시함수 fn()을 제공하여 생성된 함수의 호출을 감시하는 방법을 제공
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />); //생성된 감시 함수를 입력 컴포넌트의 onChange프로퍼티에 할당
    expect(changeStub).not.toHaveBeenCalled();
    const expectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); //재현메소드 이용하여 input 값이 변경되는 이벤트 재현
    expect(changeStub).toHaveBeenCalledTimes(1); //호출검증 메소드 - 호출 횟수
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue); //호출검증 메소드 - 호출 인자
  });
});
