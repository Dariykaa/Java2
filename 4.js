import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int i = reader.nextInt();
        if(i < 10 && i>=0)
            System.out.println(i + " Позитивне число менше 10 або нуль");

        else System.out.println(i + " Позитивне число більше або 10 негативне");




    }
}
