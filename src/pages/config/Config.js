import React, { useEffect, useState } from "react";
import About from "../../components/about/About";
import Aside from "../../components/aside/Aside";
import Navbar from "../../components/navbar/Navbar";
import Settings from "../../components/settings/Settings";
import Social from "../../components/social/Social";
import Support from "../../components/support/Support";
import "./Config.css";
const Config = () => {
  const [content, setContent] = useState(<Settings />);
  const [show, setShow] = useState("config");

  useEffect(() => {
    changeContent()
  }, [show]);

  function changeContent() {
    switch (show) {
      case "settings":
        setContent(<Settings />);
        break;
      case "support":
        setContent(<Support/>);
        break;
      case "social":
        setContent(<Social/>);
        break;
      case "about":
        setContent(<About/>);
        break;

      default:
        setContent(<Settings />);
        break;
    }
  }

  return (
    <div className="config">
      <Navbar />
      <Aside switcher={setShow} />
      <main>{content}</main>
    </div>
  );
};

export default Config;
