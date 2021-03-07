import { $CombinedState } from "redux"

export const fetchAllPhysicians = () => {
  return $.ajax({
    method: `GET`,
    url: `/api/physicians`
  })
}

export const fetchPhysicianAppts = (physicianId) => {
  return $.ajax({
    method: `GET`,
    url: `/api/physicians/${physicianId}/appointments`
  })
}