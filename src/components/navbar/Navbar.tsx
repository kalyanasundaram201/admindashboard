import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logoimg" />
        <span>Admin Dashboard</span>
      </div>

      <div className="icons">
        <img src="/search.svg" className="icon" alt="" />
        <img src="/app.svg" className="icon" alt="" />
        <img src="/expand.svg" className="icon" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}
