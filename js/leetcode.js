
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

// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const legend = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    let total = 0


    for (let i = 0; i < s.length; i++) {
        if (legend[s[i]] < legend[s[i+1]]) {
            total += legend[s[i+1]] - legend[s[i]]
            i++
        } else {
            total += legend[s[i]]
        }
    }
    return total
};


// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const emptyIndex = strs.findIndex(function(item) {
        return item === ""
    })
    if (strs.length === 0 || emptyIndex !== -1 ) {
        return ""
    }
    let commonFirstChar = ""
    for (i = 0; i < strs.length; i ++) {
        const firstChar = strs[i].substring(0, 1);
        if (commonFirstChar === "") {
            commonFirstChar = firstChar
        } else {
            if (firstChar !== commonFirstChar) {
                return ""
            }
        }
    }
    const newString = strs.map(function(item) {
        return item.substring(1)
    })
    return commonFirstChar + longestCommonPrefix(newString)
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


// 58. Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.split(" ");
    let lastWord = n[n.length - 1];
    return lastWord.length
};

console.log(lengthOfLastWord("Hello world"))