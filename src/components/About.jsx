import {FaStar} from "react-icons/fa";

function About() {
  return (
    <div>
      <div className='home d-flex justify-content-center align-items-center flex-column text-white'>
        <h2 className='fw-bold fs-1 '>ABOUT COMPONENT</h2>
        <span className='star position-relative'>
          <FaStar className='fs-5 ' />
        </span>
        <div className='container mt-4 text-start mt-3'>
          <div className='row justify-content-center g-5'>
            <div className='col-md-5 '>
              <p className='aboutContent'>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className='col-md-5 '>
              <p className='aboutContent'>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
