// Check to see if target class is available based on current stats
function classAvail(curStats, tarStats) {
    const hpOk = (curStats[0] >= tarStats[0])
    const mpOk = (curStats[1] >= tarStats[1])
    const strOk = (curStats[2] >= tarStats[2])
    const intOk = (curStats[3] >= tarStats[3])
    const agiOk = (curStats[4] >= tarStats[4])
    return (hpOk && mpOk && strOk && intOk&& agiOk);
}

export default classAvail

// My Character: [112, 22, 34, 37, 45];
// Target Class Requirements: [0, 0, 55, 0, 32]
// 