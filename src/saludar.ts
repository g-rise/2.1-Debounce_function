import debounce from "./debounce";

function saludar(nom: string, cognom: string): void {
    console.log(`Bon dia ${nom} ${cognom}`)
}

export const salutDebounce = debounce(saludar)

