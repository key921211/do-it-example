const initState = {
    ids: [], // 데이터순서
    entities: {}, // 해시맵 형태로 데이터를 저장
};

export default (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        default:
            return state;
    }
}