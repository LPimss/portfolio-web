import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black p-2 fixed bottom-0 left-0 w-full'>
      <ul className='text-white flex items-center justify-center'> 
        <li>
          <a href='https://www.linkedin.com/in/kelian-roulez-021333250/'><img className='size-10 bg-white' src="/img/linkedin.png" alt="LinkedIn"></img></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
