Feature: Login basico

Scenario: Login en pagina web
Given Ingresamos al sitio web de AT "https://latest.admintool.reworth.app/login"
When Ingresamos el correo "marvel@yopmail.com"
And Ingresamos la contraseña "Coronel-1992"
Then Deberiamos acceder al dashboard "https://latest.admintool.reworth.app/merchants" luego de hacer click en Iniciar Sesion
When una ves dentro hacemos click en Recompensas
And hago click en sucursales validando la seccion "https://latest.admintool.reworth.app/merchants/venues"
And hago click en Balance

