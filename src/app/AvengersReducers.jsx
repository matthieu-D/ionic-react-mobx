export const INITIAL_STATE = {
    avengersSerieList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_AVENGERS_SERIE":
        return {
          avengersSerieList: [...state.avengersSerieList, action.payload]
        };
        
    default:
      return state
    };
}