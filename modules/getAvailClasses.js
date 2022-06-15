// Check to see if target class is available based on current stats
function getAvailClasses(data, curStats) {
    let charClasses = data.charClasses;
    let availClasses = [];
    for (let i = 0; i < charClasses.length; i++) {
        const classId = charClasses[i].id
        const tarStats = charClasses.reqStats;
        const avail = classAvail(curStats, tarStats);
        if (avail) {
            availClasses.push(classId)
        }
    }
    
    return availClasses;
}

export default getAvailClasses