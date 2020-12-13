import React, { useEffect } from 'react';
import { object, func } from 'prop-types';

const DetectClickOutside = ({ targetRef, clickOutside, children }) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        clickOutside();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [targetRef, clickOutside]);

  return <>{children}</>;
};

DetectClickOutside.propTypes = {
  children: object.isRequired,
  clickOutside: func.isRequired,
  targetRef: object.isRequired,
};
export default DetectClickOutside;