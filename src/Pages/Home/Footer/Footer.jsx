const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-10 mt-14">
        <aside>
          <img
            className="w-12 md:w-16"
            src="https://i.ibb.co/47775t6/360-F-274422814-sv23a-GOAILKKk8-Zc-Mg-LKv-HQBTEs-Wh7-WP-removebg-preview-1.png"
            alt=""
          />
          <p>
            <h1 className="text-3xl font-semibold"> Bloodonors Ltd.</h1>

            <p className="text-xl font-normal">
              {' '}
              Providing reliable tech since 2016
            </p>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xl font-bold">Services</h6>
          <a className="link link-hover">Blood Collection</a>
          <a className="link link-hover">Donor Recruitment and Retention</a>
          <a className="link link-hover">Donor Screening and Education</a>
          <a className="link link-hover">Special Programs and Services</a>
          <a className="link link-hover">Research and Innovation</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p className="text-base">
            Copyright © ${new Date().getFullYear()} - All right reserved by
            Bloodonors Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
