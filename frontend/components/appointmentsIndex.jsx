import React from 'react';
import { connect } from 'react-redux';
import { fetchPhysicianAppts } from '../actions/PhysicianApptActions';

class AppointmentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhysicianAppts(this.props.match.params.physicianId)
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.physicianId !== this.props.match.params.physicianId){
      this.props.fetchPhysicianAppts(this.props.match.params.physicianId)
    }
  }

  render(){
    const { physician, appointments } = this.props;
    let appointmentInfo;
    
    if(appointments.length){
        appointmentInfo = appointments.map( (appt, i) => {
        let time = new Date(appt.time)
        return <div key={appt.id}>
          <li>{i + 1}</li>
          <li>{appt.patientFName} {appt.patientLName}</li>
          <li>{time.toLocaleTimeString()}</li>
          <li>{appt.kind}</li>
        </div>
      })
    } else {
      appointmentInfo = <div>No Appointments for Today</div>
    }
    
    return(
      <div>
        <div>

        </div>
        {appointmentInfo}
      </div>
    )
  }
}

const mSTP = (state, ownProps) => {
  return{
    physician: state.entities.physicians[ownProps.match.params.physicianId],
    appointments: Object.values(state.entities.appointments)
  }
};

const mDTP = (dispatch) => {
  return{
    fetchPhysicianAppts: (physicianId) => dispatch(fetchPhysicianAppts(physicianId))
  }
};

export default connect(mSTP, mDTP)(AppointmentIndex);