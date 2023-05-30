import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { Heart } from "react-bootstrap-icons"
import "../../styles/index.css"


export const CardItem = ({ key, item, type }) => {

    const { actions } = useContext(Context)
    // const { people, planets, vehicles } = store

    let [typeOf, setTypeOf] = useState("")

    const { properties } = item
    const { uid } = item

    return (
        <>
            {
                type == "person"
                &&
                <div className="card card-size lead" >

                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title mb-4"><strong> {properties.name} </strong></h4>
                        <p className="card-text">
                            <strong>Gender color:</strong> {properties.gender}
                        </p>
                        <p className="card-text">
                            <strong>Hair color:</strong> {properties.hair_color}
                        </p>
                        <p className="card-text">
                            <strong>Eye color:</strong> {properties.eye_color}
                        </p>
                        <Link to={`detail/${type}/${uid}`}>
                            < button className="btn btn-outline-primary">Lean more!</button>
                        </Link>
                        < button
                            className="btn btn-outline-warning"
                            onClick={() => { actions.addFavorite(item) }}
                        >
                            <Heart />
                        </button>
                    </div>
                </div >
            }

            {
                type == "planet"
                &&
                <div className="card card-size lead" >

                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title mb-4"><strong> {properties.name} </strong></h4>
                        <p className="card-text">
                            <strong>Population:</strong> {properties.population}
                        </p>
                        <p className="card-text">
                            <strong>Terrain:</strong> {properties.terrain}
                        </p>
                        <Link to={`detail/${type}/${uid}`}>
                            < button className="btn btn-outline-primary">Lean more!</button>
                        </Link>
                        < button className="btn btn-outline-warning"><Heart /></button>
                    </div>
                </div >
            }
        </>
    )
}

/*
"height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "created": "2023-05-26T00:47:31.994Z",
      "edited": "2023-05-26T00:47:31.994Z",
      "name": "Luke Skywalker",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "url": "https://www.swapi.tech/api/people/1"*/













