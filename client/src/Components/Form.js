import React, { useState } from 'react';
import './Form.css'; // Import your custom CSS file for styling

const Form = ({ setCreateShipmentModal, createShipmentModal, createShipment }) => {
  const [shipment, setShipment] = useState({
    receiver: '',
    pickupTime: '',
    distance: '',
    price: '',
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log('Wrong creating item');
    }
  };

  return createShipmentModal ? (
    <div className='F-form-section'>
      <div className='F-overlay' onClick={() => setCreateShipmentModal(false)}></div>
      <div className='F-modal-container'>
        <div className='F-modal'>
          <div className='F-modal-close-btn' onClick={() => setCreateShipmentModal(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mx-auto' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293a1 1 0 01-1.414 1.414L10 11.414L-4.293 4.293A1 1 0 01-1.414-1.414-1.414l8.586 10 4.293 5.707A1 1 0 010-1.414Z' clip-rule='evenodd'/>
            </svg>
          </div>
          <div className='F-modal-header'>
            <h4 className='F-modal-title'>Track Product, Create Shipment</h4>
            <p className='F-modal-description'>Create Your Shipment here ...</p>
          </div>
          <form className='F-form' onSubmit={(e) => e.preventDefault()}>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='Receiver'
                className='F-input'
                onChange={(e) => setShipment({ ...shipment, receiver: e.target.value })}
              />
            </div>
            <div className='relative mt-3'>
              <input
                type='date'
                placeholder='Pickup Time'
                className='F-input'
                onChange={(e) => setShipment({ ...shipment, pickupTime: e.target.value })}
              />
            </div>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='Distance'
                className='F-input'
                onChange={(e) => setShipment({ ...shipment, distance: e.target.value })}
              />
            </div>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='Price(in ether)'
                className='F-input'
                onChange={(e) => setShipment({ ...shipment, price: e.target.value })}
              />
            </div>
            <button onClick={() => createItem()} className='F-button'>
              Create Shipment
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : '';
};

export default Form;
