const initialState = {
  cats: [],
  allCats: [],
  temperaments: [],
  detail: []
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATS':
      return {
        ...state,
        cats: action.payload, 
        allCats: action.payload
      }
    case 'GET_TEMPS': return {
      ...state,
      temperaments: action.payload
    }
    case 'FILTER_TEMPS':         //ver de ordenarlos alfabeticamente !
      const allCats = state.allCats;
      const filteredCats = allCats.filter((el) => el.temperament?.includes(action.payload)
      );      
        return {
        ...state,
        cats: filteredCats
        }
    case 'FILTER_CREATED':
      const createdFilter = action.payload === 'created' ? state.allCats.filter(el => el.createdInDb) : state.allCats.filter(el => !el.createdInDb)
      return {
        ...state,
        cats: action.payload === 'all' ? state.allCats : createdFilter
      }
    case 'ORDER_NAME':
      const orderName = action.payload === 'asc' ? state.cats.sort((a,b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
      }) : state.cats.sort((a,b) => {
        if(a.name < b.name) return 1;
        if(a.name > b.name) return -1;
        return 0;
      })
      return {
        ...state, 
        cats: orderName
      }
    case 'GET_NAME':
      return {
        ...state, 
        cats: action.payload
      }
    case 'POST_CAT':
      return {
        ...state
      }
      case 'GET_DETAIL':
        return {
          ...state, 
          detail: action.payload
        }

    default: return state;
  }
}


export default rootReducer;