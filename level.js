//#1
console.log('Hello, World!');
//#2
//You know nothing, Jon Snow!
//#3
console.log('Robert');
console.log('Stannis');
console.log('Renly');
//#4
console.log(9780262531961 + 1);
//#5
console.log('What Is Dead May Never Die');
//#6
console.log(81 / 9);
//#7
console.log(6 - -81);
//#8
console.log(3 ** 5);
console.log(-8 / -4);
//#9
console.log(8 / 2 + 5 - -3 / 2);
//#10
console.log(70 * (3 + 4) / (8 + 2));
//#11
console.log(0.39 * 0.22);
//#12
console.log((Infinity + Infinity) / 10);
//#13
console.log(NaN + 5);
//#14
console.log((5 ** 2) - (3 * 7));
//#15
console.log('"Khal Drogo\'s favorite word is "athjahakar""');
//#16
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');
//#17
console.log('Winter came for ' + 'the House of Frey.');
//#18
console.log(String.fromCharCode(126) + "\n" + String.fromCharCode(94) + "\n" + String.fromCharCode(37));
//#19
let motto = 'What Is Dead May Never Die!';
console.log(motto);
//#20
let name1 = 'Brienna';
name1 = 'anneirB';
console.log(name1);
//#21
let myBrotherCount = 2;
console.log(myBrotherCount);
//#22
let family = 'Targaryen';
let pet = 'Dragon';
console.log(family);
console.log('and');
console.log(pet);
//#23
let eurosCount = 100;
let euroDollars = eurosCount * 1.25;
let dollarsYuans = euroDollars * 6.91;
console.log(euroDollars + '\n' + dollarsYuans);
//#24
let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName = 'Joffrey';
let greeting = 'Hello';

console.log(greeting + ', ' + firstName + '!');
console.log(intro + '\n' + info);
//#25
let oneNumber = 11;
let twoNumber = -100;
console.log(oneNumber * twoNumber);
//#26
let king = 'King Balon the 6th';

let kingCount = 6;
let roomsCount = 17;
let allrooms = kingCount * roomsCount;

console.log(king + ' has ' + allrooms + ' rooms.');
//#27
const army = 'the white walkers';
console.log(army);
//#28
const stark = 'Arya';

console.log(`Do you want to eat, ${stark}?`);
//#29
const name3 = 'Na\nharis';
console.log(name3[7]);
//#30
const number1 = { count: -0.304 };
console.log(number1.count);
//#31
const catCount = 32;
console.log(catCount[3]);
//#32
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);
//#33
const cat1 = '7' - (-8 - -2);
console.log(cat1);
//34
const company1 = 'Apple';
const company2 = 'Samsung';

console.log(company1.length + company2.length);
//#35
const soldiersCount = -2309;
const cat2 = Math.abs(soldiersCount);
console.log(cat2);
//#36
const number111 = 923.2238;
console.log(Math.ceil(number));
//#37
const number11 = 10.1234;
console.log(round(number, 2));
//#38
const text = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text[0]}` + '\n' + `Last: ${text[length(text) - 1]}`);
//#39
console.log(Math.min(3, 10, 22, -3, 0));
//#40
console.log(Math.round(Math.random() * 10));
//#41
const motto2 = 'Family, Duty, Honor';
console.log(typeof motto);
//#42
const text1 = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
console.log(text.length);
//#43
const text2 = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
console.log(text.toLowerCase());
//#44
let firstName1 = '  Grigor   \n';
firstName1 = firstName1.trim();
console.log(firstName1);
//#45
const text3 = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text3[0]}` + '\n' + `Last: ${text3[text3.length - 1]}`);
//#46
const text4 = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text4.slice(5, 15).trim().length);
//#47
const printMotto = () => {
    console.log("Winter is coming");
}
export default printMotto;
//#48
const sayHurrayThreeTimes = () => {
    return 'hurray! hurray! hurray!'
}
export default sayHurrayThreeTimes;
//#49
const truncate = (text, length) => {

    return `${text.slice(0, length)}...`;
  };
   export default truncate;
//#50
const getHiddenCard = (number, last = 4) => {
    return `${'*'.repeat(last)}${number.slice(number.length - 4, number.length)}`;
}
export default getHiddenCard;
//#51

