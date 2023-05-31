import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { Heart } from "react-bootstrap-icons"
import "../../styles/index.css"


export const CardItem = ({ item, type }) => {

    const { actions } = useContext(Context)
    // const { people, planets, vehicles } = store

    let [typeOf, setTypeOf] = useState("")

    const { properties } = item
    const { uid } = item

    function handleAddFavorite(item) {

    }

    return (
        <>
            {
                type == "person"
                &&
                <div className="card card-size lead" >

                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                        className="card-img-top img-size-card"
                        alt="" />
                    <div className="card-body">
                        <h4 className="card-title mb-4"><strong> {properties.name} </strong></h4>
                        <p className="card-text">
                            <strong>Gender:</strong> {properties.gender}
                        </p>
                        <p className="card-text">
                            <strong>Hair color:</strong> {properties.hair_color}
                        </p>
                        <p className="card-text">
                            <strong>Eye color:</strong> {properties.eye_color}
                        </p>
                        <div className="d-flex justify-content-between">
                            <Link to={`detail/${type}/${uid}`}>
                                < button className="btn btn-outline-primary">Lean more!</button>
                            </Link>
                            < button className="btn btn-outline-warning"
                                onClick={() => actions.addFavorite(item)}
                            ><Heart /></button>
                        </div>
                    </div>
                </div >
            }

            {
                type == "planet"
                &&
                <div className="card card-size lead" >

                    <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                        className="card-img-top img-size-card" alt="" />
                    <div className="card-body">
                        <h4 className="card-title mb-4"><strong> {properties.name} </strong></h4>
                        <p className="card-text">
                            <strong>Population:</strong> {properties.population}
                        </p>
                        <p className="card-text">
                            <strong>Terrain:</strong> {properties.terrain}
                        </p>
                        <div className="d-flex justify-content-between">
                            <Link to={`detail/${type}/${uid}`}>
                                < button className="btn btn-outline-primary">Lean more!</button>
                            </Link>
                            < button className="btn btn-outline-warning"
                                onClick={() => actions.addFavorite(item)}
                            >
                                <Heart />
                            </button>
                        </div>
                    </div>
                </div >
            }

            {
                type == "vehicle"
                &&
                <div className="card card-size lead" >

                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                        className="card-img-top img-size-card" alt="" />
                    <div className="card-body">
                        <h4 className="card-title mb-4"><strong> {properties.name} </strong></h4>
                        <p className="card-text">
                            <strong>Model:</strong> {properties.model}
                        </p>
                        <p className="card-text">
                            <strong>Manufacturer:</strong> {properties.manufacturer}
                        </p>
                        <div className="d-flex justify-content-between">
                            <Link to={`detail/${type}/${uid}`}>
                                < button className="btn btn-outline-primary">Lean more!</button>
                            </Link>
                            < button className="btn btn-outline-warning"
                                onClick={() => actions.addFavorite(item)}
                            >
                                <Heart />
                            </button>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}















