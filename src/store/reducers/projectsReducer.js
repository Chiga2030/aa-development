// import {
//   CREATE_ITEM,
// } from '../actions/createItemAction';
// import {
//   UPDATE_ITEM,
// } from '../actions/updateItemAction';
// import {
//   DELETE_ITEM,
// } from '../actions/deleteItemAction';

const initialState = {
  items: [
    {
      value: 'Chat bot',
      description: 'Учебное приложение на Node.js, JS, HTML',
      repoLink: 'https://github.com/Chiga2030/chat-bot',
      link: 'https://chat-bot-taa.herokuapp.com/',
      id: 1,
    },
    {
      value: 'Crazy-debugger',
      description: 'Crazy debugger game by JavaScript. \n Игра которая поможет Вам проверить интуицию, переворачивайте карты и находите баги. \n \n Это промежуточная итоговая работа по курсу JavaScript в рамках обучения в @webHeroSchool',
      repoLink: 'https://github.com/Chiga2030/crazy-debugger',
      link: 'https://crazy-debugger.taa-dev.pro/',
      id: 2,
    },
    {
      value: 'Сдать задание на проверку',
      id: 3,
    },
  ],
  count: 3,
};


const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
  // case CREATE_ITEM: {
  //   if (action.payload.trim()) {
  //     const newItemList = [
  //       {
  //         value: action.payload,
  //         isDone: false,
  //         id: Date.now(),
  //       },
  //       ...state.items,
  //     ];
  //     const newCount = ++state.count;

  //     return {
  //       ...state,
  //       items: [
  //         ...newItemList,
  //       ],
  //       count: newCount,
  //     };
  //   }

  //   break;
  // }


  // case UPDATE_ITEM: {
  //   const newItemList = state.items.map(item => {
  //     const newItem = {
  //       ...item,
  //     };

  //     if (item.id === action.payload) {
  //       newItem.isDone = !item.isDone;
  //     }

  //     return newItem;
  //   });

  //   return {
  //     ...state,
  //     items: [
  //       ...newItemList,
  //     ],
  //   };
  //   break;
  // }


  // case DELETE_ITEM: {
  //   const newItemList = state.items.filter(item => item.id !== action.payload);
  //   const newCount = --state.count;

  //   return {
  //     ...state,
  //     items: [
  //       ...newItemList,
  //     ],
  //     count: newCount,
  //   };
  //   break;
  // }


  default:
    return {
      ...state,
    };
  };
};

export default projectsReducer;
