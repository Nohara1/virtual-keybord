document.body.onload = addElement;

function addElement() {
  const row1 = document.createElement('div');
  row1.className = 'row row--first';
  const row2 = document.createElement('div');
  row2.className = 'row row--second';
  const row3 = document.createElement('div');
  row3.className = 'row row--three';
  const row4 = document.createElement('div');
  row4.className = 'row row--four';
  const row5 = document.createElement('div');
  row5.className = 'row row--five';

  const key1 = document.createElement('div');
  key1.className = 'keyboard--key backquote';
  const key2 = document.createElement('div');
  key2.className = 'keyboard--key digit1';
  const key3 = document.createElement('div');
  key3.className = 'keyboard--key digit2';
  const key4 = document.createElement('div');
  key4.className = 'keyboard--key digit3';
  const key5 = document.createElement('div');
  key5.className = 'keyboard--key digit4';
  const key6 = document.createElement('div');
  key6.className = 'keyboard--key digit5';
  const key7 = document.createElement('div');
  key7.className = 'keyboard--key digit6';
  const key8 = document.createElement('div');
  key8.className = 'keyboard--key digit7';
  const key9 = document.createElement('div');
  key9.className = 'keyboard--key digit8';
  const key10 = document.createElement('div');
  key10.className = 'keyboard--key digit9';
  const key11 = document.createElement('div');
  key11.className = 'keyboard--key digit0';
  const key12 = document.createElement('div');
  key12.className = 'keyboard--key minus';
  const key13 = document.createElement('div');
  key13.className = 'keyboard--key equal';
  const key14 = document.createElement('div');
  key14.className = 'keyboard--key backspace';
  const key15 = document.createElement('div');
  key15.className = 'keyboard--key tab';
  const key16 = document.createElement('div');
  key16.className = 'keyboard--key q';
  const key17 = document.createElement('div');
  key17.className = 'keyboard--key w';
  const key18 = document.createElement('div');
  key18.className = 'keyboard--key e';
  const key19 = document.createElement('div');
  key19.className = 'keyboard--key r';
  const key20 = document.createElement('div');
  key20.className = 'keyboard--key t';
  const key21 = document.createElement('div');
  key21.className = 'keyboard--key y';
  const key22 = document.createElement('div');
  key22.className = 'keyboard--key u';
  const key23 = document.createElement('div');
  key23.className = 'keyboard--key i';
  const key24 = document.createElement('div');
  key24.className = 'keyboard--key o';
  const key25 = document.createElement('div');
  key25.className = 'keyboard--key p';
  const key26 = document.createElement('div');
  key26.className = 'keyboard--key caseLeft';
  const key27 = document.createElement('div');
  key27.className = 'keyboard--key caseRight';
  const key28 = document.createElement('div');
  key28.className = 'keyboard--key del';
  const key29 = document.createElement('div');
  key29.className = 'keyboard--key caps';
  const key30 = document.createElement('div');
  key30.className = 'keyboard--key a';
  const key31 = document.createElement('div');
  key31.className = 'keyboard--key s';
  const key32 = document.createElement('div');
  key32.className = 'keyboard--key d';
  const key33 = document.createElement('div');
  key33.className = 'keyboard--key f';
  const key34 = document.createElement('div');
  key34.className = 'keyboard--key g';
  const key35 = document.createElement('div');
  key35.className = 'keyboard--key h';
  const key36 = document.createElement('div');
  key36.className = 'keyboard--key j';
  const key37 = document.createElement('div');
  key37.className = 'keyboard--key k';
  const key38 = document.createElement('div');
  key38.className = 'keyboard--key l';
  const key39 = document.createElement('div');
  key39.className = 'keyboard--key semicolon';
  const key40 = document.createElement('div');
  key40.className = 'keyboard--key quote';
  const key41 = document.createElement('div');
  key41.className = 'keyboard--key enter';
  const key42 = document.createElement('div');
  key42.className = 'keyboard--key shiftLeft';
  const key43 = document.createElement('div');
  key43.className = 'keyboard--key z';
  const key44 = document.createElement('div');
  key44.className = 'keyboard--key x';
  const key45 = document.createElement('div');
  key45.className = 'keyboard--key c';
  const key46 = document.createElement('div');
  key46.className = 'keyboard--key v';
  const key47 = document.createElement('div');
  key47.className = 'keyboard--key b';
  const key48 = document.createElement('div');
  key48.className = 'keyboard--key n';
  const key49 = document.createElement('div');
  key49.className = 'keyboard--key m';
  const key50 = document.createElement('div');
  key50.className = 'keyboard--key comma';
  const key51 = document.createElement('div');
  key51.className = 'keyboard--key period';
  const key52 = document.createElement('div');
  key52.className = 'keyboard--key slash';
  const key53 = document.createElement('div');
  key53.className = 'keyboard--key arrowUp';
  const key54 = document.createElement('div');
  key54.className = 'keyboard--key shiftRight';
  const key55 = document.createElement('div');
  key55.className = 'keyboard--key ctrlLeft';
  const key56 = document.createElement('div');
  key56.className = 'keyboard--key win';
  const key57 = document.createElement('div');
  key57.className = 'keyboard--key altLeft';
  const key58 = document.createElement('div');
  key58.className = 'keyboard--key space';
  const key59 = document.createElement('div');
  key59.className = 'keyboard--key altRight';
  const key60 = document.createElement('div');
  key60.className = 'keyboard--key arrowLeft';
  const key61 = document.createElement('div');
  key61.className = 'keyboard--key arrowDown';
  const key62 = document.createElement('div');
  key62.className = 'keyboard--key arrowRight';
  const key63 = document.createElement('div');
  key63.className = 'keyboard--key ctrlRight';




const backquote = document.createElement('span');
backquote.className = 'key';
backquote.innerHTML = '`';
key1.appendChild(backquote);
const one = document.createElement('span');
one.className = 'key';
one.innerHTML = '1';
key2.appendChild(one);
const two = document.createElement('span');
two.className = 'key';
two.innerHTML = '2';
key3.appendChild(two);
const three = document.createElement('span');
three.className = 'key';
three.innerHTML = '3';
key4.appendChild(three);
const four = document.createElement('span');
four.className = 'key';
four.innerHTML = '4';
key5.appendChild(four);
const five = document.createElement('span');
five.className = 'key';
five.innerHTML = '5';
key6.appendChild(five);
const six = document.createElement('span');
six.className = 'key';
six.innerHTML = '6';
key7.appendChild(six);
const seven = document.createElement('span');
seven.className = 'key';
seven.innerHTML = '7';
key8.appendChild(seven);
const eight = document.createElement('span');
eight.className = 'key';
eight.innerHTML = 8;
key9.appendChild(eight);
const nine = document.createElement('span');
nine.className = 'key';
nine.innerHTML = '9';
key10.appendChild(nine);
const zero = document.createElement('span');
zero.className = 'key';
zero.innerHTML = '7';
key11.appendChild(zero);
const minuses = document.createElement('span');
minuses.className = 'key';
minuses.innerHTML = '-';
key12.appendChild(minuses);
const rovno = document.createElement('span');
rovno.className = 'key';
rovno.innerHTML = '=';
key13.appendChild(rovno);
const backspace = document.createElement('span');
backspace.className = 'keyBackspace';
backspace.innerHTML = 'Backspace';
key14.appendChild(backspace);
const tab = document.createElement('span');
tab.className = 'keyBackspace';
tab.innerHTML = 'Tab';
key15.appendChild(tab);
const q = document.createElement('span');
q.className = 'key';
q.innerHTML = 'q';
key16.appendChild(q);
const w = document.createElement('span');
w.className = 'key';
w.innerHTML = 'w';
key17.appendChild(w);
const e = document.createElement('span');
e.className = 'key';
e.innerHTML = 'e';
key18.appendChild(e);
const r = document.createElement('span');
r.className = 'key';
r.innerHTML = 'r';
key19.appendChild(r);
const t = document.createElement('span');
t.className = 'key';
t.innerHTML = 't';
key20.appendChild(t);
const y = document.createElement('span');
y.className = 'key';
y.innerHTML = 'y';
key21.appendChild(y);
const u = document.createElement('span');
u.className = 'key';
u.innerHTML = 'u';
key22.appendChild(u);
const i = document.createElement('span');
i.className = 'key';
i.innerHTML = 'i';
key23.appendChild(i);
const o = document.createElement('span');
o.className = 'key';
o.innerHTML = 'o';
key24.appendChild(o);
const p = document.createElement('span');
p.className = 'key';
p.innerHTML = 'p';
key25.appendChild(p);
const caseLeft = document.createElement('span');
caseLeft.className = 'key';
caseLeft.innerHTML = '[';
key26.appendChild(caseLeft);
const caseRight = document.createElement('span');
caseRight.className = 'key';
caseRight.innerHTML = ']';
key27.appendChild(caseRight);
const del = document.createElement('span');
del.className = 'keyBackspace';
del.innerHTML = 'Del';
key28.appendChild(del);
const caps = document.createElement('span');
caps.className = 'keyBackspace';
caps.innerHTML = 'CapsLock';
key29.appendChild(caps);
const a = document.createElement('span');
a.className = 'key';
a.innerHTML = 'a';
key30.appendChild(a);
const s = document.createElement('span');
s.className = 'key';
s.innerHTML = 's';
key31.appendChild(s);
const d = document.createElement('span');
d.className = 'key';
d.innerHTML = 'd';
key32.appendChild(d);
const f = document.createElement('span');
f.className = 'key';
f.innerHTML = 'f';
key33.appendChild(f);
const g = document.createElement('span');
g.className = 'key';
g.innerHTML = 'g';
key34.appendChild(g);
const h = document.createElement('span');
h.className = 'key';
h.innerHTML = 'h';
key35.appendChild(h);
const j = document.createElement('span');
j.className = 'key';
j.innerHTML = 'j';
key36.appendChild(j);
const k = document.createElement('span');
k.className = 'key';
k.innerHTML = 'k';
key37.appendChild(k);
const l = document.createElement('span');
l.className = 'key';
l.innerHTML = 'l';
key38.appendChild(l);
const  semicolon = document.createElement('span');
semicolon.className = 'key';
semicolon.innerHTML = ';';
key39.appendChild(semicolon);
const  quote = document.createElement('span');
quote.className = 'key';
quote.innerHTML = "'";
key40.appendChild(quote);
const  enter = document.createElement('span');
enter.className = 'keyBackspace';
enter.innerHTML = "Enter";
key41.appendChild(enter);
const  shift = document.createElement('span');
shift.className = 'keyBackspace';
shift.innerHTML = "Shift";
key42.appendChild(shift);
const  z = document.createElement('span');
z.className = 'key';
z.innerHTML = "z";
key43.appendChild(z);
const  x = document.createElement('span');
x.className = 'key';
x.innerHTML = "x";
key44.appendChild(x);
const  c = document.createElement('span');
c.className = 'key';
c.innerHTML = "c";
key45.appendChild(c);
const  v = document.createElement('span');
v.className = 'key';
v.innerHTML = "v";
key46.appendChild(v);
const  b = document.createElement('span');
b.className = 'key';
b.innerHTML = "b";
key47.appendChild(b);
const  n = document.createElement('span');
n.className = 'key';
n.innerHTML = "n";
key48.appendChild(n);
const  m = document.createElement('span');
m.className = 'key';
m.innerHTML = "m";
key49.appendChild(m);
const  comma = document.createElement('span');
comma.className = 'key';
comma.innerHTML = ",";
key50.appendChild(comma);
const  period = document.createElement('span');
period.className = 'key';
period.innerHTML = ".";
key51.appendChild(period);
const  slash = document.createElement('span');
slash.className = 'key';
slash.innerHTML = "/";
key52.appendChild(slash);
const  arrowUp = document.createElement('span');
arrowUp.className = 'keyBackspace';
arrowUp.innerHTML = "&#8657;";
key53.appendChild(arrowUp);
const  shiftRight = document.createElement('span');
shiftRight.className = 'keyBackspace';
shiftRight.innerHTML = "Shift";
key54.appendChild(shiftRight);
const  ctrl = document.createElement('span');
ctrl.className = 'keyBackspace';
ctrl.innerHTML = "Ctrl";
key55.appendChild(ctrl);
const  win = document.createElement('span');
win.className = 'keyBackspace';
win.innerHTML = "Win";
key56.appendChild(win);
const  alt = document.createElement('span');
alt.className = 'keyBackspace';
alt.innerHTML = "Alt";
key57.appendChild(alt);
const  altRi = document.createElement('span');
altRi.className = 'keyBackspace';
altRi.innerHTML = "Alt";
key59.appendChild(altRi);
const  arrowLeft = document.createElement('span');
arrowLeft.className = 'keyBackspace';
arrowLeft.innerHTML = "&#8656;";
key60.appendChild(arrowLeft);
const  arrowDown = document.createElement('span');
arrowDown.className = 'keyBackspace';
arrowDown.innerHTML = "&#8659;";
key61.appendChild(arrowDown);
const  arrowRight = document.createElement('span');
arrowRight.className = 'keyBackspace';
arrowRight.innerHTML = "&#8658;";
key62.appendChild(arrowRight);
const  ctrlR = document.createElement('span');
ctrlR.className = 'keyBackspace';
ctrlR.innerHTML = "Ctrl";
key63.appendChild(ctrlR);



  const keys5 = [key55,key56,key57,key58,
    key59,key60,key61,key62,key63,];
  const keys4 = [key42,key43,key44,key45,key46,key47,key48,
    key49,key50,key51,key52,key53,key54];
  const keys3 = [key29,key30,key31,key32,key33,key34,key35,
    key36,key37,key38,key39,key40,key41];
  const keys2 = [key15,key16,key17,key18,key19,key20,key21,
    key22,key23,key24,key25,key26,key27,key28];
  const keys = [key1, key2, key3, key4, key5, key6, key7,
    key8, key9, key10, key11, key12, key13, key14];
  const rows = [row1, row2, row3, row4, row5];

  
  for(let i = 0; i < keys.length; i++){
  keys[i].addEventListener('mouseover', () =>{
    keys[i].classList.add('keyUp')
  });
};
for(let i = 0; i < keys.length; i++){
  keys[i].addEventListener('mouseout', () =>{
    keys[i].classList.remove('keyUp')
  });
};
for(let i = 0; i < keys2.length; i++){
  keys2[i].addEventListener('mouseover', () =>{
    keys2[i].classList.add('keyUp')
  });
};
for(let i = 0; i < keys2.length; i++){
  keys2[i].addEventListener('mouseout', () =>{
    keys2[i].classList.remove('keyUp')
  });
};


  const main = document.createElement('div');
  const mainTittle = document.createElement('p');
  const textArea = document.createElement('textarea');
  const keyboard = document.createElement('div');

  keyboard.className = 'main-keyboard';
  textArea.className = 'main-area';
  main.className = 'main';
  mainTittle.className = 'main-tittle';

  const currentMain = document.getElementById('div1');
  document.body.insertBefore(main, currentMain);

  main.appendChild(mainTittle);
  main.appendChild(textArea);
  main.appendChild(keyboard);

  keyboard.appendChild(rows[0]);
  rows[0].appendChild(keys[0]);
  rows[0].appendChild(keys[1]);
  rows[0].appendChild(keys[2]);
  rows[0].appendChild(keys[3]);
  rows[0].appendChild(keys[4]);
  rows[0].appendChild(keys[5]);
  rows[0].appendChild(keys[6]);
  rows[0].appendChild(keys[7]);
  rows[0].appendChild(keys[8]);
  rows[0].appendChild(keys[9]);
  rows[0].appendChild(keys[10]);
  rows[0].appendChild(keys[11]);
  rows[0].appendChild(keys[12]);
  rows[0].appendChild(keys[13]);
  keyboard.appendChild(rows[1]);
  rows[1].appendChild(keys2[0]);
  rows[1].appendChild(keys2[1]);
  rows[1].appendChild(keys2[2]);
  rows[1].appendChild(keys2[3]);
  rows[1].appendChild(keys2[4]);
  rows[1].appendChild(keys2[5]);
  rows[1].appendChild(keys2[6]);
  rows[1].appendChild(keys2[7]);
  rows[1].appendChild(keys2[8]);
  rows[1].appendChild(keys2[9]);
  rows[1].appendChild(keys2[10]);
  rows[1].appendChild(keys2[11]);
  rows[1].appendChild(keys2[12]);
  rows[1].appendChild(keys2[13]);
  keyboard.appendChild(rows[2]);
  rows[2].appendChild(keys3[0]);
  rows[2].appendChild(keys3[1]);
  rows[2].appendChild(keys3[2]);
  rows[2].appendChild(keys3[3]);
  rows[2].appendChild(keys3[4]);
  rows[2].appendChild(keys3[5]);
  rows[2].appendChild(keys3[6]);
  rows[2].appendChild(keys3[7]);
  rows[2].appendChild(keys3[8]);
  rows[2].appendChild(keys3[9]);
  rows[2].appendChild(keys3[10]);
  rows[2].appendChild(keys3[11]);
  rows[2].appendChild(keys3[12]);
  keyboard.appendChild(rows[3]);
  rows[3].appendChild(keys4[0]);
  rows[3].appendChild(keys4[1]);
  rows[3].appendChild(keys4[2]);
  rows[3].appendChild(keys4[3]);
  rows[3].appendChild(keys4[4]);
  rows[3].appendChild(keys4[5]);
  rows[3].appendChild(keys4[6]);
  rows[3].appendChild(keys4[7]);
  rows[3].appendChild(keys4[8]);
  rows[3].appendChild(keys4[9]);
  rows[3].appendChild(keys4[10]);
  rows[3].appendChild(keys4[11]);
  rows[3].appendChild(keys4[12]);
  keyboard.appendChild(rows[4]);
  rows[4].appendChild(keys5[0]);
  rows[4].appendChild(keys5[1]);
  rows[4].appendChild(keys5[2]);
  rows[4].appendChild(keys5[3]);
  rows[4].appendChild(keys5[4]);
  rows[4].appendChild(keys5[5]);
  rows[4].appendChild(keys5[6]);
  rows[4].appendChild(keys5[7]);
  rows[4].appendChild(keys5[8]);
 
document.addEventListener('keydown', (event) =>{
  if(event.key === "a"){
    textArea.appendChild(document.createTextNode('a'));
  };
  if(event.key === "1"){
    textArea.appendChild(document.createTextNode('1'));
  };
  if(event.key === "2"){
    textArea.appendChild(document.createTextNode('2'));
  };
  if(event.key === "3"){
    textArea.appendChild(document.createTextNode('3'));
  };
  if(event.key === "4"){
    textArea.appendChild(document.createTextNode('4'));
  };
  if(event.key === "6"){
    textArea.appendChild(document.createTextNode('6'));
  };
  if(event.key === "7"){
    textArea.appendChild(document.createTextNode('7'));
  };
  if(event.key === "8"){
    textArea.appendChild(document.createTextNode('8'));
  };
  if(event.key === "9"){
    textArea.appendChild(document.createTextNode('9'));
  };
  if(event.key === "0"){
    textArea.appendChild(document.createTextNode('0'));
  };
  if(event.key === "-"){
    textArea.appendChild(document.createTextNode('-'));
  };
  if(event.key === "="){
    textArea.appendChild(document.createTextNode('='));
  };
  if(event.key === "q"){
    textArea.appendChild(document.createTextNode('q'));
  };
  if(event.key === "w"){
    textArea.appendChild(document.createTextNode('w'));
  };
  if(event.key === "e"){
    textArea.appendChild(document.createTextNode('e'));
  };
  if(event.key === "r"){
    textArea.appendChild(document.createTextNode('r'));
  };
  if(event.key === "t"){
    textArea.appendChild(document.createTextNode('t'));
  };
  if(event.key === "y"){
    textArea.appendChild(document.createTextNode('y'));
  };
  if(event.key === "u"){
    textArea.appendChild(document.createTextNode('u'));
  };
  if(event.key === "i"){
    textArea.appendChild(document.createTextNode('i'));
  };
  if(event.key === "o"){
    textArea.appendChild(document.createTextNode('o'));
  };
  if(event.key === "p"){
    textArea.appendChild(document.createTextNode('p'));
  };
  if(event.key === "["){
    textArea.appendChild(document.createTextNode('['));
  };
  if(event.key === "]"){
    textArea.appendChild(document.createTextNode(']'));
  };
  if(event.key === "s"){
    textArea.appendChild(document.createTextNode('s'));
  };
  if(event.key === "d"){
    textArea.appendChild(document.createTextNode('s'));
  };
  if(event.key === "f"){
    textArea.appendChild(document.createTextNode('f'));
  };
  if(event.key === "g"){
    textArea.appendChild(document.createTextNode('g'));
  };
  if(event.key === "h"){
    textArea.appendChild(document.createTextNode('h'));
  };
  if(event.key === "j"){
    textArea.appendChild(document.createTextNode('j'));
  };
  if(event.key === "k"){
    textArea.appendChild(document.createTextNode('k'));
  };
  if(event.key === "l"){
    textArea.appendChild(document.createTextNode('l'));
  };
  if(event.key === ";"){
    textArea.appendChild(document.createTextNode(';'));
  };
  if(event.key === "'"){
    textArea.appendChild(document.createTextNode("'"));
  };
  if(event.key === "z"){
    textArea.appendChild(document.createTextNode("z"));
  };
  if(event.key === "x"){
    textArea.appendChild(document.createTextNode("x"));
  };
  if(event.key === "c"){
    textArea.appendChild(document.createTextNode("c"));
  };
  if(event.key === "v"){
    textArea.appendChild(document.createTextNode("v"));
  };
  if(event.key === "b"){
    textArea.appendChild(document.createTextNode("b"));
  };
  if(event.key === "n"){
    textArea.appendChild(document.createTextNode("n"));
  };
  if(event.key === "m"){
    textArea.appendChild(document.createTextNode("m"));
  };
  if(event.key === ","){
    textArea.appendChild(document.createTextNode(","));
  };
  if(event.key === "."){
    textArea.appendChild(document.createTextNode("."));
  };
  if(event.key === "/"){
    textArea.appendChild(document.createTextNode("/"));
  };

  document.addEventListener('keydown', (event) =>{
    if(event.key === "1"){
      key2.classList.add('keyUp')
    };
    if(event.key === "2"){
      key3.classList.add('keyUp')
    };
    if(event.key === "3"){
      key4.classList.add('keyUp')
    };
    if(event.key === "4"){
      key5.classList.add('keyUp')
    };
    if(event.key === "5"){
      key6.classList.add('keyUp')
    };
    if(event.key === "6"){
      key7.classList.add('keyUp')
    };
    if(event.key === "7"){
      key8.classList.add('keyUp')
    };
    if(event.key === "8"){
      key9.classList.add('keyUp')
    };
    if(event.key === "9"){
      key10.classList.add('keyUp')
    };
    if(event.key === "0"){
      key11.classList.add('keyUp')
    };
    if(event.key === "-"){
      key12.classList.add('keyUp')
    };
    if(event.key === "="){
      key13.classList.add('keyUp')
    };
    if(event.key === "Backspace"){
      key14.classList.add('keyUp')
    };
    if(event.key === "Tab"){
      key15.classList.add('keyUp')
    };
    if(event.key === "q"){
      key16.classList.add('keyUp')
    };
    if(event.key === "w"){
      key17.classList.add('keyUp')
    };
    if(event.key === "e"){
      key18.classList.add('keyUp')
    };
    if(event.key === "r"){
      key19.classList.add('keyUp')
    };
    if(event.key === "t"){
      key20.classList.add('keyUp')
    };
    if(event.key === "y"){
      key21.classList.add('keyUp')
    };
    if(event.key === "u"){
      key22.classList.add('keyUp')
    };
    if(event.key === "i"){
      key23.classList.add('keyUp')
    };
    if(event.key === "o"){
      key24.classList.add('keyUp')
    };
    if(event.key === "p"){
      key25.classList.add('keyUp')
    };
    if(event.key === "["){
      key26.classList.add('keyUp')
    };
    if(event.key === "]"){
      key27.classList.add('keyUp')
    };
    if(event.key === "CapsLock"){
      key29.classList.add('keyUp')
    };
    if(event.key === "a"){
      key30.classList.add('keyUp')
    };
    if(event.key === "s"){
      key31.classList.add('keyUp')
    };
    if(event.key === "d"){
      key32.classList.add('keyUp')
    };
    if(event.key === "f"){
      key33.classList.add('keyUp')
    };
    if(event.key === "g"){
      key34.classList.add('keyUp')
    };
    if(event.key === "h"){
      key35.classList.add('keyUp')
    };
    if(event.key === "j"){
      key36.classList.add('keyUp')
    };
    if(event.key === "k"){
      key37.classList.add('keyUp')
    };
    if(event.key === "l"){
      key38.classList.add('keyUp')
    };
    if(event.key === ";"){
      key39.classList.add('keyUp')
    };
    if(event.key === "'"){
      key40.classList.add('keyUp')
    };
    if(event.key === "Enter"){
      key41.classList.add('keyUp')
    };
    if(event.code === "ShiftLeft"){
      key42.classList.add('keyUp')
    };
    if(event.key === "z"){
      key43.classList.add('keyUp')
    };
    if(event.key === "x"){
      key44.classList.add('keyUp')
    };
    if(event.key === "c"){
      key45.classList.add('keyUp')
    };
    if(event.key === "v"){
      key46.classList.add('keyUp')
    };
    if(event.key === "b"){
      key47.classList.add('keyUp')
    };
    if(event.key === "n"){
      key48.classList.add('keyUp')
    };
    if(event.key === "m"){
      key49.classList.add('keyUp')
    };
    if(event.key === ","){
      key50.classList.add('keyUp')
    };
    if(event.key === "."){
      key51.classList.add('keyUp')
    };
    if(event.key === "/"){
      key52.classList.add('keyUp')
    };
    if(event.key === "ArrowUp"){
      key53.classList.add('keyUp')
    };
    if(event.code === "ShiftRight"){
      key54.classList.add('keyUp')
    };
    if(event.code === "ControlLeft"){
      key55.classList.add('keyUp')
    };
    if(event.code === "MetaLeft"){
      key56.classList.add('keyUp')
    };
    if(event.code === "AltLeft"){
      key57.classList.add('keyUp')
    };
    if(event.code === "Space"){
      key58.classList.add('keyUp')
    };
    if(event.code === "AltRight"){
      key59.classList.add('keyUp')
    };
    if(event.code === "ArrowLeft"){
      key60.classList.add('keyUp')
    };
    if(event.code === "ArrowDown"){
      key61.classList.add('keyUp')
    };
    if(event.code === "ArrowRight"){
      key62.classList.add('keyUp')
    };
    if(event.code === "ControlRight"){
      key63.classList.add('keyUp')
    };







    });
    document.addEventListener('keyup', (event) =>{
      if(event.key === "1"){
        key2.classList.remove('keyUp')
      };
      if(event.key === "2"){
        key3.classList.remove('keyUp')
      };
      if(event.key === "3"){
        key4.classList.remove('keyUp')
      };
      if(event.key === "4"){
        key5.classList.remove('keyUp')
      };
      if(event.key === "5"){
        key6.classList.remove('keyUp')
      };
      if(event.key === "6"){
        key7.classList.remove('keyUp')
      };
      if(event.key === "7"){
        key8.classList.remove('keyUp')
      };
      if(event.key === "8"){
        key9.classList.remove('keyUp')
      };
      if(event.key === "9"){
        key10.classList.remove('keyUp')
      };
      if(event.key === "0"){
        key11.classList.remove('keyUp')
      };
      if(event.key === "-"){
        key12.classList.remove('keyUp')
      };
      if(event.key === "="){
        key13.classList.remove('keyUp')
      };
      if(event.key === "Backspace"){
        key14.classList.remove('keyUp')
      };
      if(event.key === "Tab"){
        key15.classList.remove('keyUp')
      };
      if(event.key === "q"){
        key16.classList.remove('keyUp')
      };
      if(event.key === "w"){
        key17.classList.remove('keyUp')
      };
      if(event.key === "e"){
        key18.classList.remove('keyUp')
      };
      if(event.key === "r"){
        key19.classList.remove('keyUp')
      };
      if(event.key === "t"){
        key20.classList.remove('keyUp')
      };
      if(event.key === "y"){
        key21.classList.remove('keyUp')
      };
      if(event.key === "u"){
        key22.classList.remove('keyUp')
      };
      if(event.key === "i"){
        key23.classList.remove('keyUp')
      };
      if(event.key === "o"){
        key24.classList.remove('keyUp')
      };
      if(event.key === "p"){
        key25.classList.remove('keyUp')
      };
      if(event.key === "["){
        key26.classList.remove('keyUp')
      };
      if(event.key === "]"){
        key27.classList.remove('keyUp')
      };
      if(event.key === "a"){
        key30.classList.remove('keyUp')
      };
      if(event.key === "s"){
        key31.classList.remove('keyUp')
      };
      if(event.key === "d"){
        key32.classList.remove('keyUp')
      };
      if(event.key === "f"){
        key33.classList.remove('keyUp')
      };
      if(event.key === "g"){
        key34.classList.remove('keyUp')
      };
      if(event.key === "h"){
        key35.classList.remove('keyUp')
      };
      if(event.key === "j"){
        key36.classList.remove('keyUp')
      };
      if(event.key === "k"){
        key37.classList.remove('keyUp')
      };
      if(event.key === "l"){
        key38.classList.remove('keyUp')
      };
      if(event.key === ";"){
        key39.classList.remove('keyUp')
      };
      if(event.key === "'"){
        key40.classList.remove('keyUp')
      };
      if(event.key === "Enter"){
        key41.classList.remove('keyUp')
      };
      if(event.code === "ShiftLeft"){
        key42.classList.remove('keyUp')
      };
      if(event.key === "z"){
        key43.classList.remove('keyUp')
      };
      if(event.key === "x"){
        key44.classList.remove('keyUp')
      };
      if(event.key === "c"){
        key45.classList.remove('keyUp')
      };
      if(event.key === "v"){
        key46.classList.remove('keyUp')
      };
      if(event.key === "b"){
        key47.classList.remove('keyUp')
      };
      if(event.key === "n"){
        key48.classList.remove('keyUp')
      };
      if(event.key === "m"){
        key49.classList.remove('keyUp')
      };
      if(event.key === ","){
        key50.classList.remove('keyUp')
      };
      if(event.key === "."){
        key51.classList.remove('keyUp')
      };
      if(event.key === "/"){
        key52.classList.remove('keyUp')
      };
      if(event.key === "ArrowUp"){
        key53.classList.remove('keyUp')
      };
      if(event.code === "ShiftRight"){
        key54.classList.remove('keyUp')
      };
      if(event.code === "ControlLeft"){
        key55.classList.remove('keyUp')
      };
      if(event.code === "MetaLeft"){
        key56.classList.remove('keyUp')
      };
      if(event.code === "AltLeft"){
        key57.classList.remove('keyUp')
      };
      if(event.code === "Space"){
        key58.classList.remove('keyUp')
      };
      if(event.code === "AltRight"){
        key59.classList.remove('keyUp')
      };
      if(event.code === "ArrowLeft"){
        key60.classList.remove('keyUp')
      };
      if(event.code === "ArrowDown"){
        key61.classList.remove('keyUp')
      };
      if(event.code === "ArrowRight"){
        key62.classList.remove('keyUp')
      };
      if(event.code === "ControlRight"){
        key63.classList.remove('keyUp')
      };
      });
  


  if(event.key === "Backspace"){
    textArea.removeChild(textArea.lastChild);
  }
    
  });


  mainTittle.innerText = 'RSS Virtual KeyBoard';
}
