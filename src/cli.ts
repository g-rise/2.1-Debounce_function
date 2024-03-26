// import debounce from "./debounce";
import { salutDebounce } from "./saludar";

import * as readline from 'node:readline';

import { stdin as input, stdout as output } from 'node:process';

import colors from "colors";

const rl = readline.createInterface({ input, output });

function introduccioDades() {

    rl.question('Quin és el teu nom? '.red, (resposta: string) => {
        rl.question('I el teu cognom? '.red, (resposta1: string) => {
            console.log("Ara simulem que s'envie la mateixa petició 7 vegades".green)
            salutDebounce(resposta, resposta1)
            salutDebounce(resposta, resposta1)
            salutDebounce(resposta, resposta1)
            salutDebounce(resposta, resposta1)
            salutDebounce(resposta, resposta1)
            salutDebounce(resposta, resposta1)
            salutDebounce(resposta, resposta1)

            setTimeout(() => console.log("Només s'executa l'última petició".blue), 2300)



            rl.close()

        })

    })


}



function iniciarCli() {
    console.log(colors.grey('=========================='))
    console.log('Exemple de funció debounce'.grey)
    console.log('=========================='.grey)
    introduccioDades()

}

iniciarCli()