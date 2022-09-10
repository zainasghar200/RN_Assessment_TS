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

const dataReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, data: action.payload};
    case ADD_DATA:
      let stateData = state.data;
      stateData.push(action.payload);
      return {...state, data: stateData};
    default:
      return state;
  }
};

export default dataReducer;
