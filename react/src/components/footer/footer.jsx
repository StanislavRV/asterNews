import "./footer.scss";

export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__body">
          <div className="footer__copy">© Aster News, 2022</div>
          <div className="footer__menu menu-footer">
            <a href="" className="menu-footer__link">
              Privacy Policy
            </a>
            <a href="" className="menu-footer__link">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
