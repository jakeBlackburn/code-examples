
# prompt: 
# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# A subarray is a contiguous part of an array.


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if not nums: 
            return 0
        highest = current = nums[0]
        for i in nums[1:]:
            current = max(i, i + current)
            highest = max(highest, current)
        return highest