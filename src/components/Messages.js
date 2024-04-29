import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "../data";
const Messages = () => {
  return (

    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
      <h1 className="text-red-600 text-3xl font-bold  mb-6 text-center">Messages</h1>
      <ul className="max-w-lg mx-auto p-3">
        {message.map((message) => (
          <li key={message.id} className="text-center font-bold bg-red-200 border p-3 text-xl cursor-pointer">
            <Link to={`/message/${message.id}`}>{message.sender}</Link>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
};

export default Messages;