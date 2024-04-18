
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home'
import { UserAuthContextProvider } from "./components/context/UserAuthContext";

function App() {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);

  return (
    <Container style={{ width: "1200px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Signup/>} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
