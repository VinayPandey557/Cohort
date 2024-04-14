

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }


    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();


    let arr1 = str1.split("").sort();
    let arr2 = str2.split("").sort();


    function check(arr1, arr2){
        for(let i =0; i<arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }

    let ans = check(arr1, arr2);
    return ans;
}

console.log(isAnagram("ram", "mar"));
console.log(isAnagram("ram", "mau"));