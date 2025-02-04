import { Outlet } from "react-router-dom";
import { Header } from "../../components/_layout/Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
