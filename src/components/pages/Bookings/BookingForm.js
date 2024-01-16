import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidNumberOfGuestsErrorMessage = 
    'Please enter a number between 1 and 10';
  const invalidFullNameErrorMessage = 'Please enter your full name';
  const invalidEmailErrorMessage = 'Please enter a valid email address';
  const invalidPhoneNumberErrorMessage = 'Please enter a valid phone number';
  const invalidCheckboxErrorMessage = 'Please accept the terms and conditions';

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isFullNameValid = () => fullName !== '';
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneNumberValid = () => /^\d{11}$/.test(phoneNumber);
  const isCheckboxValid = () => termsAccepted;

  const areAllFieldsValid = () => 
    isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid()
    && isFullNameValid()
    && isEmailValid()
    && isPhoneNumberValid()
    && isCheckboxValid();

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, fullName, email, phoneNumber });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField 
        label="Full Name" 
        htmlFor="booking-full-name" 
        hasError={!isFullNameValid()} 
        errorMessage={invalidFullNameErrorMessage}
      >
        <input 
          type="text" 
          id="booking-full-name" 
          name="booking-full-name" 
          value={fullName} 
          required={true} 
          onChange={e => setFullName(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Email" 
        htmlFor="booking-email" 
        hasError={!isEmailValid()} 
        errorMessage={invalidEmailErrorMessage}
      >
        <input 
          type="email" 
          id="booking-email" 
          name="booking-email" 
          value={email} 
          required={true} 
          onChange={e => setEmail(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Phone Number" 
        htmlFor="booking-phone-number" 
        hasError={!isPhoneNumberValid()} 
        errorMessage={invalidPhoneNumberErrorMessage}
      >
        <input 
          type="tel" 
          id="booking-phone-number" 
          name="booking-phone-number" 
          value={phoneNumber} 
          required={true} 
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage={invalidDateErrorMessage}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of guests" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
  label="Terms and Conditions" 
  htmlFor="booking-terms" 
  hasError={!isCheckboxValid()} 
  errorMessage={invalidCheckboxErrorMessage}
>
  <label htmlFor="booking-terms" className="checkbox-label">
    <input 
      type="checkbox" 
      id="booking-terms" 
      name="booking-terms" 
      checked={termsAccepted} 
      required={true} 
      onChange={e => setTermsAccepted(e.target.checked)}
    />
    I agree to the Terms and Conditions
  </label>
</FormField>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
