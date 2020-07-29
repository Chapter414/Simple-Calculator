/*const { Builder, By } = require("selenium-webdriver");

async function doarithmetic() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        //*[@id='calc-form']/div/div/div[2]/select/*[@value='?']
        const input = '*';
        switch(input) {
            case '*':
                operator = 'multiply';
                break;
            case '/':
                operator = 'divide';
                break;
            case '-':
                operator = 'subtract';
                break;
            case '+':
                operator = 'add';
                break;                
            default:
                console.log(`No such operator: ${operator}`)
        }

        //await driver.get("http://test.i-pay.co.za/qa/calculator.html");
        //await driver.findElement(By.name("number1")).sendKeys(90);
        //await driver.findElement(By.xpath(`//*[@id='calc-form']/div/div/div[2]/select/*[@value='multiply']`)).click();
        //await driver.findElement(By.name("number2")).sendKeys(10);
        //await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[4]/button")).click();

        await testAddition(1, 2, operator, driver);

    }
    catch (error) {
        console.log(error);
    }
}

const testAddition = async (number1, number2, op, driver) => {
    await driver.get("http://test.i-pay.co.za/qa/calculator.html");
    await driver.findElement(By.name("number1")).sendKeys(90);
    await driver.findElement(By.xpath(`//*[@id='calc-form']/div/div/div[2]/select/*[@value='${op}']`)).click();
    await driver.findElement(By.name("number2")).sendKeys(10);
    await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[4]/button")).click();
};


 

doarithmetic();*/



/*const { Builder, By } = require("selenium-webdriver");
 
async function doarithmetic() {
    let driver = await new Builder().forBrowser("firefox").build();
 
    try {
        
        const url = 'http://test.i-pay.co.za/qa/calculator.html';
        await driver.get(url);

 

        // Addition scenario
        const answer1 = await testCalculation(3, 5, 'add', driver);
        console.log("answer1: " + answer1);
        // Verify answer = 10 ???

 

        // Subtraction scenario
        const answer2 = await testCalculation(10, 2, 'subtract', driver);
        console.log("answer2: " + answer2);
        // Verify answer = 3 ???
 
         // Multiplication scenario
        const answer3 = await testCalculation(8, 4, 'multiply', driver);
        console.log("answer3: " + answer3);
        // Verify answer = 15 ???

 

        // Division scenario
        const answer4 = await testCalculation(12, 4, 'divide', driver);
        console.log("answer4: " + answer4);
        // Verify answer = 2.5 ???
    }
    catch (error) {
        console.log(error);
    }
}
 
const testCalculation = async (number1, number2, op, driver) => {
    if (number1 > 999) {
        console.log('Number too large');
        // Fail test!!!
    }
    if (number1 < -999) {
        console.log('Number too small');
        // Fail test!!!
    }
    await driver.findElement(By.xpath(`//*[@id='calc-form']/div/div/div[2]/select/*[@value='${op}']`)).click();
    await driver.findElement(By.name("number1")).sendKeys(number1);
    await driver.findElement(By.name("number2")).sendKeys(number2);
    await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[4]/button")).click();
    return await driver.findElement(By.xpath("//*[@id='answer']")).getText();
};
 
 
 
doarithmetic();*/



    
const { Builder, By } = require("selenium-webdriver");
 
async function doarithmetic() {
    let driver = await new Builder().forBrowser("firefox").build();
 
    try {
        
        const url = 'http://test.i-pay.co.za/qa/calculator.html';
        await driver.get(url);


        // Addition scenario
        const answer1 = await testCalculation(200, 120, `//*[@id='calc-form']/div/div/div[2]/select/*[@value='add']`, driver);
        console.log('answer1: ' + answer1);
        //Verify answer = 320 ???


        // Subtraction scenario
        const answer2 = await testCalculation(5, 2, `//*[@id='calc-form']/div/div/div[2]/select/*[@value='subtract']`, driver);
        console.log('answer2: ' + answer2);
        // Verify answer = 3 ???
 
         // Multiplication scenario
        //const answer3 = await testCalculation(5, 3, `//*[@id='calc-form']/div/div/div[2]/select/*[@value='multiply']`, driver);
        //console.log('answer3: ' + answer3);
        // Verify answer = 15 ???


        // Division scenario
        //const answer4 = await testCalculation(5, 2, `//*[@id='calc-form']/div/div/div[2]/select/*[@value='divide']`, driver);
        //console.log('answer4: ' + answer4);
        // Verify answer = 2.5 ???
    }
    catch (error) {
        console.log(error);
    }
}
 
const testCalculation = async (number1, number2, op, driver, Fail) => {
    if (isNaN(number1) || isNaN(number2)) {
        console.log('Number(s) not valid');
        Fail
    }
    if (number1 < -999 || number1 > 999) {
        console.log('Number1 not in range');
         Fail
    }
    if (number2 < -999 || number2 > 999) {
        console.log('Number1 not in range');
        Fail
    }
    await driver.findElement(By.xpath(op)).click();
    await driver.findElement(By.name("number1")).sendKeys(number1);
    await driver.findElement(By.name("number2")).sendKeys(number2);
    await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[4]/button")).click();
    return await driver.findElement(By.xpath("//*[@id='answer']")).getText();;
};
 
 
 
doarithmetic();


    
/*const { Builder, By } = require("selenium-webdriver");
 
async function doarithmetic() {
    let driver = await new Builder().forBrowser("firefox").build();
 
    try {
        
        const url = 'http://test.i-pay.co.za/qa/calculator.html';
        await driver.get(url);


        // Addition scenario
        const answer1 = await testCalculation(5, 5, `add`, driver);
        console.log('answer1: ' + answer1);
        // Verify answer = 10 ???


        // Subtraction scenario
        const answer2 = await testCalculation(5, 2, `subtract`, driver);
        console.log('answer2: ' + answer2);
        // Verify answer = 3 ???
 
        // Division scenario
        const answer4 = await testCalculation(5, 2, `divide`, driver);
        console.log('answer4: ' + answer4);
        // Verify answer = 2.5 ???

         // Multiplication scenario
        const answer3 = await testCalculation(2, 3, `multiply`, driver);
        console.log('answer3: ' + answer3);
        // Verify answer = 15 ???

    }
    catch (error) {
        console.log(error);
    }
}
 
const testCalculation = async (number1, number2, op, driver) => {
    if (isNaN(number1) || isNaN(number2)) {
        console.log('Number(s) not valid');
        // Fail test!!!
    }
    if (number1 < -999 || number1 > 999) {
        console.log('Number1 not in range');
        // Fail test!!!
    }
    if (number2 < -999 || number2 > 999) {
        console.log('Number1 not in range');
        // Fail test!!!
    }
    
    console.log(`INPUT: number1=${number1}, number2=${number2}, op=${op}`);


    await driver.findElement(By.xpath(`//*[@id='calc-form']/div/div/div[2]/select/*[@value='${op}']`)).click();
    await driver.findElement(By.name("number1")).sendKeys(number2);
    await driver.findElement(By.name("number2")).sendKeys(number1);
    await driver.findElement(By.xpath("//*[@id='calc-form']/div/div/div[4]/button")).click();
    return await driver.findElement(By.xpath("//*[@id='answer']")).getText();;
};
 
 
 
doarithmetic();*/
