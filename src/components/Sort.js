import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
const Sort = () => {
  const { available_slots, selectDate } = useFilterContext();
  const history = useHistory();
  const selectDateinit = (e) => {
    selectDate(e);
    history.push(`/resturant`);
  };
  console.log(available_slots);
  if (available_slots.length === 0) {
    return <p></p>;
  } else {
    return (
      <Wrapper>
        <section>
          <article>
            <div className="title">
              <label>Available openings, Please select a time to reserve</label>
            </div>
          </article>
          <article>
            <div className="content">
              {available_slots.map((slot, i) =>
                slot.attributes.available ? (
                  <div
                    className="chip"
                    key={i}
                    onClick={() => {
                      selectDateinit(slot.attributes.label);
                    }}
                  >
                    {slot.attributes.label}
                  </div>
                ) : (
                  <div className="chip-gray" key={i}>
                    Unavailable
                  </div>
                )
              )}
            </div>
          </article>
        </section>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  .title {
    text-align: center;
  }
  padding: 5%;
  align-items: center;
  background-color: lightgray;
  margin-bottom: 2rem;
  .chip {
    display: inline-flex;
    flex-direction: row;
    margin: 1%;
    background-color: #69d978;
    border: none;
    color: white;
    cursor: default;
    height: 50px;
    width: 100%;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-color: #333333;
    font-family: "Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 4px;
    vertical-align: middle;
    text-decoration: none;
    cursor: pointer;
    justify-content: center;
  }
  .chip-gray {
    display: inline-flex;
    flex-direction: row;
    margin: 1%;
    background-color: gray;
    border: none;
    color: white;
    cursor: default;
    height: 50px;
    width: 100%;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-color: #333333;
    font-family: "Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 4px;
    vertical-align: middle;
    text-decoration: none;
    justify-content: center;
  }
  .content {
    display: flex;
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
