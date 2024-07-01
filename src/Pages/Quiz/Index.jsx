import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <div className="neon center">
      <div className="quiz">
        <div className="neon questions">
          <h3>Choose your theme:</h3>
          <div className="question_row">
            <Link to={"/mixed"} className='neon alt list_row'>Mixed</Link>
            <Link to={"/devops"} className='neon alt list_row'>DevOps</Link>
          </div>
          <div className="question_row">
            <Link to={"/linux"} className='neon alt list_row'>Linux</Link>
            <Link to={"/cloud"} className='neon alt list_row'>Cloud</Link>
          </div>
          <div className="question_row">
            <Link to={"/networking"} className='neon alt list_row'>Network</Link>
            <Link to={"/programming"} className='neon alt list_row'>Programming</Link>
          </div>
          <div className="question_row">
            <Link to={"/menu"} className='neon alt list_row'>Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
