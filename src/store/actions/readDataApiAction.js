export const READ_DATA_API = 'READ_DATA_API';

export const readDataApi = object => ({
  type: READ_DATA_API,
  payload: object,
});
