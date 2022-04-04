import { useResturantsContext } from "../context/resturants_context";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Resturant from "./Resturant";

const FeaturedResturants = () => {
  const { loading, error, resturant } = useResturantsContext();
  if (loading) return <Loading />;
  else if (error) return <Error />;
  else {
    return (
      <Wrapper className="page-100">
        <div className="section">
          <div className="section-center featured">
            <Resturant {...resturant} />
          </div>
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedResturants;
