const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <nav
        style={{
          display: "flex",
          width: "25%",
          justifyContent: "space-around",
        }}
      >
        <a style={aTagStyle} href="/login">
          Login
        </a>
        <a style={aTagStyle} href="/create-account">
          Sign Up
        </a>
      </nav>
    </div>
  );
};
export default NavBar;

const aTagStyle = { margin: "2%", textDecoration: "none" };
