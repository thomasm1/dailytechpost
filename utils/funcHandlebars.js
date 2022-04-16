import moment from  "moment"

export const formatDate = {
    formatDate: function (date, format) {
        return moment(date).utc().format(format)
    }
}