// https://leetcode.com/problems/maximum-subarray/


// Divide and Conquer solution



// var maxSubArray = function(nums) {
//     let sum_max = nums[0],
//         current_sum = nums[0];

// if (nums.length === 1) return nums[0];

// for (let i = 1; i < nums.length; i++){
    
//     current_sum = Math.max(nums[i], current_sum + nums[i]);
//     if (sum_max < current_sum){
//          sum_max = current_sum 
//         };
// }
// return sum_max;


// TimeOut solution: not good
    // let sum_max = -Infinity ,
    //     sum = 0,
    //     // sumArray = [],
    //     resultArray = [];

    // for (let i = 0; i < nums.length; i++){
    //     sum = 0; 
    //     sumArray = [];        
    //     for (let j = i; j < nums.length; j++){    
    //         sum += nums[j];
    //         // sumArray.push(nums[j]);
    //         if (sum > sum_max) { 
    //             sum_max = sum;
    //             // resultArray = [...sumArray];
    //         }
    //     }    
    // }
    // // return [sum_max,resultArray];
    // return sum_max;
};


console.log(JSON.stringify(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])));
console.log(JSON.stringify(maxSubArray([5,4,-1,7,8])));
console.log(JSON.stringify(maxSubArray([8])));

// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.