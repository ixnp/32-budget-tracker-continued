import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTORY
} from '../actions/category-actions.js';

const initialState = {
    categories: []
  }

export default function categoryReducer (state, action) {
  if (state === undefined) {
    return initialState
  }

  let newState = {};
  let newCats = [];

  switch(action.type) {
    case 'CATEGORY_CREATE' :
      console.log('21 action', action);
      return Object.assign(newState, {
        categories: [...state.categories, action.category]
      });

    case 'CATEGORY_UPDATE' :
      console.log('27 reducer action', action);
       categories = state.categories.map(category => {
      
        if(category.id === action.categories.id){
          return action.category;
        } else {
          return category;
        }
      });
    case 'CATEGORY_DESTORY' :
   
      newCats = state.categories.filter(cat => cat.id !== action.category.id);

      return Object.assign(newState, {
        categories: newCats
      })

      default:
        return state; 
  }
}

