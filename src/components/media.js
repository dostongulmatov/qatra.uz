import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


// github icon
function TubeIcon() {
  return (
    <YouTubeIcon style={{ fontSize: 70, padding: 20}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </YouTubeIcon>
  );
}

// email icon
function EmailIcon() {
  return (
    <MailOutlineIcon style={{ fontSize: 70, padding: 20}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </MailOutlineIcon>
  );
}

// Telegram icon
function TeleIcon() {
  return (
    <TelegramIcon style={{ fontSize: 70, padding: 20}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </TelegramIcon>
  );
}

// Instagram icon
function InstaIcon() {
  return (
    <InstagramIcon style={{ fontSize: 70, padding: 20}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </InstagramIcon>
  );
}

// Twitter icon
function FaceIcon() {
  return (
    <FacebookIcon  style={{ fontSize: 70, padding: 20}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </FacebookIcon>
  );
}
const Media = () => {
  return (
    <div className="social-icons-container">
      <h3>Follow us in Social-Media</h3>
      <a href="/" className="social-icons-link"><TubeIcon className="social-icons" /></a>
      <a href="/" className="social-icons-link"><EmailIcon className="social-icons" /></a>
      <a href="/" className="social-icons-link"><TeleIcon className="social-icons" /></a>
      <a href="/" className="social-icons-link"><InstaIcon className="social-icons" /></a>
      <a href="/" className="social-icons-link"><FaceIcon className="social-icons" /></a>
    </div>
  )
}

export default Media

// export { GitIcon, EmailIcon, TeleIcon, InstaIcon, TwitIcon, FaceIcon };
