package src;

public class TestBinarySearch {
    public static void main(String[] args) {
        
        // make array

        int[] arr1 = {-2, 3, 4, 7, 8, 9, 11, 13};

        // print out target 

        System.out.println(target);
    }

    static int search(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (target < arr[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}
