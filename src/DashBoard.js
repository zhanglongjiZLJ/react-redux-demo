import React,{ Component} from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { logout } from './auth.redux';
function Erban() {
    return <h2>二班</h2>
}
function Sanban() {
    return <h2>三班</h2>
}
function Siban() {
    return <h2>四班</h2>
}

@connect(
    state=>state.auth,
    { logout }
)
class DashBoard extends Component{
    // constructor(props){
    //     super(props);
    //     console.log(this.props)
    // }
    render(){
        const match = this.props.match;
        const redirecttoLogin = <Redirect to='/login'></Redirect>
        const app=(
            <div>
                { this.props.isAuth? <button onClick={ this.props.logout }> 注销</button>: null }
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>一班</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/erban`}>二班</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/sanban`}>三班</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/siban`}>四班</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/erban`} component={Erban}></Route>
                <Route path={`${match.url}/sanban`} component={Sanban}></Route>
                <Route path={`${match.url}/siban`} component={Siban}></Route>
            </div>
        )
        return this.props.isAuth?app:redirecttoLogin
    }
}
export default DashBoard;