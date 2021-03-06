const logger = ({dispatch,getState}) => next => action => {
    console.group(action.type);
    console.log("当前状态为",getState().toJS());
    console.log("发送一个action",action);
    const _next = next(action);
    console.log("当前状态为",getState().toJS());
    console.groupEnd();
    return _next;
}

export default logger;