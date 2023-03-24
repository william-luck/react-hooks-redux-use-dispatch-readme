const initialState = {
  items: [],
};

// Declare the function here and export it so it can used in other components, and all we do is import the function in the components that need them. 
// A banger, action creator
export function incrementCount() {
  return { type: 'count/increment' }
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "count/increment":
      console.log("Current state.items length %s", state.items.length);
      console.log("Updating state.items length to %s", state.items.length + 1);
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      };
    default:
      console.log("Initial state.items length %s", state.items.length);
      return state;
  }
}

export default counterReducer;
