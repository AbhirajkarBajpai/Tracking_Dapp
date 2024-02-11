import React from 'react';
import './Table.css'; 

const Table = ({ setCreateShipmentModal , allShipmentsdata }) => {
  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return dateTime;
  };

  console.log("all Data",allShipmentsdata);

  return (
    <div className='C-create-tracking-section'>
      <div className='C-section-header'>
        <div className='C-max-width-lg'>
          <h3 className='C-header-text'>
            Create Tracking
          </h3>
          <p className='C-description-text'>
          This DApp addresses the challenges of traditional tracking systems by leveraging blockchain technology to provide enhanced security, transparency, and trust in the product tracking process. It offers users a reliable and efficient solution for monitoring the movement of products from sender to receiver.
          </p>
        </div>
        <div className='C-add-tracking-btn' onClick={() => setCreateShipmentModal(true)}>
          Add Tracking
        </div>
      </div>
      <div className='mt-12 C-table-container'>
        <table className='C-table'>
          <thead className='C-table-header'>
            <tr>
              <th className='C-table-cell'>Sender</th>
              <th className='C-table-cell'>Receiver</th>
              <th className='C-table-cell'>Pickup Time</th>
              <th className='C-table-cell'>Distance</th>
              <th className='C-table-cell'>Price</th>
              <th className='C-table-cell'>Delivery Time</th>
              <th className='C-table-cell'>Paid</th>
              <th className='C-table-cell'>Status</th>
            </tr>
          </thead>
          <tbody>
            {allShipmentsdata?.map((shipment, idx) => (
              <tr key={idx}>
                <td className='C-table-cell'>{shipment.sender.slice(0, 15)}...</td>
                <td className='C-table-cell'>{shipment.receiver.slice(0, 15)}...</td>
                <td className='C-table-cell'>{convertTime(shipment.pickupTime)}</td>
                <td className='C-table-cell'>{shipment.distance}KM</td>
                <td className='C-table-cell'>{shipment.price}</td>
                <td className='C-table-cell'>{shipment.deliveryTime}</td>
                <td className='C-table-cell'>{shipment.isPaid ? 'Completed' : 'Not Completed'}</td>
                <td className={`C-table-cell C-table-cell-status C-table-cell-status-${shipment.status === 0 ? 'pending' : shipment.status === 1 ? 'transit' : 'delivered'}`}>
                  {shipment.status === 0
                    ? "Pending"
                    : shipment.status === 1
                      ? "IN_TRANSIT"
                      : "Delivered"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
