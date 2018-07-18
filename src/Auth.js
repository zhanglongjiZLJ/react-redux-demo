import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { login } from './auth.redux';
import { Redirect } from 'react-router-dom';
@connect(
    state=>state.auth,
    { login }
)
class Auth extends Component{
    // constructor(props){
    //     super(props);
    //     console.log(this.props)
    // }
    render(){
        return(
            <div>
                { this.props.isAuth?<Redirect to='dashboard' />:null }
                <h2>请登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
export default Auth;