import {test, expect} from "../../fixtures/base";

test('navigate to test case page', async ({ homePage,page }) => {
    await homePage.clickTestCaseIcon();
    const pageTitle = page.getByRole('heading', { name: 'Test Cases', exact: true })
    await pageTitle.click();
    await expect(pageTitle).toBeVisible();
})