function timeConversion(s) {
    let amPM = s.slice(8,10);
    let restOfTime= s.slice(2,8);
    let justHour = s.slice(0,2);
    if (amPM =='AM' && justHour=='12'){
        return`00${restOfTime}`
    }if (amPM =='AM'&& justHour!='12'){
        return`${justHour}${restOfTime}`
    }if (amPM =='PM'&& justHour=='12'){
        justHour = "12"
        return`${justHour.toString()}${restOfTime}`
    }if (amPM =='PM'&& justHour!='12'){
        justHour = Number(justHour)+12
        return`${justHour.toString()}${restOfTime}`
    }
}
let strin = '11:55:50PM'
timeConversion(strin)
