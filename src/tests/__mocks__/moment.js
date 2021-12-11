// import moment from 'moment'
// since we cannot just import moment in a mock file, we have to use the jest method of calling and using the actual moment object 
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};
