

import React from "react";
import { Gallery } from "./Constant"

const ImageGallery = () => {
  return (
    <>
      <div className="container ">
        <div className="row Gallery">
          <h2 class="title" className="text-center font-weight-bold" style={{fontWeight:700}}><span style={{color:"black"}}>OUR </span><span style={{ color: "#c90404" }}>GALLERY</span></h2>

          {/* <h2 className="text-center  p-2"></h2> */}
          {Gallery.map((item, index) => (
            <div key={index} className="col-sm-3 mb-4 col-6">
              {" "}
              {/* Each image gets its own column */}
              <div className="card">
                <img
                  src={item.img}
                  alt={`Gallery image ${index + 1}`}
                  className="card-img-top image-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
