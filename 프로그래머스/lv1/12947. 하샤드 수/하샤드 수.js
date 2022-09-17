function solution(x) {
    let sum = 0;
    let arr = (x+'').split('');
    
    for(let i=0; i<arr.length; i++){
        sum += parseInt(arr[i]);
    }
    
    return (x % sum == 0) ? true : false;
}