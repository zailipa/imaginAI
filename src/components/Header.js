import { Link } from "react-router-dom";

export default function Header(){
    return (
      <div>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading"></div>

            <div className="masthead-heading text-uppercase">
              You imagine, we make it
            </div>

            <Link to="/signup">
              <a className="btn btn-secondary btn-xl text-uppercase">
                Get Started!
              </a>
            </Link>
            
          </div>
        </header>
      </div>
    );
};