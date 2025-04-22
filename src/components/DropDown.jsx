import React, { useState, useEffect, useRef } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DropDown = ({ title, listData }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-1 cursor-pointer font-semibold text-xl"
        onClick={handleClick}
      >
        {title} {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>

      {open && (
        <ul className="absolute top-12 mt-2 p-4 bg-tertiary shadow-md rounded border z-50 space-y-1 py-2">
          {listData.map((item) => (
            <li key={item} className="px-4 py-2 cursor-pointer">
              <Link to={`/${title}/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
