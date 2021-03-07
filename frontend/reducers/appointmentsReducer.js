import {
  RECEIVE_PHYSICIAN_APPTS,
} from "../actions/PhysicianApptActions";

export const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHYSICIAN_APPTS:
      // debugger
      if(!action.payload.appointments) return {};
      return action.payload.appointments
    default:
      return state;
  }
};
