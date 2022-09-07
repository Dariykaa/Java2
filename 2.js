import java.util.Scanner;
public class Main {
    public static void main(String[] args) {

        Scanner num = new Scanner(System.in);
        int first, second, result, result1, result2, result3;
        System.out.println("first = ");
        first = num.nextInt();
        System.out.println("second = ");
        second = num.nextInt();
        result = first + second;
        System.out.println("Result is - " + result);
        result1 = first - second;
        System.out.println("Result is - " + result1);
        result2 = first * second;
        System.out.println("Result is - " + result2);
        result3 = first / second;
        System.out.println("Result is - " + result3);

    }
}
