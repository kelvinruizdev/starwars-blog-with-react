import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";

import "../../styles/home.css";
import { CardItem } from "../component/cardItem";

export const Home = () => {
	const { store, actions } = useContext(Context)

	const { people, vehicles, planets } = store

	//console.log(people)

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="d-flex justify-content-between overflow-auto">
				{
					people.map((item, index) => {
						return (
							<div className="w-100">
								< CardItem className="" key={index} item={item} type={"person"} />
							</div>

						)
					})
				}

			</div>

			<h1 className="text-danger">Planets</h1>
			<div className="d-flex justify-content-between overflow-auto">
				{
					planets.map((item, index) => {
						//console.log(item)
						return (
							<div className="w-100">
								< CardItem className="" key={index} item={item} type={"planet"} />
							</div>
						)
					})
				}
			</div>
			{/*
			<h1 className="text-danger">Vehicles</h1>
			<div className="d-flex justify-content-between overflow-auto">
				{
					vehicles.map((item, index) => {
						//console.log(item)
						return (
							<div className="w-100">
								< CardItem className="" key={index} item={item} type={"vehicle"}/>
							</div>
						)
					})
				}
			</div>*/}
		</div >
	)

};
