import {FaStar} from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className='py-5'>
      <div>
        <div className=' d-flex justify-content-center align-items-center flex-column text-white mt-5'>
          <h2 className='fw-bold fs-1 port'>CONTACT SECTION</h2>
          <span className='star position-relative port mb-1'>
            <FaStar className='fs-5 port' />
          </span>
        </div>
        <div>
          <div className='container my-5 w-50'>
            {" "}
            <FloatingLabel
              controlId='floatingInput'
              label='UserName'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='name@example.com' />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='UserAge'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='name@example.com' />
            </FloatingLabel>{" "}
            <FloatingLabel
              controlId='floatingInput'
              label='UserEmail'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='name@example.com' />
            </FloatingLabel>{" "}
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control type='password' placeholder='Password' />
            </FloatingLabel>
            <button className='btn btn-success my-3 '>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
