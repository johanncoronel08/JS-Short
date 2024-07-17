const { By, Builder, Browser } = require('selenium-webdriver');
const { Given, When, Then, AfterAll, BeforeAll,setDefaultTimeout } = require('@cucumber/cucumber')
const Elements = require('../pages/elementosvenues')

setDefaultTimeout(15000)
AfterAll (async function(){
    await driver.sleep(5000)
    console.log("FINALIZADO")
    await driver.quit()
})

let driver = new Builder().forBrowser(Browser.CHROME).build();
const claseElements = new Elements(driver)


Given ("Ingresamos al sitio web de AT {string}",async function(url){
    await driver.get(url)
    //await driver.sleep(5000)
});

When ("Ingresamos el correo {string}",async function(mail){

    let email = await driver.findElement(By.xpath("//input[@name='email']"))
    email.click()
    email.sendKeys(mail)
})

When ("Ingresamos la contraseña {string}",async function(Contrasena){
    let pass = await driver.findElement(By.xpath("//input[contains(@placeholder,'Contrase')]"))
    pass.click()
    pass.sendKeys(Contrasena)

})

Then ("Deberiamos acceder al dashboard {string} luego de hacer click en Iniciar Sesion",async function(url){
    let login = await driver.findElement(By.xpath("//button[@type='submit']"))
    await login.click()
    await driver.sleep(5000)
    let urlobtenida = await driver.getCurrentUrl()
    if (urlobtenida == url)  
        {
            console.log("INICIO DE SESION CORRECTO")
        }  
        else{
            console.log("INICIO SESION INVALIDO")
            throw Error("ERROR")
        }
})


When ("una ves dentro hacemos click en Recompensas", async function(){
    let rewards = await driver.findElement(By.xpath('//div[contains(text(),"Recompensas")]'))
    await rewards.click()
})

When ("hago click en sucursales validando la seccion {string}",async function(url){
claseElements.clickVenue()
await driver.sleep(5000)
claseElements.validoVenues(url)

})

When ("hago click en Balance", async function(){
    let url = "https://latest.admintool.reworth.app/merchants/balance"
    claseElements.clickBalan();
    await driver.sleep(5000)
    claseElements.ValidoBalance(url)
})