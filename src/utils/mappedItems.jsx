/**
* items - объект который будет мапиться в jsx
* jsxElement() - возвращаемый элемент (например span)
*/

const mappedItems = (items, jsxElement) => items.map(
  item => (
    jsxElement(item)
  )
);

export default mappedItems;
