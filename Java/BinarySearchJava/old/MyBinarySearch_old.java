package src;

public class TestBinarySearch {
    public static void main(String[] args) {
       
        //define array containing integers

        int[] arr1 = {-2, 3, 4, 7, 8, 9, 11, 13};

        //define target integer

        int target = 11;

        int returnvalue = search(arr1, target);

        
        System.out.println(returnvalue);

        //print out target console - this just returns the target value above :)

        //System.out.println("Target is " + target + " and search was successful!");
    }

        //searches the array and returns the position of the target

    static int search(int[] arr, int target) {
        int low = 0;  //define low pointer
        int high = arr.length - 1; //define high pointer
        while (low <= high) {      //do while low and high does not intersect 
            int mid = (low + high) / 2; //find mid position
            if (arr[mid] == target) { //if mid is equal as target, return mid as answer
                return mid;
            } else if (target < arr[mid]){ //if target is larger than mid
                high = mid - 1; //move high to one position lower from mid
            } else {
                low = mid + 1;  //if previous is not true and target is smaller than mid
                                //move mid to one position higher than mid
            }
        }
        return -1;  // returns from the loop if target was not found, with the position -1 (which is not a valid array position)
    }
}
