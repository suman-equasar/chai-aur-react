import React, { use } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white p-4 text-3xl text-center">
      User: {userid}
    </div>
  );
};

export default User;
