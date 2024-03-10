import Footer from "./footer";
import Nav from "./nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Foode</title>
       
      </Head>
      <div className=" flex flex-col h-screen justify-between ">
        <Nav />
        <main className="bg-[#ffffff] ">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;