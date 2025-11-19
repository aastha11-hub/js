const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros =["superman", "batman", "flash"]
marvel_heros.push(dc_heros)

//console.log(marvel_heros);

marvel_heros.concat(dc_heros)
//console.log(marvel_heros);
//push and concat are same combines two arrays

//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);
//merging both arrays

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);
//using spread operator to merge two arrays

const another_array = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//flattening an array using flat method

console.log(Array.isArray("aastha"))
console.log(Array.from("aastha"))
console.log(Array.from({name: "aastha"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  