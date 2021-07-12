export const getPlans = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/plans")
            .then(resp => resp.json())
            .then(plans => dispatch({type: "SET_PLANS", plans}))
    }
}