function Random(){
    let number = Math.random() * 100; // Correct the typo
    return <h1>Random Number: {Math.round(number)}</h1>; // Use the correct variable name
}

export default Random;