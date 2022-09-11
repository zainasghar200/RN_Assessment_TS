import {Data} from '../types/types';

export interface AddDataAction {
  type: 'ADD_DATA';
  payload: Data;
}

export interface SetDataAction {
  type: 'SET_DATA';
  payload: Data[];
}

export interface InitialState {
  data: Data[];
}
export interface ButtonEvent {
  buttonId: string;
  componentId: string;
}
