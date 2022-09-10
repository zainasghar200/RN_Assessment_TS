import {Dispatch} from 'redux';
import {ADD_DATA, SET_DATA} from './actionTypes';

export const setData = (data: any, dispatch: Dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const addData = (data: any, dispatch: Dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: data,
  });
};
