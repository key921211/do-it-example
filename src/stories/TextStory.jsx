import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
  .add('기본 설정', () => <Text>안녕하세요</Text>)
  .add('large 예제', () => <Text large>안녕하세요</Text>)
  .add('xlarge 예제', () => <Text xlarge>안녕하세요</Text>)
  .add('small 예제', () => <Text small>안녕하세요</Text>)
  .add('xsmall 예제', () => <Text xsmall>안녕하세요</Text>)
  .add('primary 예제', () => <Text primary>안녕하세요</Text>)
  .add('secondary 예제', () => <Text secondary>안녕하세요</Text>)
  .add('primary와 large 함께 쓰는 예제', () => <Text> primary large안녕하세요</Text>);
