const initialState = {
    plans: [],
    loading: true
}
const plansReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_PLANS":
            return {
                ...state,
                loading: false,
                plans: action.plans
            }
        default:
            return state;
    }
}

export default plansReducer