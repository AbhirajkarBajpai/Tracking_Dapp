// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tracking {
    enum Status { PENDING, IN_TRANSIT, DELIVERED }

    struct Shipment{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        Status status;
        bool ispaid;
    }

    mapping(address=> Shipment[]) public shipments;
    uint256 public shipmentCount;

    struct Typeshipment{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        Status status;
        bool ispaid;
    }

    Typeshipment[] typeShipments;

    event ShipmentCreated(address indexed sender, address indexed receiver, uint256 pickupTime, uint256 distance, uint256 price);
    event ShipmentInTransit(address indexed sender, address indexed receiver, uint256 pickupTime);
    event ShipmentDelivered(address indexed sender, address indexed receiver, uint256 deliveryTime);
    event Shipmentpaid(address indexed sender, address indexed receiver, uint256 amount); 

    constructor(){
        shipmentCount=0;
    }
    function createshipment( address _receiver, uint256 _pickupTime, uint256 _distance, uint256 _price) public payable{      
        require(msg.value==_price, "payment amount must match the price.");
        Shipment memory shipment = Shipment(msg.sender, _receiver, _pickupTime, 0, _distance, _price, Status.PENDING, false);
        shipments[msg.sender].push(shipment);
        shipmentCount++;

        typeShipments.push(Typeshipment(msg.sender,
        _receiver,
        _pickupTime,
        0,
        _distance,
        _price,
        Status.PENDING,
        false));
        emit ShipmentCreated(msg.sender, _receiver, _pickupTime, _distance, _price);
    }

    function startShipment(address _sender, address _receiver, uint256 _index) public{
        Shipment storage shipment = shipments[_sender][_index];
        Typeshipment storage typeShipment = typeShipments[_index];

        require(shipment.receiver ==_receiver,"Invalid receiver.");
        require(shipment.status == Status.PENDING,"Shipment Already IN Transit.");

        shipment.status= Status.IN_TRANSIT;
        typeShipment.status= Status.IN_TRANSIT;
        emit ShipmentInTransit(_sender, _receiver, shipment.pickupTime);
    }
    function completeShipment(address _sender, address _receiver, uint256 _index) public{
        Shipment storage shipment = shipments[_sender][_index];
        Typeshipment storage typeShipment = typeShipments[_index];

        require(shipment.receiver ==_receiver,"Invalid receiver.");
        require(shipment.status == Status.IN_TRANSIT,"Shipment NOT IN Transit.");
        require(!shipment.ispaid ,"Shipment Already Paid");

        shipment.status= Status.DELIVERED;
        typeShipment.status= Status.DELIVERED;
        typeShipment.deliveryTime= block.timestamp;
        shipment.deliveryTime=block.timestamp;
        uint256 amount = shipment.price;

        payable(shipment.sender).transfer(amount);

        shipment.ispaid = true;
        typeShipment.ispaid = true; 

        emit ShipmentDelivered(_sender, _receiver, shipment.deliveryTime);
        emit Shipmentpaid(_sender, _receiver, amount);
    }

    function getShipment(address _sender, uint256 _index) public view returns(address, address, uint256, uint256,uint256,uint256,Status, bool){
        Shipment memory shipment = shipments[_sender][_index];
        return(shipment.sender, shipment.receiver, shipment.pickupTime, shipment.deliveryTime, shipment.distance,shipment.price,shipment.status, shipment.ispaid);
    }

    function getShipmentCount(address _sender) public view returns(uint256){
        return shipments[_sender].length;
    }
    function getAlltransactions() public view returns(Typeshipment[] memory){
        return typeShipments;
    }
}