import styled from "styled-components";
import Filters from "./Filters";
import Sort from "./Sort";
import Loading from "./Loading";

const Resturant = ({ attributes, id }) => {
  if (attributes) {
    return (
      <Wrapper>
        <div className="conatiner">
          <div className="resturant-card">
            <div>
              <h4>{attributes.name}</h4>
              <p>{attributes.address_line_1}</p>
            </div>
            <div>
              <Filters></Filters>
              <Sort></Sort>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return <Loading />;
  }
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  .resturant-card {
    border: 1px solid green;
    padding: 5%;
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
`;
export default Resturant;
