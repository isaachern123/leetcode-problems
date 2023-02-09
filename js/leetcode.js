
// 1. TwoSum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let vals = {}

    for (let i = 0; i < nums.length; i++) {
        if(target - nums[i] in vals) {
            return [vals[target - nums[i]], i];
        } else {
            vals[nums[i]] = i
        }
    }
    return [];
};


// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    } else {
        return x.toString().split('').reverse().join('') === x.toString();
    }
};



// 20. Valid Parenthesis
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while (
        s.indexOf("{}") !== -1 ||
        s.indexOf("()") !== -1 ||
        s.indexOf("[]") !== -1
        ) {
        s = s.replace("{}", "");
        s = s.replace("()", "");
        s = s.replace("[]", "")
    }
    return s === ""
};