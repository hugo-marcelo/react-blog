export function loadingReducer(state, action) {
  if (action.type === "LOADING") {
    switch (action.data) {
      case "SHOW":
        return { ...state, display: true };
      case "HIDE":
        return { ...state, display: false };
      default:
        return { ...state, display: false };
    }
  }
  return { ...state };
}
