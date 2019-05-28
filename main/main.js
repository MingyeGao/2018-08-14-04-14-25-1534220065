module.exports = function main(s) {
    //console.log("Debug Info");
    //return 'Hello World!';
    var table1 = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."]
    var table2 = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|']
    var table3 = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']
    
    var len = s.length
    var result1 = ""
    var result2 = ""
    var result3 = ""
    for(var i = 0; i < len; i++){
        result1 += table1[parseInt(s[i])]
        result1 += ' '
    }
    for(var i = 0; i < len; i++){
        result2 += table2[parseInt(s[i])]
        result2 += ' '
    }
    for(var i = 0; i < len; i++){
        result3 += table3[parseInt(s[i])]
        result3 += ' '
    }
    
    var ret = result1.substr(0, result1.length-1)
    ret += "\n"
    ret += result2.substr(0, result2.length-1)
    ret += "\n"
    ret += result3.substr(0, result3.length-1)
    ret += "\n"
    
    return ret
    
    
};