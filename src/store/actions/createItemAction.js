export const CREATE_ITEM = 'CREATE_ITEM';

export const createItem = value => ({
  type: CREATE_ITEM,
  payload: value,
});
