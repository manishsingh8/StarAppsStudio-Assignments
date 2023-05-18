import java.util.Scanner;

 class MinimumPlanes {
    public static int minimumPlanes(int[] array) {
        int n = array.length;
        int planes = 0;
        int fuel = array[0];

        if (fuel == 0) {
            return -1;
        }

        for (int i = 1; i < n - 1; i++) {
            if (fuel == 0) {
                planes += 1;
                fuel = array[i];
            } else {
                fuel = Math.max(fuel - 1, array[i]);
            }
        }

        return planes + 1;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of airports: ");
        int n = scanner.nextInt();
        
        int[] array = new int[n];
        
        System.out.println("Enter the fuel units for each airport:");
        for (int i = 0; i < n; i++) {
            array[i] = scanner.nextInt();
        }
        
        int planesNeeded = minimumPlanes(array);
        System.out.println("Minimum planes needed: " + planesNeeded);
        
        scanner.close();
    }
}
