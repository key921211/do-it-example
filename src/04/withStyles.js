//react-with-styles를 모든 컴포넌트에서 사용
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'; //react-with-styles의 테마관리자
import aphroditeInterface from 'react-with-styles-interface-aphrodite'; //서버 출력을 도와주는 아프로디테 라이브러리의 react-with-styles버전
import { css, withStyles, withStylesPropTypes } from 'react-with-styles'; //react-with-styles 에서 사용하는 함수
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme); //테마파일등록
ThemedStyleSheet.registerInterface(aphroditeInterface); //아프로디테를 react-with-styles테마관리자에 적용

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
