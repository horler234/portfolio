let i = 0;
let text = "  Hello, World!";
let speed = 200;
let container = document.getElementsByClassName('header-text');

function typing() {
    if (i < text.length) {
        document.getElementById('hello').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

window.onload = typing();

let shepeTalk = document.getElementById('shepe');
let shepeTalk2 = document.getElementById('shepe2');

function dropDown() {
    if (shepeTalk.className === 'talk') {
        shepeTalk.className += ' stfu';
        document.getElementById('sign').innerHTML = '-';
        document.getElementById('sign').style.color = 'red';
    } else if (shepeTalk.className === 'talk stfu') {
        shepeTalk.className += ' shako';
        document.getElementById('sign').innerHTML = '+';
        document.getElementById('sign').style.color = '#16bd2c';
    } else if (shepeTalk.className === 'talk stfu shako') {
        shepeTalk.className = 'talk stfu';
        document.getElementById('sign').innerHTML = '-';
        document.getElementById('sign').style.color = 'red';
    } else {
        shepeTalk.className = 'talk'
        document.getElementById('sign').innerHTML = '+';
        document.getElementById('sign').style.color = '#16bd2c';
    }
}

function dropDown2() {
    if (shepeTalk2.className === 'talk') {
        shepeTalk2.className += ' stfu';
        document.getElementById('sign2').innerHTML = '-';
        document.getElementById('sign2').style.color = 'red';
    } else if (shepeTalk2.className === 'talk stfu') {
        shepeTalk2.className += ' shako';
        document.getElementById('sign2').innerHTML = '+';
        document.getElementById('sign2').style.color = '#16bd2c';
    } else if (shepeTalk2.className === 'talk stfu shako') {
        shepeTalk2.className = 'talk stfu';
        document.getElementById('sign2').innerHTML = '-';
        document.getElementById('sign2').style.color = 'red';
    } else {
        shepeTalk2.className = 'talk'
        document.getElementById('sign2').innerHTML = '+';
        document.getElementById('sign2').style.color = '#16bd2c';
    }
}

let navo = document.getElementById('navo');

function showMenu() {
    if (navo.className === 'navbar-list') {
        navo.className += ' responsive';
    } else if (navo.className === 'navbar-list responsive') {
        navo.className += ' rest';
    } else if (navo.className === 'navbar-list responsive rest') {
        navo.className = 'navbar-list responsive'
    } else {
        navo.className = 'navbar-list';
    }{
        
    }{
        
    }
}