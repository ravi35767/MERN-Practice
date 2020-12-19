const INITIAL_STATE = {
    page_name: "Login Page",
}

const reducer = (state = INITIAL_STATE, action) => {
    console.log("Action In Login---->>>", action);
    switch(action.type){
        case "SETDATA":
            return (
                {
                    ...state,  
                    dummyData: action.myData // Setting data into state
                }
            )   
        default:
            return state;
    }
}

export default reducer;