import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../06/HomePageComponent';
import HomePageWithProvider from '../06/HomePageWithProvider';
import HomePageWithTwoProvider from '../06/HomePageWithTwoProvider';

storiesOf('HomePageComponent', module)
  .add('컨텍스트 예제', () => <HomePageComponent />)
  .add('Provider 예제', () => <HomePageWithProvider />)
  .add('이중 Provider 예제', () => <HomePageWithTwoProvider />);
