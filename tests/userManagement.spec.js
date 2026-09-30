const {expect, test} = require('@playwright/test')


test.beforeEach("Login to HR web", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await page.locator('.oxd-main-menu-item-wrapper').filter({hasText:'Admin'}).click()
    await expect(page.getByRole('heading', {name:'User Management'})).toBeVisible()
})

test('Search data user with data valid', async ({page})=>{
    const userNameInput = page.locator('.oxd-input-group').filter({hasText:'Username'}).locator('input')
    await userNameInput.fill('Admin')
    
    await page.getByRole('button', {name:'Search'}).click()

    await expect(page.getByText('Admin').nth(2)).toBeVisible()
})

test('Search data user with data invalid', async ({page})=>{
    const userNameInput = page.locator('.oxd-input-group').filter({hasText:'Username'}).locator('input')
    await userNameInput.fill('Admin Wrong')

    await page.getByRole('button', {name:'Search'}).click()

    const noRecordsFound = page.locator('span').filter({ hasText: 'No Records Found' })

    await expect(noRecordsFound).toBeVisible()
})