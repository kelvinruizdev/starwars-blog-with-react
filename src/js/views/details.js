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
                                <div>
                                    <img />
                                    <div>
                                        <h1>{properties.name}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                <div className="border-top border-danger text-danger">
                                    <h5 className="d-block"><strong>Name</strong> {properties.name}</h5>
                                    <h5><strong>Birth year</strong> {properties.birth_year}</h5>
                                    <h5><strong>Gender</strong> {properties.gender}</h5>
                                    <h5><strong>Height</strong> {properties.height}</h5>
                                    <h5><strong>Skin color</strong> {properties.skin_color}</h5>
                                    <h5><strong>Eye color</strong> {properties.eye_color}</h5>
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
                            <>
                                <div>
                                    <img />
                                    <div>
                                        <h1>{properties.name}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <h5><strong>Name</strong> {properties.name}</h5>
                                    <h5><strong>Diameter</strong> {properties.diameter}</h5>
                                    <h5><strong>Rotation periodo</strong> {properties.rotation_period}</h5>
                                    <h5><strong>Population</strong> {properties.population}</h5>
                                    <h5><strong>Terrain</strong> {properties.terrain}</h5>
                                    <h5><strong>Climate</strong> {properties.climate}</h5>
                                </div>
                            </>
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
                                <div>
                                    <img />
                                    <div>
                                        <h1>{properties.name}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <h5><strong>Model</strong> {properties.model}</h5>
                                    <h5><strong>Vehicle class</strong> {properties.vehicle_class}</h5>
                                    <h5><strong>Manufacturer</strong> {properties.manufacturer}</h5>
                                    <h5><strong>Cost in credits</strong> {properties.cost_in_credits}</h5>
                                    <h5><strong>Passengers</strong> {properties.passengers}</h5>
                                    <h5><strong>Max atmosphering speed</strong> {properties.max_atmosphering_speed}</h5>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )

};
