export const DateFormater = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        return date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear();
    }
}

export const DateFormater2 = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        let mainDate = null;
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month <= 9 && day <= 9) {
            mainDate = date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + '0' + date.getDate()
        } else if (day >= 10 && month < 10) {
            mainDate = date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + date.getDate()
        } else if (month >= 10 && day <= 9) {
            mainDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + '0' + date.getDate()
        } else {
            mainDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        }
        return mainDate;
    }
}