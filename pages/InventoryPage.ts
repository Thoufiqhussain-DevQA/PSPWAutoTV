import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly addToCartButtons: Locator;
    readonly cartIcon: Locator;
    readonly burgerMenu: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Selects all "Add to cart" buttons on the page
        this.addToCartButtons = page.locator('button:has-text("Add to cart")');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    }

    async addFirstTwoProductsToCart() {
        // Add the first and second items to the cart
        await this.addToCartButtons.nth(0).click();
        await this.addToCartButtons.nth(0).click(); // Index 0 again because the first button changed to "Remove"
    }

    async navigateToCart() {
        await this.cartIcon.click();
    }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutLink.click();
    }
}