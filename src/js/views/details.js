import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext.js";

import "../../styles/home.css";

export const Details = () => {
    const { store, actions } = useContext(Context)
    const { people, planets } = store
    const params = useParams()

    return (
        <>
            {
                params.type == "person"
                &&
                people.map((item, index) => {
                    const { properties } = item
                    if (item.uid == params.uid) {
                        return (
                            <div className="container">
                                <div className="row text-center lead">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                                        className="col img-size-detail"
                                    />
                                    <div className="col">
                                        <h1>{properties.name}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                <div className="border-top border-danger text-danger row">
                                    <h5 className="col">
                                        <strong className="d-block">Name</strong>
                                        <p className="d-block">{properties.name}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Birth year</strong>
                                        <p className="d-block">{properties.birth_year}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Gender</strong>
                                        <p className="d-block">{properties.gender}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Height</strong>
                                        <p className="d-block">{properties.height}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Skin olor</strong>
                                        <p className="d-block">{properties.skin_color}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Eye color</strong>
                                        <p className="d-block">{properties.eye_color}</p>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {
                params.type == "planet"
                &&
                planets.map((item, index) => {
                    const { properties } = item
                    if (item.uid == params.uid) {
                        return (
                            <div key={index}>
                                <div className="row text-center lead">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
                                        className="col img-size-detail" />
                                    <div className="col">
                                        <h1 className="d-block">{properties.name}</h1>
                                        <p className="d-block">{item.description}</p>
                                    </div>
                                </div>

                                <div className="border-top border-danger text-danger row">
                                    <h5 className="col">
                                        <strong className="d-block">Name</strong>
                                        <p className="d-block">{properties.name}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Diameter</strong>
                                        <p className="d-block">{properties.diameter}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Rotation periodo</strong>
                                        <p className="d-block">{properties.rotation_periodo}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Population</strong>
                                        <p className="d-block">{properties.population}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Terrain</strong>
                                        <p className="d-block">{properties.terrain}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Climate</strong>
                                        <p className="d-block">{properties.climate}</p>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {
                params.type == "vehicles"
                &&
                vehicles.map((item, index) => {
                    const { properties } = item
                    if (item.uid == params.uid) {
                        return (
                            <>
                                <div className="row text-center lead">
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
                                        className="col img-size-detail" />
                                    <div className="col">
                                        <h1 className="d-block">{properties.name}</h1>
                                        <p className="d-block">{item.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="col">
                                        <strong className="d-block">Model</strong>
                                        <p className="d-block">{properties.model}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Vehicle class</strong>
                                        <p className="d-block">{properties.vehicle_class}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Manufacturer</strong>
                                        <p className="d-block">{properties.manufacturer}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Cost in credits</strong>
                                        <p className="d-block">{properties.cost_in_credits}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Passengers</strong>
                                        <p className="d-block">{properties.passengers}</p>
                                    </h5>
                                    <h5 className="col">
                                        <strong className="d-block">Max atmosphering speed</strong>
                                        <p className="d-block">{properties.max_atmosphering_speed}</p>
                                    </h5>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )

};
