import "./Account.css";

function Account() {
  return (
    <>
      <h4 className="header">Account Settings</h4>

      <form>
        <div className="form-name">
          <label htmlFor="text">Full Name</label>

          <input
            id="text"
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            required
            className="input-name"
          />
        </div>

        <div className="form-email">
          <label htmlFor="text">Email</label>

          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            required
            className="input-name"
          />
        </div>
        <div className="form-current">
          <label htmlFor="text">Current Password</label>

          <input
            id="pass"
            type="text"
            name="pass"
            placeholder="Enter your Old password"
            required
            className="input-name"
          />
        </div>

        <div className="form-new">
          <label htmlFor="text">New Password</label>

          <input
            id="text"
            type="text"
            name="name"
            placeholder="Enter your New password"
            required
            className="input-name"
          />
        </div>

        <div className="form-confirm">
          <label htmlFor="text">Confirm Password</label>

          <input
            id="text"
            type="text"
            name="name"
            placeholder="Confirm Password"
            required
            className="input-name"
          />
        </div>
      </form>

      <button className="btn">Save Changes</button>
    </>
  );
}

export default Account;
