import { Link } from "react-router-dom";
import "./NavbarSignUp.css";

const SignUp = () => {
  return (
    <div className="NavbarSignUp">
      <div className="info">
        <p>Welcom to Raiden</p>
        <p>Create acc and explore raiden</p>
      </div>
      <div className="BtnGrp">
        <div className="childGrid">
          <button
            style={{
              backgroundColor: "cyan",
            }}
            className="Btn"
          >
            <Link
              to="buyerSignUp"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              Buyer
            </Link>
          </button>
        </div>
        <div className="childGrid">
          <button
            style={{
              backgroundColor: "cyan",
            }}
            className="Btn"
          >
            <Link
              to="/CreatorSignUpPersonalDetails"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Creator
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
