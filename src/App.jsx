import { useState, useEffect } from "react";
import Start from "./start/start";
import DesktopPlaceholder from "./DesktopPlaceholder";


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <Start /> : <DesktopPlaceholder />}
    </>
  );
}

export default App;
