export default function debounce(func: Function, delay: number = 1000): Function {
    let timeoutId: ReturnType<typeof setTimeout>

    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId)

        const contexte = this
        const parametres = args

        timeoutId = setTimeout(() => {
            func.apply(contexte, parametres)

        }, delay)
    }

}