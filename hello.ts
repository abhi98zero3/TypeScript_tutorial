const  names : string = "Abhishek";
console.log (names)
console.log (names.replace("k","t"));

function adTwo(num : number) {
    return num + 2;
}

type Fish = {swim : () => void};
type Bird = {fly : () => void};

function isFish(pet : Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined;
}
adTwo(3);
export {}