import Cover from "../../assets/Cover.png";

export function Header() {
  return (
    <header
      className="h-64 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Cover})` }}
    ></header>
  );
}
