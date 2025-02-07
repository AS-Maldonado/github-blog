import Cover from "../../assets/Cover.png";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <header
      className="flex h-80 w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Cover})` }}
    >
      <img src={Logo} alt="Github Blog Logo" />
    </header>
  );
}
