import { useEffect, useState } from "react";
import axios from 'axios'

const baseUrl = "https://localhost:8080"
const api = "/api"

// used in searchbar, user types name and api returns list of restaurants
export function getRestaurantsByName(name) {
  return axios.get(`${baseUrl}` + `${api}` + `/restaurants/name/` + name)
}
// used in restaurant page
export function getRestaurantsById(id) {
  return axios.get(`${baseUrl}` + `${api}` + `/restaurants/` + id)
}
// used by admin to update restaurant
export function updateRestaurant(restaurant) {
  return axios.put(`${baseUrl}` + `${api}` + `/update/restaurant`, restaurant)
}
// user page updates on call
export function getUserByUsername(username) {
  return axios.get(`${baseUrl}` + `${api}` + `/member/` + username)
}
// get most recent reviews
export function getReviews() {
  return axios.get(`${baseUrl}` + `${api}` + `/reviews`)
}
// user adds a review
export function addReview(review) {
  return axios.post(`${baseUrl}` + `${api}` + `/add/review`, review)
}
// user signs up
export function createUser(user) {
  return axios.post(`${baseUrl}` + `${api}` + `/add/member`, user)
}
// user can be authenticated
export function authenticate(user) {
  return axios.post(`${baseUrl}/authenticate`, user)
}


