import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = ({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentCount,
}) => {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getShipmentCount();
      setCount(allData);
    };
    fetchData();
  }, []);

  return openProfile ? (
    <div className='PS-modal-container'>
      <div className='PS-overlay' onClick={() => setOpenProfile(false)}></div>
      <div className='PS-modal'>
        <div className='PS-modal-close-btn' onClick={() => setOpenProfile(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 mx-auto'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293a1 1 0 01-1.414 1.414L10 11.414L-4.293 4.293A1 1 0 01-1.414-1.414-1.414l8.586 10 4.293 5.707A1 1 0 010-1.414Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='PS-modal-header'>
          <h4 className='PS-modal-title'>Profile Details</h4>
        </div>
        <div className='PS-profile-info'>
          <div className='flex flex-col items-center pb-10'>
            <img
              className='PS-profile-img'
              src='' // Add the source URL for the image
              alt='User profile'
            />
            <h5 className='PS-profile-name'>Welcome Trader</h5>
            <span className='PS-profile-username'>{currentUser}</span>
            <div className='flex mt-4 space-x-3 md:mt-6'>
              <button className='PS-info-btn'>
                Balance: ---
              </button>
              <button className='PS-info-btn'>
                Total Shipments: {count}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : '';
};

export default Profile;
