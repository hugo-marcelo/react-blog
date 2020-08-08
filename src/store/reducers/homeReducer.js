export function homeReducer(state = [], action) {
  if (action.type === "FETCH_PUBLICATIONS") {
    return { ...state, fetchPublications: action.data };
  }

  if (action.type === "FETCH_AUTHOR") {
    return { ...state, fetchAuthor: action.data };
  }

  if (action.type === "CURRENT_PUBLICATION") {
    return { ...state, data: action.data };
  }

  return state;
}
