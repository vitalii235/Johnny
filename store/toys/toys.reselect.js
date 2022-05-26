import {createSelector} from 'reselect';

const baseSelector = state => state.toys;

export const getToysSelector = createSelector(
  baseSelector,
  state => state.toys,
);

export const parseToysToTypedListSelector = createSelector(
  getToysSelector,
  toys => {
    const parsedToys = (toys || []).reduce(
      (acc, val) => ({
        ...acc,
        [val.species]: [...(acc[val.species] || []), val] || [],
      }),
      {},
    );
    return Object.keys(parsedToys).map(toy => ({
      title: toy,
      data: parsedToys[toy],
    }));
  },
);
