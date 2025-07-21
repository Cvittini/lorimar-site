import './TopNav.css'; 

const TopNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Lorimar Fit</a>

          <div className="d-flex">
            <a className="nav-link" href="#contact">Contact</a>
            <a className="nav-link" href="#login">Login</a>
          </div>
        </div>
      </nav>

      <div className="event-banner bg-warning text-dark py-1 px-3">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          🏋️‍♀️ Join our next Bootcamp on August 10th! | 🥗 New Herbalife Meal Plans Available | 💪 Custom Workout Plans Now Open!
        </marquee>
      </div>
    </>
  );
};

export default TopNav;
