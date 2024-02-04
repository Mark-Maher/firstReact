import img from "../images/avataaars.svg";
import {FaStar} from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className='home d-flex justify-content-center align-items-center flex-column text-white'>
        <img src={img} alt='avatar-img' width={250} className='mb-5' />
        <h2 className='fw-bold fs-1 '>STAR FRAMEWORK</h2>
        <span className='star position-relative'>
          <FaStar className='fs-5 ' />
        </span>
        <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}

export default Home;
