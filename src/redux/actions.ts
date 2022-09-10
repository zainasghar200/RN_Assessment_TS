import {Dispatch} from 'redux';
import {Data} from '../types/types';
import {ADD_DATA, SET_DATA} from './actionTypes';

export const setData = (data: Data[], dispatch: Dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const addData = (data: Data, dispatch: Dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: data,
  });
};
