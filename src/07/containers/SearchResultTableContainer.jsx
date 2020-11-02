import { connect } from 'react-redux';
import SearchResultTable from '../SearchResultTable';

const mapStateToProps = (state) => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce(
    (result, value) => result || Boolean(value),
    false,
  ); // 검색항목이 있는지 검색
  const { ids, entities } = collection;
  const items = ids
    .map((id) => entities[id]) //해시맵 형태로 되어있는 그래프 DB를 객체 배열로 변환
    .filter(
      (entity) =>
        !hasFilter || //검색단어에 대한 데이터가 없으면 모든 목록을 반환
        Object.entries(searchFilter).reduce(
          //filter()함수는 참값인 데이터만을 추출해줌
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);
