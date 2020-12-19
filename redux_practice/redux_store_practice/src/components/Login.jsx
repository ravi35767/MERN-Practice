import React from "react";
import { connect } from 'react-redux';
import { setData } from "../store/action/action";

class Login extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Login component</h1>
                <button onClick={() => { this.props.set_data("Data is passing") }}>Set Data</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state
})

const mapDipatchToProps = (dispatch) => ({
    set_data: (data) => { dispatch(setData(data)) }
})
export default connect(mapStateToProps, mapDipatchToProps)(Login);