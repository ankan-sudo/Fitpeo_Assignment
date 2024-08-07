import React from 'react';
import { FaStar } from "react-icons/fa6";

function Feedback() {
  const feedbackData = [
    {
      name: 'Jenny Wilson',
      rating: 4,
      text: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      name: 'Dianne Russell',
      rating: 5,
      text: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
    },
    {
      name: 'Devon Lane',
      rating: 4,
      text: 'Normally wings are wings but theirs are lean meaty and tender and',
    },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-2/3">
      <h2 className="text-white text-lg mb-3 font-bold">Customer Feedback</h2>
      <div className="space-y-4">
        {feedbackData.map((feedback) => (
          <div key={feedback.name} className="bg-gray-700 p-4 mb-3 rounded-lg">
            <div className="flex mb-3 items-center">
              <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <h3 className="text-white font-medium">{feedback.name}</h3>
                <div className="flex items-center text-yellow-400">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <FaStar />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-2">{feedback.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
