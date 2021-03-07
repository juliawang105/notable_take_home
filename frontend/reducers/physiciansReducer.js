import { RECEIVE_ALL_PHSYICIANS, RECEIVE_PHYSICIAN_APPTS } from '../actions/PhysicianApptActions';

export const physiciansReducer = (state = {}, action) => {
  Object.freeze(state);
 
  switch(action.type){
    case RECEIVE_ALL_PHSYICIANS:
      return Object.assign({}, state, action.physicians)
    case RECEIVE_PHYSICIAN_APPTS: 
      let newState = Object.assign({}, state);
      newState[action.payload.physician.id] = action.payload.physician;
      return newState
    default:
      return state;
  }
};