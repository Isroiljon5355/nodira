import DarkmodeLocale from "@components/DarkmodeLocale/DarkmodeLocale";
import Navbar from "@components/Navbar/Navbar";
import navLink from "@components/Navbar/components/data";
import SignIn from "@components/SingIn/SingIn";
import { Footer } from "@components/footer/Footer";
import { ReactNode, useState } from "react";
interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  const [signIn, setSingIn] = useState(false);

  const handleSingIn = () => {
    setSingIn(!signIn);
  };
  return (
    <>
      {/* {!signIn ? <SignIn signIn={handleSingIn} /> : null} */}
      <Navbar signIn={handleSingIn} />
      <DarkmodeLocale />
      <main {...props}>{children}</main>
      <Footer links={navLink} />
    </>
  );
};
export default Layout;
