const Footer = () => {
  return (
    <div className="footer">
      <div className="text-3xl font-bold font-moonDance ml-8 first-letter:text-6xl">
        <p>
          Gym Bro!
        </p>
      </div>
      <div className="info">
        <h3>Customer Service</h3>
        <br />
        <ol>
          <li>
            <button href="#">Support</button>
          </li>
          <li>
            <button href="#">SiteMap</button>
          </li>
          <li>
            <button href="#">Queries</button>
          </li>
          <li>
            <button href="#">Email</button>
          </li>
          <li>
            <button href="#">Report Issues</button>
          </li>
        </ol>
        <p className="text-center relative top-10">Copyright &copy; Gym bro.</p>
      </div>
      <div className="contact">
        <p align="center">Contant Us</p>
        <ul>
          <li>
            <button href="#" className="fa fa-instagram"></button>
          </li>
          <li>
            <button href="#" className="fa fa-facebook"></button>
          </li>
          <li>
            <button href="#" className="fa fa-twitter"></button>
          </li>
        </ul>
        <p>
          Ph.no : XXXXXXXXX <br />
          Email:<button href="#">abc@gmail.com</button>
        </p>
      </div>
    </div>
  );
};

export default Footer;
