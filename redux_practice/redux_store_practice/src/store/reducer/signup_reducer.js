const INITIAL_STATE = {
    page_name:"Signup page"
}

const reducer = (state = INITIAL_STATE,action) => {
    console.log("Action In Signup---->>>", action);
    return state;
}

export default reducer;