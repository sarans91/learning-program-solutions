package code;


class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class Ecommerce {
    static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equals(name)) {
                return i;
            }
        }
        return -1;
    }

    static int binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareTo(name);
            if (cmp == 0) return mid;
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Phone", "Electronics"),
            new Product(3, "Shirt", "Clothing")
        };

        Product[] sortedProducts = {
            new Product(3, "Laptop", "Electronics"),
            new Product(1, "Phone", "Electronics"),
            new Product(2, "Shirt", "Clothing")
        };

        int linearIndex = linearSearch(products, "Phone");
        if (linearIndex != -1) {
            System.out.println("Linear Search: Found " + products[linearIndex].productName + " at index " + linearIndex);
        } else {
            System.out.println("Linear Search: Product not found");
        }

        int binaryIndex = binarySearch(sortedProducts, "Phone");
        if (binaryIndex != -1) {
            System.out.println("Binary Search: Found " + sortedProducts[binaryIndex].productName + " at index " + binaryIndex);
        } else {
            System.out.println("Binary Search: Product not found");
        }
    }
}