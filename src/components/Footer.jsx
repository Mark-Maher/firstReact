import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa6";
import {TbWorld} from "react-icons/tb";

function Footer() {
  return (
    <div>
      {" "}
      <div className='backGround text-white py-5'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4'>
              <h2>Location</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className='col-md-4'>
              <h2>AROUND THE WEB</h2>
              <p>
                <div className='d-flex justify-content-center'>
                  {" "}
                  <span className='px-2 py-1  m-1 social'>
                    <FaFacebook />
                  </span>
                  <span className='px-2 py-1  m-1 social'>
                    <FaTwitter />
                  </span>
                  <span className='px-2 py-1  m-1 social'>
                    <FaLinkedin />
                  </span>
                  <span className='px-2 py-1  m-1 social'>
                    <TbWorld />
                  </span>
                </div>
              </p>
            </div>
            <div className='col-md-4'>
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white text-center  py-3 footerLast'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}

export default Footer;
