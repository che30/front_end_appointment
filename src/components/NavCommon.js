import React from 'react';
import './navCommon.css';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../helpers/localStorage';

const NavCommon = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="common__nav d-flex text-white">
        <div className="button__left">
          <button type="button" aria-label="text" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left" /></button>
          <button type="button" aria-label="text" onClick={() => navigate(1)}><i className="fa-solid fa-arrow-right" /></button>
        </div>
        <div className="button__right">
          <button type="button" aria-label="tex" onClick={() => clearLocalStorage()}><i className="fa-solid fa-arrow-right-from-bracket" /></button>
        </div>
      </div>
    </>
  );
};
export default NavCommon;
