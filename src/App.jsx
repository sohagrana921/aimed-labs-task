import styled, { createGlobalStyle, css } from "styled-components";
import { FaEyeSlash } from "react-icons/fa";
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
    width:100%
    
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    margin: 0;
    color: #555;
  }
  
`;

const sharedStyles = css`
  background-color: white;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 900px;
  padding-top: 120px;
  padding-left: 68px;
  padding-right: 68px;
  margin: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.2);
  label {
    font-weight: 700;
    color: 04072F;
  }
  h1 {
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    color: 04072F;
  }
  span {
    display: flex;
    justify-content: right;
    margin-top: -50px;
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    small {
      color: #f78719;
      font-size: 16px;
    }
  }
  button {
    display: block;
    background-color: #1575a7;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 56px;
    width: 538px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
  }
`;

const StyledFieldset = styled.div`
  margin-top: 40px;
`;
const StyledFieldLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledFieldRight = styled.div`
  p {
    small {
      color: #f78719;
      font-size: 16px;
    }
  }
`;
const MarkColor = styled.div`
  color: #f78719;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <div>
          <img src="../src/assets/Group 3608.png" alt="" />
        </div>
        <StyledFormWrapper>
          <StyledForm>
            <h1>Login</h1>
            <label htmlFor="name">Login ID</label>
            <StyledInput type="text" name="name" placeholder="Enter Login ID" />
            <label htmlFor="email">Password</label>
            <StyledInput
              type="email"
              name="email"
              placeholder="Enter Password"
            />
            <span>
              <FaEyeSlash></FaEyeSlash>
            </span>
            <StyledFieldset>
              <div>
                <StyledFieldLeft>
                  <p>
                    <input type="checkbox" value="female" name="gender" />
                    Remember Me
                  </p>
                  <MarkColor>
                    <p>Change Password</p>{" "}
                  </MarkColor>
                </StyledFieldLeft>
                <StyledFieldRight>
                  <p>
                    <input type="checkbox" value="female" name="gender" />
                    Agree to <small>Terms & Conditions</small>
                  </p>
                </StyledFieldRight>
              </div>
            </StyledFieldset>
            <StyledButton>
              <div>
                <button>Submit</button>

                <p>
                  Don’t have an account? <small>Register Here</small>
                </p>
              </div>
            </StyledButton>
          </StyledForm>
        </StyledFormWrapper>
      </Main>
    </>
  );
}

export default App;
