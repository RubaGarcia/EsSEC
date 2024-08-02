import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <section className="dark:bg-gray-900 max-w-screen-2xl mx-auto m-10 p-5">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
