import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);

        emailjs.sendForm(import.meta.env.VITE_Service_ID, import.meta.env.VITE_Template_ID, form.current, import.meta.env.VITE_User_ID)
            .then((result) => {
                console.log(result.text);


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message has been sent to Abrar',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div name="cnt" className='text-center mx-auto h-full pb-24'>
            <h2 className='font-bold text-2xl lg:text-5xl '>Contact Me</h2>
            <div className='mt-5 lg:mt-10'>
                    <form ref={form} onSubmit={sendEmail} className='mt-10 lg:mt-16 mx-16 lg:mx-52 text-black'>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text text-white text-2xl font-bold">Your Name</span>
                        </label>
                        <input type="text" name='from_name' placeholder="Name" className="input input-bordered text-xl" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-white mt-5 text-2xl font-bold">Your Email</span>
                        </label>
                        <input type="text" name='user_email' placeholder="email" className="input input-bordered text-xl" />
                     
                    </div>
                    <div className="form-control">
                        <label className="label mt-5">
                            <span className="label-text text-white text-2xl font-bold">Message</span>
                        </label>
                        <textarea name="message" rows="4" cols="100" className='text-xl' placeholder="Message" />
                        
                      
                    </div>
                    <div className="form-control mt-6 w-1/2 ">
                    <input className='btn btn-warning lg:text-2xl font-bold' type="submit" value="Send" />
                    </div>
                    </form>
            </div>
      
            

        </div >
    );
};

export default Contact;