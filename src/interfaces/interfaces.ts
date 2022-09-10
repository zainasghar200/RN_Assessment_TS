export interface AddDataAction {
  type: 'ADD_DATA';
  payload: any;
}

export interface SetDataAction {
  type: 'SET_DATA';
  payload: any;
}

export interface AppState {
  data: any; //list of data
}
