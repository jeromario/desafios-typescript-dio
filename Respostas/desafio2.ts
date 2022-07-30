enum Profession{
    Padeiro,
    Atriz
}
interface Person {
    name: string,
    age: number,
    profession?: Profession
}

let pessoa1: Person = {
    name: 'Maria',
    age: 29,
    profession:Profession.Atriz

};


let pessoa2: Person = {
    name: 'Roberto',
    age: 19,
    profession:Profession.Padeiro
}


let pessoa3: Person = {
    name: "laura",
    age: 32,
    profession: Profession.Atriz
};

let pessoa4:Person = {
    name: "carlos",
    age: 19,
    profession: Profession.Padeiro
}