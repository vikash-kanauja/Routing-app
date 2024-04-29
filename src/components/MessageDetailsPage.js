import React from "react";
import { useParams } from "react-router-dom";
import { message } from "../data";

const MessageDetailsPage = () => {
  const { id } = useParams();

  // Find the message with the matching id
  const messageData = message.find((message) => message.id === parseInt(id));

  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="container mx-auto py-12">
    <h1 className="text-red-600 text-3xl font-bold  mb-6 text-center">Message Details</h1>
      
      {messageData && (
        <div className="max-w-lg mx-auto text-center">
          <h2>Message from {messageData.sender}</h2>

          <p>{messageData.content}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default MessageDetailsPage;