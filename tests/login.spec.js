const {test, expect} = require('@playwright/test')

test("login HR Orange with valid username and password", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole("button",{name:'Login'}).click()

    const dashboard = page.getByRole('heading', {name:'Dashboard'})
    console.log(dashboard);
    

    await expect (dashboard).toBeVisible()
});

test('login with invalid username and password', async ({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('invalidUser')
    await page.getByPlaceholder('Password').fill('wrongPassword')
    await page.getByRole("button",{name:'Login'}).click()

    const errMsg = page.getByText('Invalid credentials')

    await expect(errMsg).toBeVisible()
})

test('login with blank username and password', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('')
    await page.getByPlaceholder('Password').fill('')
    await page.getByRole("button",{name:'Login'}).click()

    const errMsgRequired = page.getByText('Required').first()

    await expect(errMsgRequired).toHaveCount(2)
})