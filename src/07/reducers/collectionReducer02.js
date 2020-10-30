import { SET_COLLECTION } from '../actions/collectionActions01';

const initState = {
    ids: [],
    entities: {},
};

export default (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case SET_COLLECTION: {
            const ids = payload.map(entity => entity['id']);
            const entities = payload.reduce((finalEntities, entity) => ({ // reduce함수를 사용하여 객체 배열을 해시맵 형태의 객체로 변환
                ...finalEntities,
                [entity['id']]: entity,
            }), {});
            return { ...state, ids, entities };
        }
        default:
            return state;
    }
} 