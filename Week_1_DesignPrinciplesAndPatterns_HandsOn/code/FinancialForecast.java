package code;

public class FinancialForecast {
    static double forecast(double[] growthRates, int year) {
        if (year <= 0) return 1.0;
        return forecast(growthRates, year - 1) * (1 + growthRates[year - 1]);
    }

    public static void main(String[] args) {
        
        double[] growthRates = {0.05, 0.03, 0.02};
        int years = growthRates.length;

       
        double futureValue = forecast(growthRates, years);
        System.out.println("Future value after " + years + " years: " + futureValue);

        
        double optimizedValue = 1.0;
        for (int i = 0; i < years; i++) {
            optimizedValue *= (1 + growthRates[i]);
        }
        System.out.println("Optimized value (iterative): " + optimizedValue);
    }
}