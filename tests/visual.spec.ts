import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Visual Regression Testing', () => {
    test('Login Page Visual Verification', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.navigate();
        
        // This will take a screenshot on the first run to act as the baseline.
        // On subsequent runs, it will compare the UI against this baseline.
        await expect(page).toHaveScreenshot('login-page-baseline.png');
    });
});