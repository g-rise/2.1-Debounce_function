import { salutDebounce } from "./saludar"



salutDebounce("Magic", "Johnson")
salutDebounce("Magic", "Johnson")
salutDebounce("Magic", "Johnson")
salutDebounce("Magic", "Johnson")
salutDebounce("Michael", "Jordan") // Només imprimirà per consola 'Bon dia Michael Jordan'

setTimeout(() => { salutDebounce("Gianni", "Rodari") }, 1500) // Cridant a la funció amb un retard superior al delay tambè imprimirà el nou salut