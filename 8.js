public class Main {
    public static void main(String[] args) {
        int number = 1;
        int result= number + 4;
        int number2= 5;
        do {
            System.out.println(result);
            result= result + number2;
        }while (result <= 100);

    }
}
