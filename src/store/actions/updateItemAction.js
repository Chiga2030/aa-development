export const UPDATE_ITEM = 'UPDATE_ITEM';

export const updateItem = id => ({
  type: UPDATE_ITEM,
  payload: id,
});
