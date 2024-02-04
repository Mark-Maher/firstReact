import {FaStar} from "react-icons/fa";
import img1 from "../images/poert1.png";
import img2 from "../images/port2.png";
import img3 from "../images/port3.png";

function Portfolio() {
  return (
    <div>
      <div>
        <div className=' d-flex justify-content-center align-items-center flex-column text-white mt-5'>
          <h2 className='fw-bold fs-1 port'>PORTFOLIO COMPONENT</h2>
          <span className='star position-relative port mb-1'>
            <FaStar className='fs-5 port' />
          </span>
          <div className='container'>
            <div className='row mt-1 mb-5 g-5'>
              <div className='col-md-4'>
                <img src={img1} alt='' className='w-100 rounded-2' />
              </div>
              <div className='col-md-4'>
                <img src={img2} alt='' className='w-100 rounded-2' />
              </div>
              <div className='col-md-4'>
                <img src={img3} alt='' className='w-100 rounded-2' />
              </div>{" "}
              <div className='col-md-4'>
                <img src={img1} alt='' className='w-100 rounded-2' />
              </div>{" "}
              <div className='col-md-4'>
                <img src={img2} alt='' className='w-100 rounded-2' />
              </div>{" "}
              <div className='col-md-4'>
                <img src={img3} alt='' className='w-100 rounded-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
