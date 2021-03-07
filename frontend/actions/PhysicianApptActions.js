import * as ApiUtils from './ApiUtils';

export const RECEIVE_ALL_PHSYICIANS = "RECEIVE_ALL_PHSYICIANS";
export const RECEIVE_PHYSICIAN_APPTS = "RECEIVE_PHYSICIAN_APPTS";

const receiveAllPhysicians = (physicians) => {
  return{
    type: RECEIVE_ALL_PHSYICIANS,
    physicians
  };
};

const receiveAllPhysicianAppts = (payload) => {
  return{
    type: RECEIVE_PHYSICIAN_APPTS,
    payload 
  };
};

export const fetchAllPhysicians = () => dispatch => {
  return ApiUtils.fetchAllPhysicians()
    .then( physicians => dispatch(receiveAllPhysicians(physicians)))
};

export const fetchPhysicianAppts = (physicianId) => dispatch => {
  return ApiUtils.fetchPhysicianAppts(physicianId)
    .then(payload => dispatch(receiveAllPhysicianAppts(payload)))
}