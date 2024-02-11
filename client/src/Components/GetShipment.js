import React, { useState } from 'react';
import './GetShipment.css'; 

const GetShipment =  ({ getModal, setGetModal, getShipment }) => {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const data = await getShipment(index);
    setSingleShipmentData(data);
    console.log("One Data", data);
  };

  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(newTime);
    return dateTime;
  };

  return getModal ? (
    <div className='GS-modal-container'>
      <div className='GS-overlay' onClick={() => setGetModal(false)}></div>
      <div className='GS-modal'>
        <div className='GS-modal-close-btn' onClick={() => setGetModal(false)}>
          <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mx-auto' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293a1 1 0 01-1.414 1.414L10 11.414L-4.293 4.293A1 1 0 01-1.414-1.414-1.414l8.586 10 4.293 5.707A1 1 0 010-1.414Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='GS-modal-header'>
          <h4 className='GS-modal-title'>Product Tracking details</h4>
          <form className='GS-form' onSubmit={(e) => e.preventDefault()}>
            <div className='relative mt-3'>
              <input
                type='number'
                placeholder='Id'
                className='GS-input'
                onChange={(e) => setIndex(e.target.value)}
              />
            </div>
            <button onClick={() => getShipmentData()} className='GS-button'>
              Get Details
            </button>
          </form>
          <div className='GS-details-container'>
            {singleShipmentData === undefined ? (
              ''
            ) : (
              <div className='text-left'>
                <p className='GS-details-item'>Sender: {singleShipmentData.sender.slice(0, 25)}...</p>
                <p className='GS-details-item'>Receiver: {singleShipmentData.receiver.slice(0, 25)}...</p>
                <p className='GS-details-item'>PickupTime: {convertTime(singleShipmentData.pickupTime)}</p>
                <p className='GS-details-item'>DeliveryTime: {convertTime(singleShipmentData.deliveryTime)}</p>
                <p className='GS-details-item'>Distance: {singleShipmentData.distance}</p>
                <p className='GS-details-item'>Price: {singleShipmentData.price}</p>
                <p className='GS-details-item'>Status: {singleShipmentData.status}</p>
                <p className='GS-details-item'>
                  Paid: {singleShipmentData.isPaid ? 'Complete' : 'Not Complete'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : '';
};

export default GetShipment;
