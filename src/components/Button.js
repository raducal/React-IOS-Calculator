import React from "react";

export default function Button({ cln, vals, values, handleBtnClick }) {
  return (
    <div className={cln}>
      <button placeholder="0" value={values.one} onClick={handleBtnClick}>
        {vals.one}
      </button>
      <button value={values.two} onClick={handleBtnClick}>
        {vals.two}
      </button>
      {Object.keys(vals).length > 3 ? (
        <>
          <button value={values.three} onClick={handleBtnClick}>
            {vals.three}
          </button>
          <button
            className="orangeBtn"
            value={values.four}
            onClick={handleBtnClick}
          >
            {vals.four}
          </button>
        </>
      ) : (
        <button
          className="orangeBtn"
          value={values.three}
          onClick={handleBtnClick}
        >
          {vals.three}
        </button>
      )}
    </div>
  );
}
