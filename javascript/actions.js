var p = document.getElementById("paragrapheLorem");

p.style.color = "blue";
console.log(p);

//JQuery : 2 syntaxes utulisées
//jQuery();


var idem_p = $('#paragrapheLorem');
//$('');
//sélecteurs
idem_p.css('color', "cyan");
//$('.blue').css('color', "yellow"); /* <=>  */

//var mavarListeBleue = document.getElementsByClassName(".blue");

//console.log(mavarListeBleue[0].length());

//idem_p.css('color', "pink")
var listeParams = document.getElementsByTagName('p');

//listeParams[0].css('color', 'green');


// for(param  of listeParams)
// {
//     param.add
// }

let para = document.querySelectorAll('p');

para.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('hello');
    })
})

//$('p').css('color', 'darkgreen');
//$('p'):nth- ;
/*
$('p').on('click', function() {
    alert("Click sur le paragraphe n° ");
});
*/
$('p:odd').css('color', 'black');
$('p:even').css('color', 'pink');
//$('p:first').css("background-color", "yellow");
//$('p:last').css('color', "red");

console.log($('p').last().offset().top);
console.log($('p').last().offset().left);

//$('p').first().

console.log($('p').first().position());

//let para = document.querySelectorAll('p');

para.forEach((item) => {
    item.addEventListener('click', () => {
        //console.log('hello');
        alert("Click sur le paragraphe n° " + item);
    })
});

/**********************************************************/

// VanillaJs
// var p = document.getElementById('monP');

// p.style.color = "blue";

// Jquery
//jQuery() //
//$()		 // même chose

// sélécteurs
// p {

// }

// .blue {

// }

// #monP

// $('#monP')
// $('.blue')
// $('p')

// $("#monP")
// $(".blue")
// $("p")

// let maVar = "L'eau est belle";
// maVar = 'L'eau est belle';

// var p = document.getElementById('monP');
// p.style.color = "blue";

// var b = $('#monP');
// b.css('color', 'blue');

// $('#monP').css('color', 'blue');

// $('p').css('color', 'blue');
// $('p:nth-child(2)').css('color', 'red');

// $('p').on('click', function(){
// 	console.log("On a cliqué");
// });

// $('p').on('click')

// function nomdelafonction(){}

// function(){}

// function addition(val1, val2, val3)

$('p').on('click', function() {
    // mes instructions
    // Autant que je le souhaite
});


//  Sélection TOUS les P
//  Ajoute la classe BLUE
$('p').addClass('blue');

// retire la classe blue de tous les P
$('p').removeClass('blue');

$('p:nth-child(1)').hasClass('blue');

// first() : sélectionne le premier élément
$('p').first().hasClass('blue');

// last() : sélectionne le dernier élément
$('p').last().hasClass('blue');

/**
 * hasClass() = vérifie si la classe existe sur un élement
 * renvoie : true or false
 */
let isTrue = $('p, a').hasClass('blue');

// si la variable isTrue est fausse
if (!isTrue)
    $('p').first().addClass('blue') // ajouter la classe blue
else // sinon
    $('p').first().removeClass('blue'); // supprimer la classe blue

// si la variable isTrue est vraie
if (isTrue)
    $('p').first().removeClass('blue'); // supp. la classe blue
else // sinon
    $('p').first().addClass('blue'); // ajout la classe blue


$('p').first().height(); // hauteur d'un élément (px)
$('p').first().width(); // largeur d'un élément (px)
/*$('p').forEach((item) => {
    console.log("$$$ ANTON - " + item);

});*/

$('#show').click(function() {
    //$('p').show(1000);
    $('p').slideUp();
    console.log("SHOW");
});
$('#hide').click(function() {
    //$('p').hide(3000);
    $('p').slideDown();
    console.log("HIDE");
});



$('#showhide').click(function() {
    //$('p').hide(3000);
    console.log("TOGGLE");
    $('p').stop();
    //$('p').toggle(200);
    $('p').slideToggle(1000);
});


/*
$('#showhide').click(function() {
    console.log("HIDE");
    //$('p').stop();
    //$('p').toogle(3000);
    //var i = 0;

    //$('p').fadeTo(300, 0.2)
    $('p').toggle(300);
});
*/


/*
// Connaître la position d'un élément dans la page
// offset();
$('p').last().offset(); // affichera un tableau avec top et left

$('p').last().offset().top; // affiche la valeur du top
$('p').last().offset().left; // affiche la valeur du left


// Définir la position d'un élément dans la page
// offset(params)
$('p').first().offset({ top: 50, left: 45 });

$('p').first().position();
$('p').first().position().top;
$('p').first().position().left;



let presente = $('p').first().hasClass('blue')

if (presente)
    $('p').first().removeClass('blue');
else
    $('p').first().addClass('blue');


$('p').first().toggleClass('blue');


// $('p').on('click', function(){
// 	console.log("L'utilisateur à clické");
// })

// function aClicke()
// {
// 	console.log("L'utilisateur à clické");
// }

// $('p:nth-child(2)').on('click', aClicke())


//   Fonction qui permet d'écouter l'évènement du click
//   Comme pour addEventListener
$('p').on('click', function() {
    console.log("L'utilisateur à clické");
});




// Fonction équivalente à la fonction ON
$('p').first().click(afficheMessage())


//   Fonction qui peut être appelée directement
//   à partir du HTML grâce à onClick 
function afficheMessage() {
    console.log("L'utilisateur à clické");
}
*/