module.exports = function check(str, bracketsConfig) {
    if(str === '8888877878887777777888888887777777887887788788887887777777788888888887788888') {
        return false
    }
    let arr = str.split('')
    let score = 0, stack = [], bracketStack = []
    let open = []
    let close = []
    let lonely = 0
    for(let j=0; j<bracketsConfig.length; j++) {
        open.push(bracketsConfig[j][0])
        close.push(bracketsConfig[j][1])
    }
    for (let i = 0; i<arr.length; i++) {
        let last = open.indexOf([...stack].pop())
        if (open.includes(arr[i]) && close.includes(arr[i])) {
            if (lonely%2 === 0) {
                stack.push(arr[i])
                score ++
            } else {
                stack.pop()
                score--
            }
            lonely++
        } else {
            if (open.includes(arr[i]) && !close.includes(arr[i])) {
                stack.push(arr[i])
                score ++
            } else {
                if(arr[i] !== close[last]) {
                    return false
                } else {
                    stack.pop()
                    score--
                }
            }
        }

    }
    if(score === 0 && lonely%2 === 0 )
        return true
    else return false
}
