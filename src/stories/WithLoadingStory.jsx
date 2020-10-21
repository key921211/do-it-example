import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from '../05/withLoading';

const TextWithLoading = withLoading('로딩 중')(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(Button);

storiesOf('WithLoading', module)
  .add('기본 설정', () => (
    <div>
      <TextWithLoading>안녕하세요</TextWithLoading>
      <ButtonWithLoading>안녕하세요</ButtonWithLoading>
    </div>
  ))
  .add('isLoading 예제', () => (
    <div>
      <TextWithLoading isLoading>안녕하세요</TextWithLoading>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
    </div>
  ));
