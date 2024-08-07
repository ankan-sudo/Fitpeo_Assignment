import React from 'react';

const OrderData = [
  { customer: 'Wade Warren', orderNo: 15478256, amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: 48965786, amount: '$365.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: 78958215, amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: 20965732, amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: 95715620, amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: 78514568, amount: '$128.20', status: 'Delivered' },
];

const statusColors = {
  Delivered: 'bg-green-500',
  Cancelled: 'bg-red-500',
  Pending: 'bg-yellow-500',
};

const RecentOrders = () => {
  return (
    <div className="w-full bg-black text-white h-full p-1">
      <div className='font-bold text-lg bg-gray-800 p-2'>Recent Orders</div>
      <div className="flex justify-between bg-gray-800 border-gray-300 text-white p-5">
        <div className="flex-1 text-left text-sm">Customer</div>
        <div className="flex-1 text-left text-sm">Order No.</div>
        <div className="flex-1 text-left text-sm">Amount</div>
        <div className="flex-1 text-left text-sm">Status</div>
      </div>
      {OrderData.map((order, index) => (
        <div key={index} className="flex justify-between p-6 border-b border-gray-300 bg-gray-800">
          <div className="flex-1 text-left">{order.customer}</div>
          <div className="flex-1 text-left">{order.orderNo}</div>
          <div className="flex-1 text-left">{order.amount}</div>
          <div className="flex-1 text-left">
            <span className={`px-3 py-1 rounded text-white ${statusColors[order.status]}`}>
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentOrders;
