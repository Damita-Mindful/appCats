import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import styles from '../styles/Detail.module.css'


export default function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const myCat = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


  return (
    <div className={styles.bkg}>
      <div>
      {myCat.length > 0 ? (
        <div className={styles.container} >
          <img className={styles.image} src={myCat[0].image} 
          alt="img not found"  />
          <h1 className={styles.title} > {myCat[0].name} </h1>
          <p className={styles.text}>Description: <span className={styles.details}>{myCat[0].description}</span></p>
          <h4 className={styles.text} >
            Temperament: <span className={styles.details}>{!myCat[0].createdInDb ? myCat[0].temperament
            :
            myCat[0].temperaments.map((el) => el.name + ', ')}</span>
          </h4>
            <p className={styles.text}>Origin: <span className={styles.details}>{myCat[0].origin}</span></p>
            <p className={styles.text}>Weight: <span className={styles.details}>{myCat[0].weight} kg</span></p>
            <p className={styles.text}>Life Span: <span className={styles.details}>{myCat[0].life_span}</span></p>
            <p className={styles.text}>Adaptability: <span className={styles.details}>{myCat[0].adaptability}</span></p>
            <p className={styles.text}>Child Friendly: <span className={styles.details}>{myCat[0].child_friendly}</span></p>
            <p className={styles.text}>Dog Friendly: <span className={styles.details}>{myCat[0].dog_friendly}</span></p>
            <p className={styles.text}>Energy Level: <span className={styles.details}>{myCat[0].energy_level}</span></p>
            <p className={styles.text}>Wiki: <a href={myCat[0].wikipedia_url} target="_blank">{myCat[0].wikipedia_url}</a></p>
        </div>
      ) : ( <p className={styles.loading}>loading...</p>
      )}
      <div className={styles.back}>
      <Link to="/home">
        <button className={styles.backBtn}>Home
        </button>
      </Link>
      </div>
      </div>
    </div>
  );
}
