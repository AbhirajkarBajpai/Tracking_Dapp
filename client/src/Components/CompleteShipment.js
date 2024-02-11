import React, { useState } from 'react';
import './CompleteShipment.css'; // Import your custom CSS file for styling

const CompleteShipment = ({ completeModal, setCompleteModal, completeShipment }) => {
  const [completeShip, setCompleteShip] = useState({
    receiver: '',
    index: '',
  });

  const changeStatus = async () => {
    completeShipment(completeShip);
  };

  const handleBack = () => {
    setCompleteModal(false);
  };

  return completeModal ? (
    <div className='CS-modal-container'>
      <div className='CS-modal'>
        <div className='CS-modal-close-btn' onClick={handleBack}>
          Close
        </div>
        <div className='CS-modal-header'>
          <h4 className='CS-modal-title'>Complete Shipment</h4>
          <form className='CS-form' onSubmit={(e) => e.preventDefault()}>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='Receiver'
                className='CS-input'
                onChange={(e) =>
                  setCompleteShip({
                    ...completeShip,
                    receiver: e.target.value,
                  })
                }
              />
            </div>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='Id'
                className='CS-input'
                onChange={(e) =>
                  setCompleteShip({
                    ...completeShip,
                    index: e.target.value,
                  })
                }
              />
              <button onClick={() => changeStatus()} className='CS-button'>
                Change Status
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default CompleteShipment;
