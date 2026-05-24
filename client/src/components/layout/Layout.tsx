import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-30 text-center text-muted">Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
