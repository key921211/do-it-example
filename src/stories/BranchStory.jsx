import React from 'react';
import { storiesOf } from '@storybook/react';
import BranchLoadingButton from '../05/branch';

storiesOf('Branch', module)
  .add('기본 설정', () => <BranchLoadingButton>안녕하세요</BranchLoadingButton>)
  .add('isLoading 예제', () => <BranchLoadingButton isLoading>안녕하세요</BranchLoadingButton>);
