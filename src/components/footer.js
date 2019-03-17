import React from 'react';

import '../styles/footer.css';

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer className='container-fluid bg-4 text-center footer'>
                <p><h3 className ='mt-5'>Chat with Me</h3></p>
                <img src='https://image.flaticon.com/icons/svg/234/234149.svg' alt='Chat icon' className='icon'/>

                <form className='form-inline'>Get deals:
                 <input type='email' className='form-control' size='50' placeholder='Email Address' />
                    <button type='button' className='btn btn-danger'>Sign Up</button>
                </form>
                <a href='https://twitter.com/' target='_blank' class='share-btn twitter'>
                    <i className='fa fa-twitter'></i>
                </a>
                <a href='https://facebook.com/' target='_blank' className='share-btn facebook'>
                    <i className='fa fa-facebook'></i>
                </a>
                <a href='https://github.com/MielynA' target='_blank' className='share-btn github'>
                    <i className='fa fa-github'></i>
                </a>
                <a href='https://www.linkedin.com/in/mielyn-de-lara-acosta-4a5587116/' target='_blank' className='share-btn linkedin'>
                    <i className='fa fa-linkedin'></i>
                </a>
                <a href='https://www.instagram.com/mie_shiobe/' target='_blank' className='share-btn instagram'>
                    <i className='fa fa-instagram'></i>
                </a>
                
            </footer>








        </React.Fragment>


    );
}




export default Footer;
