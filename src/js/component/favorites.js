import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Trash } from "react-bootstrap-icons"

export const Favorites = () => {

    const { store, actions } = useContext(Context)
    const { favorites } = store

    //console.log(favorites[1], favorites)
    return (
        <>
            <div className="d-flex dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites <span className="badge bg-secondary"> {favorites.length} </span>
                </button>
                <ul class="dropdown-menu">
                    {
                        favorites.length == 0
                            ?
                            <p className="text-center"> ( Empty )</p>
                            :
                            favorites.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            class="dropdown-item" href="#"
                                            onClick={() => { actions.deleteFavorite(item, index) }}
                                        >
                                            {favorites[index].properties.name}
                                            <Trash />
                                        </a>
                                    </li>
                                )

                            })
                    }
                </ul>
            </div>
        </>
    )
}