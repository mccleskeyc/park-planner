export const getPlans = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/plans")
            .then(resp => resp.json())
            .then(plans => dispatch({type: "SET_PLANS", plans}))
    }
}

export const addPlan = (plan, history) => {
    return dispatch => {
      fetch('http://localhost:3001/plans', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ plan })
      })
        .then(resp => resp.json())
        .then(plan => {
          dispatch({ type: "ADD_PLAN", plan })
          history.push("/index")
        })
    }
  }