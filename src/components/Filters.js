import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      {/*search starts*/}
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/*search ends*/}

          {/*category starts*/}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((cate, i) => {
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={updateFilters}
                    name="category"
                    className={category === cate ? "active" : ""}
                  >
                    {cate}
                  </button>
                );
              })}
            </div>
            {/* <select name="category" id="" onChange={()=>{}}>
          {categories.map((category,i)=> {
              return <option value={category} key={i}>{category}</option>
          })}
        </select> */}
          </div>
          {/*category ends*/}

          {/*companies starts*/}
          <div className="form-control">
            <h5>Company</h5>
            <select
              name="company"
              id=""
              value={company}
              onChange={updateFilters}
            >
              {companies.map((comp, i) => {
                return (
                  <option value={comp} key={i}>
                    {comp}
                  </option>
                );
              })}
            </select>
          </div>
          {/*companies ends*/}

          {/*colors starts*/}
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((colo, i) => {
                if (colo === "all") {
                  return (
                    <button
                      name="color"
                      data-color={colo}
                      className={color === "all" ? "all-btn active" : "all-btn"}
                      onClick={updateFilters}
                      key={i}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    name="color"
                    data-color={colo}
                    style={{ background: colo }}
                    className={
                      color === colo ? "color-btn active" : "color-btn"
                    }
                    onClick={updateFilters}
                    key={i}
                  >
                    {" "}
                    {color === colo ? <FaCheck /> : ""}{" "}
                  </button>
                );
              })}
            </div>
          </div>
          {/*colors ends*/}

          {/*price starts*/}
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/*price ends*/}

          {/*Shipping starts*/}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/*Shipping ends*/}
        </form>
        {/*clear filter starts*/}
        <button className="clear-btn" type="button" onClick={clearFilters}>
          Clear filter
        </button>
        {/*clear filter ends*/}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
