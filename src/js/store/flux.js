import { element } from "prop-types";
import { useContext } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			urlBase: "https://www.swapi.tech/api",

			people: /*JSON.parse(localStorage.getItem("people")) ||*/[],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],

			favorites: /*JSON.parse(localStorage.getItem("favorites")) ||*/[]
		},
		actions: {
			// Use getActions to call a function within a fuction

			getAllItems: () => {

				let store = getStore();
				const endpoints = ['people'/*, 'planets', 'vehicles'*/]

				endpoints.forEach(async (endpoint) => {
					const url = `${store.urlBase}/${endpoint}`;
					try {

						const response = await fetch(`${url}`)
						const data = await response.json()

						data.results.forEach(async (item) => {

							let responseItem = await fetch(`${url}/${item.uid}`)
							let dataItem = await responseItem.json()

							setStore({
								[endpoint]: [...store[endpoint], dataItem.result]
							})
						})
					} catch (error) {
						console.log(error)
					}
				})

			},

			addFavorite: (item) => {

				let store = getStore();
				const { favorites } = store

				setStore({
					favorites: [...favorites, item]
				})
			},

			deleteFavorite: (element) => {
				let store = getStore();
				const { favorites } = store

				const oneLessFavorite = favorites.filter(item => item.properties.name != element.properties.name)
				setStore({
					favorites: oneLessFavorite
				})
			}
		}
	};
};

export default getState;
