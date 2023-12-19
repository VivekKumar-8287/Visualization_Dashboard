import React from "react";

const Cards = ({ sector, region, country }) => {
  return (
   
      <div className="container">
      <div className="row">
        {/* Total Countries Card */}
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card">
            <div className="card-body" style={{display:'flex',justifyContent:"space-between"}}>
            <h5 className="card-title">Total Countries</h5>
              <h5 className="card-title">{country.length}</h5>
            </div>
          </div>
        </div>

        {/* Total Sectors Card */}
        <div className="col-md-4 col-sm-12  mb-4">
          <div className="card">
            <div className="card-body"  style={{display:'flex',justifyContent:"space-between"}}>
              <h5 className="card-title">Total Sectors</h5>
              <h5 className="card-title">{sector.length}</h5>
             
            </div>
          </div>
        </div>

        {/* Total Regions Card */}
        <div className="col-md-4 col-sm-12  mb-4">
          <div className="card">
            <div className="card-body"  style={{display:'flex',justifyContent:"space-between"}}>
              <h5 className="card-title">Total Regions</h5>
              <h5 className="card-title">{region.length}</h5>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
