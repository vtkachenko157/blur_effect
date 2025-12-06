import './header.css';


function Header() {
return (
<header>
<div>
<img src={require("../image/logo.png")} alt="Logo" className="logo-img" />
</div>
</header>
)
}

export default Header;