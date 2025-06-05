import Container from "react-bootstrap/Container";
import { Nav, Form, FormControl,  } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useEffect,  } from "react";
import { useDispatch, } from "react-redux";
import { logout } from "../../store/features/user/userSlice";
import useNotes from "../../customHooks/useNotes";
import { baseURL } from "../../store/api";
export default function Header({ setSearch }) {
  
  const {userInfo} = useNotes()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!userInfo?.name) {
      navigate("/");
    }
  }, [userInfo]);
  const profileHandle = (e)=>{
    e.preventDefault();
    navigate("/profile")
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-white" to="/">
            Note Zipper
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          
           <Nav>
            {userInfo?.name ? (
              <>
                <Link className="text-white" to={"/mynotes"}>My Notes</Link>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item onClick={e=>profileHandle(e)}>
                     <img
                      alt=""
                      src={`${baseURL}${userInfo?.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> 
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Link className="text-white" to={"/login"}>Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
