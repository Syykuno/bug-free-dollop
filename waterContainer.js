/*
? You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
? Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
? Return the area of water it would hold.
*/
var numbers = [7, 1, 2, 3, 9];
var min = function (a, b) { return (a > b ? b : a); };
/// Brute Force
var getMaxWaterContainer = function (nums) {
    var maxArea = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var minOfTwo = min(nums[i], nums[j]);
            var tempArea = minOfTwo * (j - i);
            console.log(tempArea);
            if (tempArea > maxArea)
                maxArea = tempArea;
        }
    }
    return maxArea;
};
/// Shifting pointers Approach
var getMaxWaterContainerOpt = function (heights) {
    var p1 = 0, p2 = heights.length - 1, maxArea = 0;
    while (p2 > p1) {
        var height = min(heights[p1], heights[p2]);
        var width = p2 - p1;
        var tempArea = height * width;
        if (tempArea > maxArea)
            maxArea = tempArea;
        if (heights[p1] < heights[p2])
            p1++;
        else
            p2--;
    }
    return maxArea;
};
console.time('maxWaterContainer');
var solution = getMaxWaterContainerOpt(numbers);
console.timeEnd('maxWaterContainer');
console.log(solution);
