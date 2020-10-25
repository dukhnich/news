export const createTime = (timestamp) => {
    const time = new Date(isNaN(+timestamp) ? timestamp : +timestamp);
    const today = new Date();
    const timeOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric", second: "numeric"};
    let timeMsg;
    if (time.getDate() === today.getDate()) {
        timeMsg = time.toLocaleTimeString()
    }
    else {
        timeMsg = time.toLocaleDateString("ru", timeOptions)
    }
    return timeMsg
};