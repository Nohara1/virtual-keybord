document.body.onload = addElement;

function addElement() {
  const row1 = document.createElement('div');
  row1.className = 'row row--first';
  // keyboard.appendChild(row1);
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

  const keys = [key1, key2, key3, key4, key5, key6, key7,
    key8, key9, key10, key11, key12, key13, key14];
  const rows = [row1, row2, row3, row4, row5];

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
  keyboard.appendChild(rows[2]);
  keyboard.appendChild(rows[3]);
  keyboard.appendChild(rows[4]);
  // const rowFirst = document.createElement('div');
  // rowFirst.className = 'row'
  // keyboard.appendChild(rowFirst);

  mainTittle.innerText = 'RSS Virtual KeyBoard';
}
