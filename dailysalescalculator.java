import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

// The main class orchestrating the sales calculation
public class DailySalesCalculator extends JFrame {
    private JTextField priceField, quantityField, pricePerHourField, hoursField;
    private JTextArea resultArea;

    public DailySalesCalculator() {
        // Frame setup, panel creation, and layout

        // Components creation and layout

        JButton calculateButton = new JButton("Calculate");
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                calculateSales();
            }
        });

        // Layout setup

        // Add components to the panel

        // Add panel to the frame

        // Set visible
        setVisible(true);
    }

    private void calculateSales() {
        try {
            double price = Double.parseDouble(priceField.getText());
            int quantity = Integer.parseInt(quantityField.getText());
            double pricePerHour = Double.parseDouble(pricePerHourField.getText());
            int hours = Integer.parseInt(hoursField.getText());

            SalesItem phone = new Phone(price, quantity);
            SalesItem repairService = new RepairService(pricePerHour, hours);

            displayResults(phone.calculateTotalSales(), repairService.calculateTotalSales());
        } catch (NumberFormatException e) {
            resultArea.setText("Please enter valid numerical values.");
        }
    }

    private void displayResults(double phoneTotalSales, double repairTotalSales) {
        resultArea.setText("Total sales for Phones: ₱" + phoneTotalSales + "\n" +
                "Total sales for Repair Services: ₱" + repairTotalSales);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new DailySalesCalculator();
            }
        });
    }
}
