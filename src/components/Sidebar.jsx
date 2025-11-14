import { useEffect, useState } from "react";
import Cart from "./Cart";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedState = sessionStorage.getItem("sidebarOpen");
    if (savedState === "true") {
      setIsOpen(true);
    }
  }, []);


  useEffect(() => {
    sessionStorage.setItem("sidebarOpen", isOpen);
  }, [isOpen]);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        🛒
      </button>

      <aside id="sidebar" className={isOpen ? "open" : ""}>
        <Cart setIsOpen={setIsOpen}/>
      </aside>
    </>
  );
};

export default Sidebar;
