import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Saucedemo Checkout Flow', () => {
    test('End to End Checkout Automation', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // 1. Login
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // 2. Add two products to cart
        await inventoryPage.addFirstTwoProductsToCart();

        // 3. Navigate to cart and proceed
        await inventoryPage.navigateToCart();
        await cartPage.proceedToCheckout();

        // 4. Fill in checkout form details
        await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');

        // 5. Verify the order summary
        await checkoutPage.verifyOrderSummary();

        // 6. Click finish and validate confirmation
        await checkoutPage.finishCheckout();
        await checkoutPage.validateSuccessfulCheckout();

        // 7. Logout
        await inventoryPage.logout();
    });
});