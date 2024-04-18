import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./context/UserAuthContext";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div >
        Hello Welcome {user && user.email} <br/>
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;