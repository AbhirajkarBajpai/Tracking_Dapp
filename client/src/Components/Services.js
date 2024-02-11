import React from "react";
import "./Services.css";
import CompleteShipment from "./CompleteShipment";

const Services = ({
  setOpenProfile,
  setCompleteModal,
  setGetModal,
  setStartModal,
}) => {
  const team = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/2942/2942807.png",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzNGCXGRMpbm693xATPPwEPMD0MtXNfljDZR7V2rTknK2lRiypQfp2pgK8IB96ytfJ2E&usqp=CAU",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEC9_VfBaLryMVHuyrDgW6C6sUoCbxPTM6z54c6kZ72ryjlDuvzgyNvKDpmAokxIdICk&usqp=CAU",
    },
    {
      avatar:
        "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",
    },
  ];

  const openModalBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModal(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };

  return (
    <section className="S-service-section">
      <div className="S-max-width-container">
        <div className="S-main-container">
          <ul className="S-grid">
            {team.map((item, i) => (
              <li key={i} className='s-new'>
                <div
                  onClick={() => openModalBox(i + 1)}
                  className={`S-service-item ${
                    i % 2 === 0 ? "S-service-item-sm" : "S-service-item-md"
                  }`}
                >
                  <img src={item.avatar} className="S-img" alt="" />
                  <div style={{  marginTop: '10px', fontWeight: 'bold' }}>
                  {i === 0 && <p>CompleteShipment</p>}
                  {i === 1 && <p>GetShipment</p>}
                  {i === 2 && <p>StartShipment</p>}
                  {i === 3 && <p>GetProfile</p>}
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
