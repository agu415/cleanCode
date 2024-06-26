(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores

    type fruits = {
        red: string[],
        yellow: string[],
        purple: string[],
    }
    function getFruitsByColor( color: keyof fruits ): string {
        
        const fruits: fruits ={
            red: ["manzana","fresa","tomate"],
            yellow:["piña","banana"],
            purple:["uvas","moras"],
        };

        if (fruits[color]) {
            return fruits[color].join(", ");
        }
        throw new Error('The color must be one of the following: red, yellow, purple');
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = false;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if (!isFirstStepWorking) {
            return 'First step broken.';
        }
        if (!isSecondStepWorking) {
            return 'Second step broken.';
        }
        if (!isThirdStepWorking) {
            return 'Third step broken.';
        }
        if (!isFourthStepWorking) {
            return 'Fourth step broken.';
        }
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




