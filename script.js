/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

if(pin.length >= 4) return;

pin += num;

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function clearPin(){

pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function checkPin(){

if(pin === "1707"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

document.getElementById("music")
.play().catch(()=>{});

}else{

alert("Wrong PIN 💕");

pin="";

document.getElementById("pinInput")
.value="";

}

}

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("bottleSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING PINK HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "💕";

heart.style.position="fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top="-30px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,700);

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(120vh);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.5);
}

100%{
opacity:0;
transform:
translate(var(--x),var(--y))
scale(1.5)
rotate(360deg);
}

}

`;

document.head.appendChild(style);

/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

if(bottleOpened) return;

bottleOpened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowerBurst();

setTimeout(()=>{

bottle.style.display="none";

document.getElementById(
"letterContainer"
).style.display="block";

typeLetter();

},1500);

}

function createFlowerBurst(){

const flowers =
document.getElementById("flowers");

const emojis = [
"💕","💖","🌸","🌷","✨","💫"
];

for(let i=0;i<40;i++){

const flower =
document.createElement("div");

flower.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

flower.style.position =
"absolute";

flower.style.left = "0px";
flower.style.top = "0px";

flower.style.fontSize =
(Math.random()*15+25)+"px";

flower.style.setProperty(
"--x",
(Math.random()*700-350)+"px"
);

flower.style.setProperty(
"--y",
(-Math.random()*450-50)+"px"
);

flower.style.animation =
"flowerBurst 2.5s forwards";

flowers.appendChild(flower);

setTimeout(()=>{
flower.remove();
},2500);

}

}

/* =========================
   LETTER
========================= */

const message = `

hi leia,

i don't really know
the perfect way
to say all of this.

that's why
i made this little place.

maybe because
some feelings
are easier to write
than to speak.

for a while now,

you've been someone
special to me.

you became a part
of my day
without even trying.

sometimes it's your smile.

sometimes it's the way
you talk.

sometimes it's just knowing
that you're there.

and somehow,

those little things
started meaning
more than i expected.

i tried convincing myself
that maybe it was just admiration.

but the more time passed,

the more i realized

that what i feel for you

is something much deeper.

you make ordinary days
feel a little brighter.

you make me smile
without even knowing it.

and whenever
something good happens,

you're one of the first people
i want to tell.

i don't know
what the future looks like.

i don't know
if you'll feel the same way.

but i know one thing.

if i never told you,

i would regret it.

so today,

i just want to be honest.

i like you, leia.

more than a friend.

more than a passing feeling.

`;

const message2 = `

i like your smile.

i like your personality.

i like the way
you make me feel.

and if one day

you decide
to give me a chance,

i promise
i'll treasure it.

but even if your answer
isn't what i secretly hope for,

thank you.

thank you
for being someone

who became
a beautiful part
of my story.

you may not realize it,

but you've given me
so many reasons
to smile.

and honestly,

that's one of the reasons
why i fell for you.

maybe this confession
won't change anything.

maybe it will.

but at least now,

you know the truth.

the truth that
i've been carrying
inside my heart.

and that truth is simple.

i like you.

a lot.

with all my sincerity,

Kai 💕

`;

function typeLetter(){

const target =
document.getElementById("letterText");

target.innerHTML="";

const fullMessage =
message + message2;

let i = 0;

const typing =
setInterval(()=>{

target.innerHTML +=
fullMessage.charAt(i);

i++;

if(i >= fullMessage.length){

clearInterval(typing);

}

},5);

}

/* =========================
   QUIZ
========================= */

let currentQuestion = 0;

const questions =
document.querySelectorAll(".question");

function checkAnswer(button,correct){

if(!correct){

alert("Try again 💕");
return;

}

questions[currentQuestion]
.classList.remove("active");

currentQuestion++;

if(currentQuestion < questions.length){

questions[currentQuestion]
.classList.add("active");

}else{

document.getElementById("quizSuccess")
.classList.remove("hidden");

createConfetti();

document.getElementById("quizSuccess")
.scrollIntoView({
behavior:"smooth"
});

}

}

/* =========================
   SPECIAL PHOTO EFFECT
========================= */

function createConfetti(){

for(let i=0;i<180;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
[
"💕",
"💖",
"🌸",
"🌷",
"✨",
"💫",
"💗"
][
Math.floor(Math.random()*7)
];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
(Math.random()*20+15)+"px";

confetti.style.zIndex =
"99999";

confetti.style.animation =
`fall ${Math.random()*5+5}s linear`;

confetti.style.pointerEvents =
"none";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},10000);

}

}
