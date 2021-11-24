package src;
class TestBinarySearch {
    public static void main(String[] args) {
       
        //define array containing integers
        int[] arr1 = {-2, 3, 4, 7, 8, 9, 11, 13};
        //define target integer
        int target = 5;
        //get array position of target, or -1 if not found
        int targetPos = search(arr1, target);
        //if target position is less than 0 (outside of array), print error and exit
        if (targetPos < 0){
            System.out.printf("Not found %d \n", target);
            return;
        }
        //if target found, let it print this
        System.out.printf("Found %d \n", target);
    }
    static int search(int[] arr, int target) {
        //define low pointer
        int low = 0;
        //define high pointer
        int high = arr.length - 1;
        //do while low and high does not intersect
        while (low <= high) {
            //find mid-position
            int mid = (low + high) / 2;
            //if mid is equal as target, return mid as answer
            if (arr[mid] == target) {
                return mid;
                //if target is larger than mid
            } else if (target < arr[mid]){
                //move high to one position lower from mid
                high = mid - 1;
            } else {
                //if previous is not true and target is smaller than mid, move mid to one position higher than mid
                low = mid + 1;
            }
        }
        return -1;  // returns from the loop if target was not found, with the position -1 (which is not a valid array position)
    }
}
