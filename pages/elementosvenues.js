const { By } = require("selenium-webdriver")

class Elements {
    constructor(driver){
        this.driver = driver
        this.venue = By.xpath("//div[contains(text(),'Sucursales')]")
        this.balan = By.xpath("//div[contains(text(),'Saldo')]")
    }
    async clickVenue(){
        let venueElement = await this.driver.findElement(this.venue)
        venueElement.click()
    //https://latest.admintool.reworth.app/merchants/offers
    }
    async validoVenues(url){
        let urlObtenida = await this.driver.getCurrentUrl()
        try{
            if(urlObtenida == url){
                console.log("SECCION VALIDADA")
            }
            else {
                console.log("Error en validacion Venues")
                throw Error("URL Diferentes "+url)
            }

        }catch(ERROR){
            console.log("error en la validacion",ERROR);
        }
    
    }
    async clickBalan(){
        let balanElement = await this.driver.findElement(this.balan)
        balanElement.click()
    }
    async ValidoBalance(url){
        let Urlobtenidabalance = await this.driver.getCurrentUrl()
        if(Urlobtenidabalance == url){
            console.log("Seccion Validada");
        }
        else{
            console.log("Error en validacion seccion balance");
            throw Error("Error")
        }
    }

}

module.exports = Elements