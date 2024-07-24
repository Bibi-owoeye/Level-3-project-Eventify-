import dateicon from '../assets/Date icon.png';
import clockicon from '../assets/clock.png';
import plusicon from '../assets/+- buttons.png';
import './edit.css';

const Edit = () => {
  return (
    <div className="edit-container">
      {/* <h2 className="edit-title">Create a New Event</h2> */}

      <div className='p-3'>
        <div className="section-header mt-7">
          <h3>Event Details</h3>
        </div>

        <div className="form-group mx-16 mt-4">
          <label htmlFor="event-title" className='font-bold'>Event Title <span className="required">*</span></label>
          <input id="event-title" type="text" placeholder="Enter the name of your event" className="input-field mx-2 text-gray-600" />
        </div>

        <div className="form-group mx-16 mt-4">
          <label htmlFor="event-category" className='font-bold'>Event Category <span className="required">*</span></label>
          <select id="event-category" className='input-field text-gray-600'>
            <option value="" className='text-blue-950 font-semibold'>Please Select One</option>
            <option value="" className='text-blue-950 font-semibold'>Wedding Ceremonies</option>
            <option value="" className='text-blue-950 font-semibold'>Naming Ceremonies</option>
            <option value="" className='text-blue-950 font-semibold'>Cinema Show</option>
            <option value="" className='text-blue-950 font-semibold'>Party Event</option>
            <option value="" className='text-blue-950 font-semibold'>Gingles and More...</option>
          </select>
        </div>

        <div className="section-header mt-7">
          <h3>Date and Time</h3>
        </div>

        <div className='mx-16 mt-4 flex gap-12'>
          <div className="flex gap-2">
            <div className=''>
              <label htmlFor="event-type" className='font-bold'>Event Type <span className="required">*</span></label>
            </div>
            <div className='pt-3'>
              <input type="radio" name='eventradio' id="single-event" /><label htmlFor="single-event" className='mx-3 font-bold'>Single Event</label>
            </div>
            <div className='pt-3'>
              <input type="radio" name='eventradio' id="recurring-event" /><label htmlFor="recurring-event" className='mx-3 font-bold'>Recurring Event</label>
            </div>
          </div>
        </div>

        <div className='mx-16 mt-4 flex gap-8'>
          <label htmlFor="sessions" className='font-bold text-base'>Session(s) <span className="required">*</span></label>
          <div className='w-full flex gap-5'>

            <div className="form-group">
              <label htmlFor="start-date" className='font-bold'>Start Date <span className="required">*</span></label>
              <div className='input-icon-wrapper p-0'>
                <img src={dateicon} alt="Date Icon" className='input-icon' />
                <input id="start-date" type="text" className="input-field" placeholder='DD/MM/YY' />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="start-time" className='font-bold'>Start Time <span className="required">*</span></label>
              <div className='input-icon-wrapper'>
                <img src={clockicon} alt="Clock Icon" className='input-icon' />
                <input id="start-time" type="text" className="input-field" placeholder='12:00 AM' />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="end-time" className='font-bold'>End Time <span className="required">*</span></label>
              <div className='input-icon-wrapper'>
                <img src={clockicon} alt="Clock Icon" className='input-icon' />
                <input id="end-time" type="text" className="input-field" placeholder='12:00 AM' />
              </div>
            </div>

            <div className='form-group'>
              <div className='add-session'>
                <img src={plusicon} alt="Add Session Icon" className='add-session-icon' />
              </div>
            </div>
          </div>
        </div>

        <div className="section-header mt-7">
          <h3>Location</h3>
        </div>

        <div className="form-group mx-16 mt-4 flex">
          <label htmlFor="event-location" className='font-bold'>Where Will Your Event Take Place <span className="required">*</span></label>
          <select id="event-location" className='input-field text-gray-600 max-w-md '>
  <option value="" className='text-blue-950 font-semibold'>Please Select One</option>
  <option value="Lagos" className='text-blue-950 font-semibold'>Lagos</option>
  <option value="Abuja" className='text-blue-950 font-semibold'>Abuja</option>
  <option value="Port Harcourt" className='text-blue-950 font-semibold'>Port Harcourt</option>
  <option value="Kano" className='text-blue-950 font-semibold'>Kano</option>
  <option value="Ibadan" className='text-blue-950 font-semibold'>Ibadan</option>
  <option value="Benin City" className='text-blue-950 font-semibold'>Benin City</option>
  <option value="Enugu" className='text-blue-950 font-semibold'>Enugu</option>
  <option value="Jos" className='text-blue-950 font-semibold'>Jos</option>
  <option value="Kaduna" className='text-blue-950 font-semibold'>Kaduna</option>
  <option value="Maiduguri" className='text-blue-950 font-semibold'>Maiduguri</option>
  <option value="Abeokuta" className='text-blue-950 font-semibold'>Abeokuta</option>
  <option value="Owerri" className='text-blue-950 font-semibold'>Owerri</option>
  <option value="Uyo" className='text-blue-950 font-semibold'>Uyo</option>
  <option value="Calabar" className='text-blue-950 font-semibold'>Calabar</option>
  <option value="Warri" className='text-blue-950 font-semibold'>Warri</option>
  <option value="Ilorin" className='text-blue-950 font-semibold'>Ilorin</option>
  <option value="Ado-Ekiti" className='text-blue-950 font-semibold'>Ado-Ekiti</option>
  <option value="Akure" className='text-blue-950 font-semibold'>Akure</option>
  <option value="Osogbo" className='text-blue-950 font-semibold'>Osogbo</option>
  <option value="Osogbo" className='text-blue-950 font-semibold'>Oyo</option>
  <option value="Osogbo" className='text-blue-950 font-semibold'>Zamfara</option>
  <option value="Osogbo" className='text-blue-950 font-semibold'>Adamawa</option>
  <option value="Osogbo" className='text-blue-950 font-semibold'>Ekiti</option>
  <option value="Osogbo" className='text-blue-950 font-semibold'>River</option>

 </select>
        </div>

        <div className="section-header mt-7">
          <h3>Additional Information</h3>
        </div>

        <div className='flex mt-4'>
          <label htmlFor="event-description" className='font-bold'>Event Description <span className="required">*</span></label>
          <textarea id="event-description" placeholder='Describe Whats Special About Your Event & Other Important Details' className="textarea-field"></textarea>
        </div>

        <div className='save-btn-wrapper mt-4'>
          <button type='submit' className='save-btn'>Save & Continue</button>
        </div>

      </div>
    </div>
  );
}

export default Edit;
