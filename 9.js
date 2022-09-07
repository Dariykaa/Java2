public class Main {
    public static void main(String[] args) {
        int x = (int) (Math.random() *6) ;
        int result = 1;
        for (int i = 1; i <= x; i++) {
            result = result * i;
        }
        System.out.println(result);



    }
}
