import Logo from "./Logo";

export default function Header({ children }: any) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
