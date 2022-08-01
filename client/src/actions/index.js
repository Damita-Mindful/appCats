import axios from 'axios';


export function getCats() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/cats")
      .then((response) => {
        dispatch({
          type: 'GET_CATS',
          payload: response.data,
        })
      })
  }
}

export function getTemps() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/temperaments")
      .then((response) => {
        dispatch({
          type: 'GET_TEMPS',
          payload: response.data
        })
      })
  }
}

export function getNameCats(name) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/cats?name=${name}`)
    return dispatch({
      type: 'GET_NAME',
      payload: json.data
    })
  }
}

export function filterByTemp(payload) {
  return {
    type: 'FILTER_TEMPS',
    payload
  }
}

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}

export function sortName(payload) {
  return {
    type: 'ORDER_NAME',
    payload
  }
}

export function postCat(payload) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/cat", payload)
    return dispatch({
      type: 'POST_CAT',
      payload: response.data
    })
  }
}

export function getDetail(id) {
  return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/cats/" + id)
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data
      })
  }
}