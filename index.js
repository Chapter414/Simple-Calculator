const { Builder, By } = require("selenium-webdriver");

async function doarithmetic() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        //*[@id='calc-form']/div/div/div[2]/select/*[@value='?']

        await driver.get("http://test.i-pay.co.za/qa/calculator.html");
        await driver.findElement(By.name("number1")).sendKeys(90);
        await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[2]/select/*[@value='multiply']")).click();
        await driver.findElement(By.name("number2")).sendKeys(10);
        await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[4]/button")).click();

    }
    catch (error) {
        console.log(error);
    }
}

doarithmetic();
