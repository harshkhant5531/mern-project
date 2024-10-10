import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.logo}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/052/689/non_2x/t-shirt-pixel-perfect-gradient-linear-ui-icon-men-clothing-store-online-marketplace-buying-clothes-line-color-user-interface-symbol-modern-style-pictogram-isolated-outline-illustration-vector.jpg"
              alt="Logo"
              style={styles.logoImage}
            />
          </div>
          <div style={styles.social}>
            <Link to="#" style={styles.socialIcon}>
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" style={styles.socialIcon}>
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" style={styles.socialIcon}>
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
          <div style={styles.address}>
            <p>1234 Street Name</p>
            <p>City, AA 99999</p>
          </div>
          <div style={styles.contacts}>
            <p>Email: support@shop.com</p>
            <p>Phone: +1 (0) 000 0000 001</p>
            <p>Fax: +1 (0) 000 0000 002</p>
          </div>
        </div>

        <div style={styles.center}>
          <h4>OPENING HOURS</h4>
          <p>Monday - 11:00 - 18:00</p>
          <p>Tuesday - 11:00 - 18:00</p>
          <p>Wednesday - 11:00 - 18:00</p>
          <p>Thursday - 11:00 - 18:00</p>
          <p>Friday - 11:00 - 18:00</p>
          <p>Saturday - 11:00 - 18:00</p>
        </div>

        <div style={styles.right}>
          <h4>GET IN TOUCH</h4>
          <form>
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="email" placeholder="E-mail" style={styles.input} />
            <input type="phone" placeholder="Phone" style={styles.input} />
            <textarea placeholder="Message" style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#fff',
    padding: '40px 0',
    borderTop: '1px solid #e0e0e0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  left: {
    width: '30%', 
  },
  center: {
    width: '30%', 
  },
  right: {
    width: '30%', 
  },
  logoImage: {
    width: '120px',
    marginBottom: '10px',
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  socialIcon: {
    fontSize: '24px',
    color: '#6c63ff',
    textDecoration: 'none',
    border: '1px solid #ccc',
    borderRadius: '50%',
    padding: '8px',
    transition: 'background-color 0.3s',
  },
  address: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '20px',
  },
  contacts: {
    fontSize: '14px',
    color: '#333',
  },
  openingHours: {
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    height: '80px',
  },
  button: {
    backgroundColor: '#6c63ff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Footer;
