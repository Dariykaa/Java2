import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int i = reader.nextInt();
        if(i == 1 )
            System.out.println("Monday");
        else if(i == 2)
            System.out.println("Tuesday");
        else if(i == 3 )
            System.out.println("Wednesday");
        else if(i == 4 )
            System.out.println("Thursday");
        else if(i == 5 )
            System.out.println("Friday");
        else if(i == 6 )
            System.out.println("Weekend");
        else if(i == 7 )
            System.out.println("Weekend");

    }
}
