import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats, sortName } from "../actions";
import { Link } from "react-router-dom";
import Cat from "./Cat";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCats = useSelector((state) => state.cats);

  const [page, setPage] = useState(1);
  const [catsPage, setCatsPage] = useState(8);
  const lastCat = page * catsPage;
  const firstCat = lastCat - catsPage;
  const currentCats = allCats.slice(firstCat, lastCat);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };
  const [ orden, setOrden] = useState("");

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  function handleReset(e) {
    e.preventDefault();
    dispatch(getCats());
  }

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(sortName(e.target.value));
    setPage(1);
    setOrden(`Sorted ${e.target.value}`);
  }


  return (
    <div className={styles.home}>

      <div className={styles.header}>
      <div className={styles.container}>

        <div className={styles.btnmenu}>
          <label htmlFor="btn-menu" className="icon-menu" ></label>
        </div>

          <div className={styles.logo}>
          <h1>TheCatMuseum</h1>
          <p className={styles.dami}>by Dami Sarmiento</p>
          </div>
        <nav>
        <div className={styles.search}>
          <SearchBar setPage={setPage}/>
        </div>
        </nav>

      </div> {/* cierra container */}
      </div> {/* cierra header */}
      
      <div className={styles.capa}></div>
        
        <input type="checkbox" id="btn-menu" className={styles.inputmenu} /> 
        <div className={styles["container-menu"]}>
          <div className={styles["cont-menu"]}>  
            <nav>
          {/* filters */}
            <Filters />         
          {/* sort by name*/}
          <select className={styles.nameOrder}
            onChange={(e) => handleOrderName(e)}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          {/* create */}
          <Link to="/cat">
            <button className={styles.createButton}>Create cat</button>
          </Link>
          {/* refresh */}
          <div>
          <button className={styles.refreshButton}
            onClick={(e) => { handleReset(e) }} >Refresh
          </button>
          </div>
          {/* back */}
          <div>
          <Link to="/">
          <button className={styles.backBtn}>Back</button>
        </Link>
        </div>
          </nav>

          <label htmlFor="btn-menu" className={styles["icon-x"]}>x</label>
          
          </div> 
        </div>

      {/* cat */}
      <div className={styles.mainContainer}>
        {currentCats ? (
          currentCats.map((el) => {
            return (
              <div key={el.id} className={styles.catContainer}>
                <Link className={styles.a} to={"/cats/" + el.id}>
                  <Cat
                    key={el.id}
                    name={el.name}
                    image={el.image}

                  />
                </Link>
              </div>
            );
          })
        ) : (
          <p className={styles.loading}>loading...</p>
        )}
      </div>
      
      {/* Paginated*/}
      <div className={styles.pages}>
        <Paginated
          catsPage={catsPage}
          allCats={allCats.length}
          paginated={paginated}
        />
      </div>
    </div>
  );
}
