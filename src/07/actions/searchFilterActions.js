export const SET_FILTER = 'serachFilter/SET_FILTE';
export const RESET_FILTER = 'searchFilter/RESET_FILTER';

export const setFilter = (filterName, value) => ({
    type: SET_FILTER,
    payload: {
        filterName, //검색항목의 이름
        value, //검색값
    },
});

export const resetFilter = () => ({
    type: RESET_FILTER,
})

export const setNameFilter = name => setFilter('name', name);
export const setAgeFilter = age => setFilter('age', age);
export const setIdFilter = id => setFilter('id', id);