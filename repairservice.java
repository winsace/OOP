// Concrete class for repair services implementing the SalesItem interface
public class RepairService implements SalesItem {
    private double pricePerHour;
    private int numberOfHours;

    public RepairService(double pricePerHour, int numberOfHours) {
        this.pricePerHour = pricePerHour;
        this.numberOfHours = numberOfHours;
    }

    @Override
    public double calculateTotalSales() {
        return pricePerHour * numberOfHours;
    }
}
