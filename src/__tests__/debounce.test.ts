import debounce from "../debounce";
// import { expect, jest, test } from '@jest/globals';
//import { salutDebounce } from "../saludar";

describe('debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers()

    })

    it('hauria de fer debounce de la funcio cridada', () => {
        const func = jest.fn() // Utilitzo una mock function per provar la funció debounce
        const funcProva = debounce(func)

        funcProva()
        funcProva()
        funcProva()
        funcProva()


        // Cridant a la funció debounce repetides vegades no hauria de llançar la mock-function fins qque no hagi trascurrit el temps del delay
        expect(func).not.toHaveBeenCalled

        // S'avança el temps més enllà del delay
        jest.advanceTimersByTime(1200)

        // Passat aquest temps s'espera que la funció sigui cridadd només una vegada
        expect(func).toHaveBeenCalledTimes(1)

        funcProva()
        funcProva()
        funcProva()

        // Cridant encara la funció debounce esperem que la mock-function no s'hagi executat perquè no ha passat prou temps
        expect(func).toHaveBeenCalledTimes(1)

        jest.advanceTimersByTime(1000)
        expect(func).toHaveBeenCalledTimes(2)


    })

    it('Hauria de tornar l ultim parametre passat a la funcio', () => {
        const func = jest.fn()
        const funcProva = debounce(func)

        // Si passem parametres diferents a la funció en interval reduït de temps esperem que la funció vingui cridada amb l'últim parametre passat
        funcProva("A")
        funcProva("B")
        funcProva("C")

        jest.advanceTimersByTime(1200)
        expect(func).toHaveBeenCalledWith("C")

    })




})