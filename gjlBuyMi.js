const puppeteer = require('puppeteer');

const config = {
    user: '自己用户名', 
    itemlink: 'https://www.mi.com/buy/detail?product_id=10000280', 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });

    const page = await browser.newPage();

    // Login
    await page.goto('https://account.xiaomi.com/',{
        waitUntil:'domcontentloaded'
    });
    await page.waitForSelector('input[name="account"]')
    await page.type('input[name="account"]', config.user.toString());
    await page.type('input[name="password"]', config.password);
    await page.click('button[type = "submit"]')
    const page2 = await browser.newPage();
    await page2.goto('https://www.mi.com/buy/detail?product_id=12511', {
        waitUntil: 'domcontentloaded'
    });
    await page2.waitForSelector('.sale-btn')
    await page2.click('.sale-btn')
    // await page.waitFor(1000);
    // await page2.waitForSelector('.sale-btn')
    // await page2.click('.sale-btn')

    /* await page2.waitForSelector('.btn-primary')
    await page2.click('.btn-primary') */
    const page3 = await browser.newPage();
    await page3.goto('https://www.mi.com/buy/cart', {
        waitUntil: 'domcontentloaded'
    });
    await page3.waitForSelector('.btn-primary')
   await page3.click('.btn-primary')
    await page3.waitForSelector('.el-dialog__footer .btn-primary')
    await page3.click('.el-dialog__footer .btn-primary')
    await page3.waitForSelector('.btn-primary')
    await page3.click('.btn-primary')
    await page3.waitForSelector('.total-price .btn-primary')
    await page3.click('.total-price .btn-primary')


    const page4 = await browser.newPage();
    await page4.goto('https://www.mi.com/buy/checkout', {
        waitUntil: 'domcontentloaded'
    });
    await page4.waitForSelector('.address-item')
    await page4.click('.address-item')
   
    await page4.waitForSelector('.address-item')
    await page4.click('.address-item')
    await page4.waitForSelector('.operating-button a')
    await page4.click('.operating-button a')
   

    
})();
