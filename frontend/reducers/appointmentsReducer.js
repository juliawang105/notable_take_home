import {
  RECEIVE_PHYSICIAN_APPTS,
} from "../actions/PhysicianApptActions";

export const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHYSICIAN_APPTS:
      if(!action.payload.appointments) return state;
      return action.payload.appointments
    default:
      return state;
  }
};
