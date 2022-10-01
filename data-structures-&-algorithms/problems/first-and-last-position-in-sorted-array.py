# prompt:

# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].

# You must write an algorithm with O(log n) runtime complexity.

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        
        def findLower(nums, target):
            hi = len(nums) - 1
            lo = 0
            while hi >= lo:
                if hi == lo and nums[hi] != target:
                    return -1
                mid = (hi + lo) // 2        
                
                if nums[mid] == target:
                    if mid == 0 or nums[mid - 1] != target:
                        return mid
                    hi = mid
                if nums[mid] > target:
                    hi = mid - 1
                if nums[mid] < target:
                    lo = mid + 1
            return hi
    
        lowest = findLower(nums, target)
        
        if lowest == -1:
            highest = -1
        else: 
            highest = lowest + nums.count(target) - 1
    
        return [lowest, highest]