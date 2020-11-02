import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name, //store user 객체의 name항목에 접근하여 userName프로퍼티 값으로 변환
    entity: state.collection.entities[props.id], //데이터 컴포넌트에 프로퍼티로 전달된 id값을 참조하여 그래프 DB의 자료를 추출
  };
};

export default connect(mapStateToProps)(PresentationComponent);
