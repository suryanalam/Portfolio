import "./ContactBar.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
      <div className="contact_bar">
        <a href="https://www.linkedin.com/in/surya-nalam-2k" target="_blank" className="contact_bar_icon" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://github.com/suryanalam" target="_blank" className="contact_bar_icon" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.instagram.com/nalam__surya/" target="_blank" className="contact_bar_icon" rel="noreferrer"><InstagramIcon /></a>
        <a href="https://twitter.com/Nalam__Surya" target="_blank" className="contact_bar_icon" rel="noreferrer"><TwitterIcon /></a>
        <div className="contact_bar_line"></div>
      </div>
    </div>
  );
};

export default ContactBar;
