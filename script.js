// js code

const bar1 = document.getElementById('barNumOne');
const bar2 = document.getElementById('barNumTwo');
const bar3 = document.getElementById('barNumThree');
const bar4 = document.getElementById('barNumFour');
const bar5 = document.getElementById('barNumFive');
const bar6 = document.getElementById('barNumSix');
const bar7 = document.getElementById('barNumSeven');

const bars = document.querySelectorAll('.barOfWeek');

const price1 = document.getElementById('barOfNothing1');
const price2 = document.getElementById('barOfNothing2');
const price3 = document.getElementById('barOfNothing3');
const price4 = document.getElementById('barOfNothing4');
const price5 = document.getElementById('barOfNothing5');
const price6 = document.getElementById('barOfNothing6');
const price7 = document.getElementById('barOfNothing7');

// const now = new Date();
// const nowDays = now.getDay() - 1;

// console.log(nowDays);

const infoOfJson = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
];

bar1.style.height = `${infoOfJson[0].amount * 3}px`;
bar2.style.height = `${infoOfJson[1].amount * 3}px`;
bar3.style.height = `${infoOfJson[2].amount * 3}px`;
bar4.style.height = `${infoOfJson[3].amount * 3}px`;
bar5.style.height = `${infoOfJson[4].amount * 3}px`;
bar6.style.height = `${infoOfJson[5].amount * 3}px`;
bar7.style.height = `${infoOfJson[6].amount * 3}px`;

// const kos = bars[nowDays].style.backgroundColor = 'hsl(186, 34%, 60%)';

const cyan = "#76B5BC";
const fadedCyan = "#B4E0E5";

// Highlight current day with a different color
const weekDayIndex = (new Date().getDay() - 1 + 7) % 7;
const currBar = document.querySelectorAll(".barOfWeek")[weekDayIndex];
currBar.style.backgroundColor = cyan;
currBar.onmouseover = () => (currBar.style.backgroundColor = fadedCyan);
currBar.onmouseout = () => (currBar.style.backgroundColor = cyan);

bar1.addEventListener('mouseenter' , () => {
  price1.style.display = 'flex';
});

bar1.addEventListener('mouseout' , () => {
  price1.style.display = 'none';
});

bar2.addEventListener('mouseenter' , () => {
  price2.style.display = 'flex';
});

bar2.addEventListener('mouseout' , () => {
  price2.style.display = 'none';
});

bar3.addEventListener('mouseenter' , () => {
  price3.style.display = 'flex';
});

bar3.addEventListener('mouseout' , () => {
  price3.style.display = 'none';
});

bar4.addEventListener('mouseenter' , () => {
  price4.style.display = 'flex';
});

bar4.addEventListener('mouseout' , () => {
  price4.style.display = 'none';
});

bar5.addEventListener('mouseenter' , () => {
  price5.style.display = 'flex';
});

bar5.addEventListener('mouseout' , () => {
  price5.style.display = 'none';
});

bar6.addEventListener('mouseenter' , () => {
  price6.style.display = 'flex';
});

bar6.addEventListener('mouseout' , () => {
  price6.style.display = 'none';
});

bar7.addEventListener('mouseenter' , () => {
  price7.style.display = 'flex';
});

bar7.addEventListener('mouseout' , () => {
  price7.style.display = 'none';
});