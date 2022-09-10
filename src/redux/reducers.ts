import {
  AddDataAction,
  InitialState,
  SetDataAction,
} from '../interfaces/interfaces';
import {ADD_DATA, SET_DATA} from './actionTypes';

const initialState: InitialState = {
  data: [],
};

type Action = AddDataAction | SetDataAction;

const dataReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, data: action.payload};
    case ADD_DATA:
      let s = state.data;
      s.push(action.payload);
      console.log(s);
      return {...state, data: s};
    default:
      return state;
  }
};

export default dataReducer;
