const genericPostDeleteResp = (statusDesc) => {
    return {
        Status:{
            StatusDesc: statusDesc,
            EndDt: new Date()
        }
    };
}
const genericGetResp = (statusDesc, data) => {
    return {
        Status:{
            StatusDesc: statusDesc,
            EndDt: new Date()
        },
        Tasks: data
    };
}

module.exports = { genericGetResp, genericPostDeleteResp };