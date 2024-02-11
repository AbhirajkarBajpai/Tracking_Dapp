import React, { useState } from 'react';
import './StartShipment.css';

const StartShipment = ({ startModal, setStartModal, startShipment }) => {
  const [getProduct, setGetProduct] = useState({
    receiver: '',
    index: '',
  });

  const startShipping = () => {
    startShipment(getProduct);
  };

  return startModal ? (
    <div className='SS-modal-container'>
      <div className='SS-overlay' onClick={() => setStartModal(false)}></div>
      <div className='SS-modal'>
        <div className='SS-modal-close-btn' onClick={() => setStartModal(false)}>
          {/* <Str1 /> */}
          Image Here...
        </div>
        <div className='SS-modal-header'>
          <h4 className='SS-modal-title'>Start the Shipment</h4>
          <form className='SS-form' onSubmit={(e) => e.preventDefault()}>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='receiver'
                className='SS-input'
                onChange={(e) =>
                  setGetProduct({
                    ...getProduct,
                    receiver: e.target.value,
                  })
                }
              />
            </div>
            <div className='relative mt-3'>
              <input
                type='text'
                placeholder='Id'
                className='SS-input'
                onChange={(e) =>
                  setGetProduct({
                    ...getProduct,
                    index: e.target.value,
                  })
                }
              />
              <button onClick={() => startShipping()} className='SS-button'>
                Start 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : '';
};

export default StartShipment;
