// Concrete class for phones implementing the SalesItem interface
public class Phone implements SalesItem {
    private double price;
    private int quantitySold;

    public Phone(double price, int quantitySold) {
        this.price = price;
        this.quantitySold = quantitySold;
    }

    @Override
    public double calculateTotalSales() {
        return price * quantitySold;
    }
}
