import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import Error from "./Error";

const Contact = () => {
  const { all_solts, selectedDate, filters } = useFilterContext();
  if (selectedDate) {
    return (
      <Wrapper className="page-100">
        <div className="container">
          <div className="resturant-card">
            <div>
              <h4>{all_solts.attributes.name}</h4>
              <p>{all_solts.attributes.address_line_1}</p>
            </div>
            <div className="right">
              <p>
                Reservation for {filters.Date} at {selectedDate} for{" "}
                {filters.Pax}
              </p>
            </div>
          </div>
          <div cclassName="form-inline">
            <form>
              <div className="form-group">
                <div className="form-control">
                  <input
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="form-control">
                  <input
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>

              <div className="form-group">
                <div className="form-control">
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                  ></input>
                </div>
                <div className="form-control">
                  <input id="email" name="email" placeholder="Email"></input>
                </div>
              </div>
              <div className="form-group">
                <div className="form-control">
                  <input
                    id="spr"
                    name="spr"
                    placeholder="Special Request"
                  ></input>
                </div>
              </div>

              <div className="form-control">
                <div className="grid">
                  <label>
                    By continuing, you agree to Eat's <a>Term of service</a> and{" "}
                    <a>Privacy Policy</a>
                  </label>
                  <button type="submit" className="submitButton">
                    Complete Reservation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return <Error />;
  }
};
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  a {
    color: blue;
  }
  .container {
    position: relative;
    border-radius: var(--radius);
    border: 1px solid green;
    padding: 5%;
    margin: 0% 5%;
    border: 1px solid green;
    padding: 5%;
  }
  .resturant-card {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .right {
    margin-left: auto;
    margin-right: 0;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  .form-group {
    display: flex;
  }
  .form-control {
    width: 100%;
    padding: 1%;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
  .submitButton {
    background-color: #69d978;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    width: 50%;
    height: 50px;
    margin: 0;
    border: 0;
  }
`;

export default Contact;
