function isAnagram(str1,str2){
let map1 = {};
let map2 = {};
if(str1.length !== str2.length){
    return false
}
for(let i=0; i<str1.length; i++){
    if(map1[str1[i]]){
        map1[str1[i]]++
    }else{
        map1[str1[i]] = 1
    }
    if(map2[str1[i]]){
        map2[str1[i]]++
    }else{
        map2[str1[i]] = 1
    }
}
for(let key in map1){
    if(map1[key] !== map2[key]){
        return false
    }
}
return true


}

let str1 = "silent"
let str2 = "listen"


console.log(isAnagram(str1,str2))