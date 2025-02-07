import { Outlet } from "react-router-dom";
import { Header } from "../../components/_layout/Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <div className="flex h-full items-center justify-center bg-background">
        <Outlet />
      </div>
    </>
  );
}
