import db from "./db.js";

const VOWELS = ["a", "â", "o", "e", "é", "è", "ê", "i", "u", "y"];

const maleNames = db.noms.masculins.concat(db.noms.neutre);
const femaleNames = db.noms.feminins.concat(db.noms.neutre);

export default function generate() {
  const gender = Math.random() > 0.5 ? "m" : "f";

  const namesCount = gender == "m" ? maleNames.length : femaleNames.length;
  const nameIndex = Math.floor(Math.random() * namesCount);
  const name = gender == "m" ? maleNames[nameIndex] : femaleNames[nameIndex];

  let animal = null;
  while (!animal) {
    const animalIndex = Math.floor(Math.random() * db.animaux.length);
    animal = db.animaux[animalIndex][gender] ? db.animaux[animalIndex][gender] : db.animaux[animalIndex].n
  }

  const firstNonSilentLetter = animal[0] == "h" ? animal[1] : animal[0];
  const determinant = VOWELS.includes(firstNonSilentLetter) ? "l'" : gender == "m" ? "le " : "la ";

  const adjectiveIndex = Math.floor(Math.random() * db.adjectifs.length);
  const adjective = db.adjectifs[adjectiveIndex][gender] ? db.adjectifs[adjectiveIndex][gender] : db.adjectifs[adjectiveIndex].n


  return `${name} ${determinant}${animal} ${adjective}`;
}