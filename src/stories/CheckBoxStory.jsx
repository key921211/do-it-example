import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../04/CheckBox';
import Text from '../04/Text';

storiesOf('CheckBox', module)
  .add('기본 설정', () => <CheckBox name="agree" />)
  .add('children 예제', () => (
    <CheckBox name="agree">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .add('label 예제', () => (
    <CheckBox name="agree" label="이름">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .add('checked 예제', () => (
    <CheckBox name="agree" label="이름" checked>
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .add('errorMessage 예제', () => (
    <CheckBox name="agree" label="이름" errorMessage="동의가 필요합니다">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .add('autoFocus 예제', () => (
    <CheckBox name="agree" label="이름" autoFocus>
      <Text>동의합니다</Text>
    </CheckBox>
  ));
