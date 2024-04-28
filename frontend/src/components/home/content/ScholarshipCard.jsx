import React from 'react';
import bcalogoSvg from '../../../img/bcalogo.svg';


const ScholarshipCard = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-top">
          <img src={bcalogoSvg} alt="BCA" className="card-logo" /> {/* You'll need to replace with the actual BCA logo */}
          <div className="card-header-badge-container">
            <span className="card-header-badge national">Nasional</span>
            <span className="card-header-badge education-level">Beasiswa S1</span>
          </div>
        </div>
        <h2 className="card-title">Beasiswa PPTI BCA</h2>
        <p className="card-subtitle">Lingkup Beasiswa: Nasional <br/> Tingkat Pendidikan: S1 <br/> Penyelenggara: PT. BCA</p>
        <button className="card-button">Daftar Sekarang  &gt;</button>
      </div>
    </div>
  );
};

export default ScholarshipCard;

