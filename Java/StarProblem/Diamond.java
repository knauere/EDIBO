/* This is a Java script for making a Diamond shape with custom side length */
import java.util.Scanner;
class Main {

    public static void main(String[] args) {
        //make scanner object, that allows user input
        Scanner input = new Scanner(System.in);
        //ask user to enter required size
        System.out.println("How long should the side be?");
        //asks to enter a number
        int inputLength = input.nextInt();
        //prints the number just entered
        //System.out.println("Your number was " + inputLength);

        // integer for controlling character amount
        int n;
        // makes the first half of the diamond
        // starts at line 1, stops at one line before the middle (which is the same as inputLength)
        for (int i = 1; i <= inputLength - 1; i++){
            //this prints as many spaces as inputLength - line count
            for (n = 1; n <= inputLength -i; n++){
                System.out.print(" ");
            }
            //this print as many stars as line count * 2 - 1
            for (n = 1; n <= i * 2 - 1; n++){
                System.out.print("*");
            }
            System.out.println();
        }
        //makes bottom half of the diamond
        //first line prints the middle, decreases by 1 each line, stops after reaching 0
        for (int i = inputLength; i > 0; i--){
            //this prints as many spaces as inputLength - i count
            for (n = 1; n <= inputLength -i; n++){
                System.out.print(" ");
            }
            //this prints the maximum amount of stars and then decreases each step of the loop
            for (n = 1; n <= i * 2 - 1; n++){
                System.out.print("*");
            }
            System.out.println();
        }
        }

    }