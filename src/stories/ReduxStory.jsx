import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';
import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';
import AdvReduxApp06 from '../07/AdvReduxApp06';
import AdvReduxApp07 from '../07/AdvReduxApp07';
import AdvReduxApp08 from '../07/AdvReduxApp08';
import SearchFilterReduxApp from '../07/SearchFilterReduxApp';

storiesOf('ReaduxApp', module)
  .add('기본 스토어 설정', () => <ReduxApp01 />)
  .add('기본 액션 호출', () => <ReduxApp02 />)
  .add('기본 리듀서 구현', () => <ReduxApp03 />)
  .add('다중 리듀서 설정', () => <AdvReduxApp01 />)
  .add('다중 액션 설정', () => <AdvReduxApp02 />)
  .add('배열 액션 호출', () => <AdvReduxApp03 />)
  .add('그래프DB 변환 작업', () => <AdvReduxApp04 />)
  .add('그래프DB 수정 액션 호출', () => <AdvReduxApp05 />)
  .add('테이터 컴포넌트 예제', () => <AdvReduxApp06 />)
  .add('테이터 컴포넌트 액션 예제', () => <AdvReduxApp07 />)
  .add('테이터 컴포넌트 전체 액션 예제', () => <AdvReduxApp08 />)
  .add('검색 항목 예제', () => <SearchFilterReduxApp />);
