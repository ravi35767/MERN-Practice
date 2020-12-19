
const setData = (data) => {
    return (dispatch)=>{
        console.log("Hello i am set data function");
        dispatch({ type:"SETDATA", myData: data })
    }
}

export {
    setData,
}