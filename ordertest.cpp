#include <iostream>
#include <vector>
#include <memory>
#include <string>
#include <iomanip>  // for std::setw and std::fixed

// ---------------------------
// Base Item Class
// ---------------------------
class Item {
public:
    virtual ~Item() {}
    virtual std::string getName() const = 0;
    virtual double getPrice() const = 0;
};

// ---------------------------
// Burger Class
// ---------------------------
class Burger : public Item {
private:
    std::string type;
    double price;

public:
    Burger(const std::string& type, double price)
        : type(type), price(price) {}

    std::string getName() const override {
        return "Burger (" + type + ")";
    }

    double getPrice() const override {
        return price;
    }
};

// ---------------------------
// Hotdog Class
// ---------------------------
class Hotdog : public Item {
private:
    std::string type;
    double price;

public:
    Hotdog(const std::string& type, double price)
        : type(type), price(price) {}

    std::string getName() const override {
        return "Hotdog (" + type + ")";
    }

    double getPrice() const override {
        return price;
    }
};

// ---------------------------
// Order Class
// ---------------------------
class Order {
private:
    std::vector<std::unique_ptr<Item>> items;

public:
    void addItem(std::unique_ptr<Item> item) {
        items.push_back(std::move(item));
    }

    void displayOrder() const {
        std::cout << "\n========= CURRENT ORDER =========\n";

        if (items.empty()) {
            std::cout << "No items yet.\n";
            std::cout << "=================================\n";
            return;
        }

        double total = 0.0;
        double Total = 0.0;
        int index = 1;

        for (const auto& item : items) {
            std::cout << index++ << ". "
                << std::left << std::setw(25) << item->getName()
                << " $ " << std::fixed << std::setprecision(2)
                << item->getPrice() << "\n";

            total += item->getPrice();
            Total = (total * 0.06) + total;
        }

        std::cout << "---------------------------------\n";
        std::cout << "TOTAL:                $ "
            << std::fixed << std::setprecision(2)
            << Total << "\n";
        std::cout << "=================================\n";
    }
};

// ---------------------------
// Burger Variant Menu
// ---------------------------
int burgerMenu() {
    std::cout << "\n--- Burger Types ---\n";
    std::cout << "1. Classic Burger ($4.99)\n";
    std::cout << "2. Cheeseburger ($5.99)\n";
    std::cout << "3. Vegie ($6.99)\n";
    std::cout << "4. Cancel\n";
    std::cout << "> ";
    int choice;
    std::cin >> choice;
    return choice;
}

// ---------------------------
// Hotdog Variant Menu
// ---------------------------
int hotdogMenu() {
    std::cout << "\n--- Hotdog Types ---\n";
    std::cout << "1. Classic Hotdog ($3.49)\n";
    std::cout << "2. Supreme($7.99)\n";
    std::cout << "3. vegie ($5.00)\n";
    std::cout << "4. Cancel\n";
    std::cout << "> ";
    int choice;
    std::cin >> choice;
    return choice;
}

// ---------------------------
// Main Program
// ---------------------------
int main() {
    Order order;
    int choice;

    while (true) {
        std::cout << "\n========== MAIN MENU ==========\n";
        std::cout << "1. Add Burger\n";
        std::cout << "2. Add Hotdog\n";
        std::cout << "3. Show Order\n";
        std::cout << "4. Exit\n";
        std::cout << "> ";
        std::cin >> choice;

        if (!std::cin) break;

        switch (choice) {
        case 1: {
            int c = burgerMenu();
            switch (c) {
            case 1: order.addItem(std::make_unique<Burger>("Classic", 4.99)); break;
            case 2: order.addItem(std::make_unique<Burger>("Cheeseburger", 5.49)); break;
            case 3: order.addItem(std::make_unique<Burger>("vegie", 5.99)); break;
            case 4: std::cout << "Cancelled.\n"; break;
            default: std::cout << "Invalid choice.\n"; break;
            }
            break;
        }

        case 2: {
            int c = hotdogMenu();
            switch (c) {
            case 1: order.addItem(std::make_unique<Hotdog>("Classic", 3.49)); break;
            case 2: order.addItem(std::make_unique<Hotdog>("supreme", 3.99)); break;
            case 3: order.addItem(std::make_unique<Hotdog>("vegie", 3.79)); break;
            case 4: std::cout << "Cancelled.\n"; break;
            default: std::cout << "Invalid choice.\n"; break;
            }
            break;
        }

        case 3:
            order.displayOrder();
            break;

        case 4:
            std::cout << "thanks come again!\n";
            return 0;

        default:
            std::cout << "Invalid choice.\n";
        }
    }

    return 0;
}
