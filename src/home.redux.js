const ADD = 'add';
const SUB = 'sub';
//reducer
export function count(state=10, action) {
    console.log(state);
    switch(action.type){
        case ADD:
            return state+1;
        case SUB:
            return state-1;
        default:
            return state;
    }
}
//action creator
export function addFun() {
    return {type:ADD}
}
export function subFun() {
    return {type:SUB}
}