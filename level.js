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
const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;
export default capitalize;
//#52
const isPensioner = (age) => age >= 60;
export default isPensioner;
//#53
const isMister = (text) => text === 'Mister';
export default isMister;
//#54
const isInternationalPhone = (tel) => tel[0].toString() === '+';

export default isInternationalPhone;
//#55 leap year
const isLeapYear = (years) => {
    const number = years % 400 === 0 || years % 4 === 0 && years % 100 !== 0; 
    return number;
};
export default isLeapYear;
//#56 Palindrom pzdc
const reverse = (s) => s.split('').reverse().join('');

const isNotPalindrome = (text) => {
    const textLower = text.toLowerCase()
    return textLower !== reverse(textLower);
};

export default isNotPalindrome;
//#57
const getLetter = (name, num) => {
    return name[num - 1] || '';
};

export default getLetter;
//#58
const guessNumber = (num) => {
    if (num === 42) {
        return "You win!";
    }
    return "Try again!";
};
export default guessNumber;
//#59
const normalizeUrl = (adress) => {
    if (adress.startsWith('https://')) {
        return adress;
    } else {
        return `https://${adress}`;
    }
};
//#60
const whoIsThisHouseToStarks = (lastName) => {
    if (lastName === 'Karstark' || lastName === 'Tally') {
        return 'friend';
    } else if (lastName === 'Lannister' || lastName === 'Frey') {
        return 'enemy';
    } else {
        return 'neutral';
    }
};
export default whoIsThisHouseToStarks;
//#61
const convertText = (text) => {
    const upper = text[0];
    if (text === '') {
        return '';
    } else if (upper === upper.toUpperCase()) {
        return text;
    }  else {
        return reverse(text);
    }
};
    
export default convertText;
//instructor
const convertText = (text) => {
    if (text === '') {
      return '';
    }
  
    const reversable = text[0] !== text[0].toUpperCase();
    return reversable ? reverse(text) : text;
  };
  export default convertText;
  //#62
  const getNumberExplanation = (num) => {
    switch (num) {
        case 666:
        return 'devil number';
        case 42:
        return 'answer for everything';
        case 7:
        return 'prime number'
        default:
        return 'just a number';
    }
};

export default getNumberExplanation;
//#63
const printNumbers = (initialNumber) => {
    let i = initialNumber;
    while (i >= 1) {
      console.log(i);
      i = i - 1;
    }
    console.log('finished!');
  };
  
  export default printNumbers;
  //#64
  const multiplyNumbersFromRange = (first, last) => {
    let i = first;
    let result = 1;

    while (i <= last) {
        result = i * result;
        i = i + 1;
    }
    return result;
};

export default multiplyNumbersFromRange;
//#65
const joinNumbersFromRange = (start, finish) => {
    let i = start;
    let sum = '';
    while (i <= finish) {
        sum = `${sum}${i}`;
        i = i + 1;
    }
    return sum;
};

export default joinNumbersFromRange;
//#66
const printReversedWordBySymbol = (text) => {
    /* let textrev = text.split('').reverse().join('');
     let i = 0;
 
     while (i < textrev.length) {
         console.log(textrev[i]);
         i = i + 1;
     }*/
     
     
     let i = text.length - 1;
 
     while (i >= 0) {
         console.log(text[i]);
         i = i - 1;
     }
 
 };

 export default printReversedWordBySymbol;
 //#67
 const countChars = (text, letter) => {
    let i = 0;
    let count = 0;

    while (i < text.length) {
        if (text[i].toLowerCase() === letter || text[i].toUpperCase() === letter) {
            count = count + 1;
        } 
        i = i + 1;
    }
    return count;
};
export default countChars;
//#68
const even = (text) => {
    let i = 1;
    let finish = '';

    while (i < text.length) {
        finish = `${finish}${text[i]}`;
        i = i + 2;
    }
    return finish;
};
export default even;
//instructor 
const even = (str) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
      if (i % 2 !== 0) {
        result = `${result}${str[i]}`;
      }
      i = i + 1;
    }
  
    return result;
  };
  //#69
  const filterString = (text, letter) => {
    let i = 0;
    let str = '';

    while (i < text.length) {
        if (text[i] !== letter) {
            str += text[i]; 
        }
        i += 1;
    }
    return str;
}; 
export default filterString;
//#70
const makeItFunny = (text, num) => {
    let i = 0;
    let result = '';

    while (i < text.length) {
        if ((i + 1) % num === 0) {
            result = `${result}${text[i].toUpperCase()}`;
        } else {
            result = `${result}${text[i]}`;
        }
        i++;
    }
    return result;
};

export default makeItFunny;
//#71
const hasChar = (text, str) => {
    let i = 0;
    
    while (i < text.length) {
        if (text[i] === str) {
            return true;
        }
        i++;
    }
    return false;
}
export default hasChar;
//#72 pzdc
const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        const nextSymbol = str[i + 1] || '';
        result = `${result}${nextSymbol}${str[i]}`;
    }

    return result;
};

export default encrypt;