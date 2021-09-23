import { useEffect, useState } from "react";
import axios from 'axios'

const baseUrl = "http://localhost:8080"
const api = "/api"

export function getAllRestaurants() {
  return axios.get(`${baseUrl}` + `${api}` + `/restaurants`)
}
// used in searchbar, user types name and api returns list of restaurants
export function getRestaurantsByName(name) {
  return axios.get(`${baseUrl}` + `${api}` + `/restaurants/name/` + name)
}
// used in restaurant page
export function getRestaurantsById(id) {
  return axios.get(`${baseUrl}` + `${api}` + `/restaurants/` + id)
}
// used by admin to update restaurant
export function updateRestaurant(restaurant, Authorization) {
  return axios.put(`${baseUrl}` + `${api}` + `/update/restaurant`, restaurant, {
    headers: {Authorization}
  })
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
export function addReview(review, Authorization) {
  return axios.post(`${baseUrl}` + `${api}` + `/add/review`, review, {
    headers: { Authorization }
  })
}
// user signs up
export function createUser(user) {
  return axios.post(`${baseUrl}` + `${api}` + `/add/member`, user)
}
// user can be authenticated
export function authenticate(user) {
  return axios.post(`${baseUrl}/authenticate`, user)
}
export function verify() {
  const token = localStorage.getItem("token")
  if (token) {
    return JSON.parse(localStorage.getItem("token"))
  }
  return null
}


