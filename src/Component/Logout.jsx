import React from "react";
import { useAuth } from "./context/AuthProvider.jsx";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user"); 
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    } 
  };
  return (
    <div className="text-center">
      <button
       variant="primary"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
