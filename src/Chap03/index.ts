class Chap03 {
  bai1() {
    let number1: number = 5;
    let number2: number = 2.8;
    let phrase: string = "Result is";
    let permit: boolean = true;
    const result = number1 + number2;
    if (permit) {
      console.log(phrase + result);
    } else {
      console.log("Not show result");
    }
  }
  bai2() {
    function add(x: number | string = 5) {
      let phrase: string | number = "Result is ";

      phrase = 10;
      x = "2.8";

      return phrase + x;
    }
    let result: number | string = add();
    console.log(result);
  }
  bai3() {
    var person: {
      name: string;
      age: number;
    };

    person = {
      name: "lan anh",
      age: 11,
    };
    console.log(person.name);
  }
  bai4() {
    enum Role {
      ADMIN,
      READ_ONLY,
      AUTHOR,
    }
    const person: {
      name: string;
      age: number;
      hobbies: String[];
      role: Number;
      roletuple: any[];
    } = {
      name: "lan anh",
      age: 20,
      hobbies: ["yangho", "cute"],
      role: Role.ADMIN,
      roletuple: [2, "author"],
    };

    let favouriteActivites: any[];
    favouriteActivites = [5, "yangho", true];

    if (person.role === Role.AUTHOR) {
      console.log("is author");
    }

    person.roletuple.push("admin");
    person.roletuple[1] = 10;
    person.roletuple = [0, "admin", "user"];
  }
  async bai5() {
    const pokemons: number = 20;
    interface PokemonInterface {
      id: number;
      name: string;
      image: string;
    }
    let arrPokemons: PokemonInterface[] = [];

    for (let i = 9; i <= pokemons; i++) {
      let data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let pokemon: any = await data.json();
      arrPokemons = [
        ...arrPokemons,
        {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.back_default,
        },
      ];
      console.log(arrPokemons);
    }
    return arrPokemons;
  }
}
export default Chap03;
