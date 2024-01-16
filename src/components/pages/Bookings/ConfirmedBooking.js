import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dining from './assets/dining.png';
const ConfirmedBooking = () => {
  const imageStyle = {
    height: 'auto', 
    width:300,
    alignSelf: 'center',
  };

  return (
    <div className="container confirmed-booking">
      <div>
       <img 
          className="hero-image" 
          style={imageStyle}
          src={dining} 
          alt="Restaurant food" 
        />
        </div>
        <div style={{marginTop:35}}>
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
