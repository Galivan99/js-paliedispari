
// Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

var user_word = prompt("Inserisci una parola per verificare se è palindroma").toLowerCase();

var word_reverse = pal_word(user_word);

console.log(word_reverse);

if (word_reverse == user_word)
{
    alert ('La parola è palindroma');
}
else
{
    alert ('La parola non è palindroma');
}

// Funzione per invertire la parola

function pal_word(word)
{
    var word_palindrome = [""];
    for (var i = word.length - 1; i >=0; i--)
    {   
        word_palindrome += word [i];
    }
  return word_palindrome;
}

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var odd_even = prompt('Scegli pari o dispari?').toLowerCase();

var number = parseInt(prompt('indica un numero da 1 a 5 : '));

var final_number = (number + random_generator(5));
console.log(final_number);

if (odd_even == 'pari' && even(final_number) == true)
{
 alert('Hai vinto !!');
}
else if (odd_even == 'dispari' && even(final_number) == false) 
{
  alert('Hai vinto !!');
}
else 
{
  alert('Hai perso !!');
}

function random_generator(max) 
{
    return Math.floor(Math.random() * (max) + 1);
}

function even (numero)
{
    if (numero % 2 == 0) 
    {
      return true;
    }
    else
    {
      return false;
    }
}