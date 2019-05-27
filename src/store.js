import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  authorFirstName: "",
  authorLastName: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHORFIRSTNAME = "UPDATE_AUTHORFIRSTNAME";
export const UPDATE_AUTHORLASTNAME = "UPDATE_AUTHORLASTNAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_RECIPES = "UPDATE_RECIPES";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_CATEGORY:
      return { ...state, category: payload };
    case UPDATE_AUTHORFIRSTNAME:
      return { ...state, authorFirstName: payload };
    case UPDATE_AUTHORLASTNAME:
      return { ...state, authorLastName: payload };
    case UPDATE_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case UPDATE_INSTRUCTIONS:
      return {
        ...state,
        instructions: [...state.instructions, action.payload]
      };
    case UPDATE_RECIPES:
      const {
        name,
        category,
        authorFirstName,
        authorLastName,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirstName,
        authorLastName,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };
    default:
      return state;
  }
}

export default createStore(reducer);
