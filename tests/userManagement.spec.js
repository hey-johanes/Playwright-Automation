const {expect, test} = require('@playwright/test')


test.beforeEach("Login to HR web", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole("button",{name:'Login'}).click()

    const dashboard = page.getByRole('heading', {name:'Dashboard'})
    await expect (dashboard).toBeVisible()

    await page.locator('.oxd-main-menu-item-wrapper').filter({hasText:'Admin'}).click()
    await expect(page.getByRole('heading', {name:'User Management'})).toBeVisible()
})

test('Search data user with data valid', async ({page})=>{
    const userNameInput = page.locator('.oxd-input-group').filter({hasText:'Username'}).locator('input')
    await userNameInput.fill('Admin')

    const employeeNameInput = page.getByPlaceholder('Type for hints...');
    await employeeNameInput.fill('manda user')
    await page.getByRole('option', { name: 'manda' }).click();

    await page.getByRole('button', {name:'Search'}).click()

    await expect(page.getByText('manda')).toBeVisible()
})

test('Search data user with data invalid', async ({page})=>{
    const userNameInput = page.locator('.oxd-input-group').filter({hasText:'Username'}).locator('input')
    await userNameInput.fill('Admin Wrong')

    const employeeNameInput = page.getByPlaceholder('Type for hints...');
    await employeeNameInput.fill('manda user')
    await page.getByRole('option', { name: 'manda' }).click();

    await page.getByRole('button', {name:'Search'}).click()

    const noRecordsFound = page.locator('span').filter({ hasText: 'No Records Found' })

    await expect(noRecordsFound).toBeVisible()
})