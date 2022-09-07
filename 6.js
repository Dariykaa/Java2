import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int i = reader.nextInt();
        switch (i) {
            case 1:
                System.out.print("Monday ");
                break;
            case 2:
                System.out.print("Tuesday ");
                break;
            case 3:
                System.out.print("Wednesday ");
                break;
            case 4:
                System.out.print("Thursday ");
                break;
            case 5:
                System.out.print("Friday ");
                break;
            case 6:

            case 7:
                System.out.print("Weekend ");
                break;
            default:
                System.out.print(" ");
                break;
        }

    }
}
