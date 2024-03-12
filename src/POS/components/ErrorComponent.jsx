import React from 'react';

export const ErrorComponent = ({ errorMessage }) => {
  
  return (
    <div className="bg-danger rounded-1 text-light text-center mt-5">
      Error: {errorMessage}
    </div>
  );
};
