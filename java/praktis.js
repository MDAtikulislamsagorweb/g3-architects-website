const heights = ['rahim', 'robin','rafi','ron','rashed'];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
 
const max = getMax(heights);
console.log('max vlue is', max);