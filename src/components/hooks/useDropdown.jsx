/* eslint-disable import/prefer-default-export */
import { useState, useRef } from 'react';
import { useOutsideClick } from 'rooks';

export const useDropdown = () => {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);

  function handleOutsideClick() {
    setToggle(false);
  }

  useOutsideClick(ref, handleOutsideClick, toggle);

  return [
    ref,
    toggle,
    setToggle,
  ];
};
