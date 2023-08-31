const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <nav
        style={{
          display: "flex",
          width: "15%",
          justifyContent: "space-around",
        }}
      >
        {!localStorage.getItem("token") ? (
          <a style={aTagStyle} href="/login">
            Login
          </a>
        ) : (
          <a
            style={aTagStyle}
            onClick={() => localStorage.clear()}
            href="/login"
          >
            Logout
          </a>
        )}
      </nav>
    </div>
  );
};
export default NavBar;

const aTagStyle = { margin: "2%", textDecoration: "none" };
