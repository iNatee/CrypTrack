import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
function Footer() {
	 return(
	     <div className='pg-footer'>
		 <div className='socials'>
		     <div className='social'>
			 <SocialIcon url="https://twitter.com" target="_blank" />
		     </div>
		     <div className='social'>
		     <SocialIcon url="https://facebook.com" target="_blank" /></div>
		     <div className='social'>
		     <SocialIcon url='https://instagram.com' target="_blank" /></div>
		     <div className='social'>
		     <SocialIcon url='https://reddit.com' target='_blank'/></div>
		     <div className='social'>
		     <SocialIcon url='https://github.com/iNatee' target='_blank'/></div>
		     <div className='social'>
		     <SocialIcon url='https://rss.com' target='_blank'/></div>
		     
		     
		     </div>
	     </div>
	 
	 )
}

export default Footer
