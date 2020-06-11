function cross(int){
    if(int % 2 == 0 && int > 0){
        var str = ""
        var leng = int
        var pos1 = 0
        var pos2 = leng - 1
        var iteration = 0
        for (let i = 0; i < leng;) {
            if(pos1 == i){
                str += "\\"
            }
    
            if(pos2 == i){
                str += "/"
            }
    
            if(pos1 != i && pos2 != i){
                str += " "
            }
            i++
            if(i + 1 == leng && pos1 < leng && pos2 > 0){
                if(iteration == 0){
                    str += "/"
                    iteration++
                }
                str += "\n"
                pos1++
                pos2--
                i = 0
            }
        }
        console.log(str)
    }else{
        console.log("je n'accepte que les nombres ou chiffres paire et plus grand que zero")
    }
}

cross(4)