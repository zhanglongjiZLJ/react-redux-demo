import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import reducers  from './reducer';
import Auth from './Auth.js'
import DashBoard from './DashBoard.js'
import './index.css'
const store = createStore(reducers);



console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/*Switch只渲染命中的第一个路由*/}
                {/*<Redirect to='/'></Redirect>*/}{/*始终跳转到某一页面*/}
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={DashBoard}></Route>
                <Redirect to='/dashboard'></Redirect>
                {/*<Route path='/sanban' component={Sanban}></Route>*/}
                {/*<Route path='/:location' component={Test}></Route>/!*匹配不到时跳转到某一页面*!/*/}
                {/*<App />*/}
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));








// function render() {
//     ReactDOM.render(<App store={store} addFun={addFun} subFun={subFun}  />, document.getElementById('root'))
// }
// render()
// store.subscribe(render)
// registerServiceWorker()


//
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// function counter(state=0, action) {
//     switch(action.type){
//         case 'add':
//             return state+1
//         case 'sub':
//             return state-1
//         default:
//             return 10
//     }
// }
// //新建store
// const store = createStore(counter)
// const init = store.getState()
// console.log(init)
//
// function listener() {
//     const current = store.getState()
//     console.log(`当前数值为${current}`)
// }
// //订阅
// store.subscribe(listener)
//
// //派发事件
// store.dispatch({type:'add'})
// console.log(store.getState())
// store.dispatch({type:'add'})
// console.log(store.getState())
// store.dispatch({type:'add'})
// console.log(store.getState())
// store.dispatch({type:'sub'})
// console.log(store.getState())
