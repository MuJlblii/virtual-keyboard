import './style.scss';

const { body } = document;
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');

const formArea = document.createElement('form');
const textArea = document.createElement('textarea');

if (localStorage.getItem('textArea')) {
  textArea.value = localStorage.getItem('textArea');
}
textArea.id = 'text-area';
textArea.cols = 78;
textArea.rows = 6;
// textArea.attributes[0].value = '200';

const keys = {
  Backquote: {
    english: '`',
    russian: 'ё',
    style: 'meta',
  },
  Digit1: {
    english: '1',
    russian: '1',
  },
  Digit2: {
    english: '2',
    russian: '2',
  },
  Digit3: {
    english: '3',
    russian: '3',
  },
  Digit4: {
    english: '4',
    russian: '4',
  },
  Digit5: {
    english: '5',
    russian: '5',
  },
  Digit6: {
    english: '6',
    russian: '6',
  },
  Digit7: {
    english: '7',
    russian: '7',
  },
  Digit8: {
    english: '8',
    russian: '8',
  },
  Digit9: {
    english: '9',
    russian: '9',
  },
  Digit0: {
    english: '0',
    russian: '0',
  },

  Minus: {
    english: '-',
    russian: '-',
  },
  Equal: {
    english: '=',
    russian: '=',
  },
  Backspace: {
    english: 'Backspace',
    russian: 'Backspace',
    style: 'keys-2_25',
  },
  Tab: {
    english: 'Tab',
    russian: 'Tab',
    style: 'keys-1_25',
  },
  KeyQ: {
    english: 'q',
    russian: 'й',
  },
  KeyW: {
    english: 'w',
    russian: 'ц',
  },
  KeyE: {
    english: 'e',
    russian: 'у',
  },
  KeyR: {
    english: 'r',
    russian: 'к',
  },
  KeyT: {
    english: 't',
    russian: 'е',
  },
  KeyY: {
    english: 'y',
    russian: 'н',
  },
  KeyU: {
    english: 'u',
    russian: 'г',
  },
  KeyI: {
    english: 'i',
    russian: 'ш',
  },
  KeyO: {
    english: 'o',
    russian: 'щ',
  },
  KeyP: {
    english: 'p',
    russian: 'з',
  },
  BracketLeft: {
    english: '[',
    russian: 'х',
  },
  BracketRight: {
    english: ']',
    russian: 'ъ',
  },
  Backslash: {
    english: '\\',
    russian: '\\',
  },
  Delete: {
    english: 'DEL',
    russian: 'DEL',
    style: 'meta',
  },
  CapsLock: {
    english: 'Caps Lock',
    russian: 'Caps Lock',
    style: 'keys-2_25',
  },
  KeyA: {
    english: 'a',
    russian: 'ф',
  },
  KeyS: {
    english: 's',
    russian: 'ы',
  },
  KeyD: {
    english: 'd',
    russian: 'в',
  },
  KeyF: {
    english: 'f',
    russian: 'а',
  },
  KeyG: {
    english: 'g',
    russian: 'п',
  },
  KeyH: {
    english: 'h',
    russian: 'р',
  },
  KeyJ: {
    english: 'j',
    russian: 'о',
  },
  KeyK: {
    english: 'k',
    russian: 'л',
  },
  KeyL: {
    english: 'l',
    russian: 'д',
  },
  Semicolon: {
    english: ';',
    russian: 'ж',
  },
  Quote: {
    english: "'",
    russian: 'э',
  },
  Enter: {
    english: 'ENTER',
    russian: 'ENTER',
    style: 'keys-2_25',
  },
  ShiftLeft: {
    english: 'Shift',
    russian: 'Shift',
    style: 'keys-2_25',
  },
  IntlBackslash: {
    english: '\\',
    russian: '\\',
  },
  KeyZ: {
    english: 'z',
    russian: 'я',
  },
  KeyX: {
    english: 'x',
    russian: 'ч',
  },
  KeyC: {
    english: 'c',
    russian: 'с',
  },
  KeyV: {
    english: 'v',
    russian: 'м',
  },
  KeyB: {
    english: 'b',
    russian: 'и',
  },
  KeyN: {
    english: 'n',
    russian: 'т',
  },
  KeyM: {
    english: 'm',
    russian: 'ь',
  },
  Comma: {
    english: ',',
    russian: 'б',
  },
  Period: {
    english: '.',
    russian: 'ю',
  },
  Slash: {
    english: '/',
    russian: '.',
  },
  ArrowUp: {
    english: '▲',
    russian: '▲',
    style: 'meta',
  },
  ShiftRight: {
    english: 'Shift',
    russian: 'Shift',
    style: 'meta',
  },
  ControlLeft: {
    english: 'Ctrl',
    russian: 'Ctrl',
    style: 'keys-1_5',
  },
  MetaLeft: {
    english: 'Win',
    russian: 'Win',
    style: 'meta',
  },
  AltLeft: {
    english: 'Alt',
    russian: 'Alt',
    style: 'meta',
  },
  Space: {
    english: ' ',
    russian: ' ',
    style: 'keys-6',
  },
  AltRight: {
    english: 'Alt',
    russian: 'Alt',
    style: 'meta',
  },
  ControlRight: {
    english: 'Ctrl',
    russian: 'Ctrl',
    style: 'keys-1_5',
  },
  ArrowLeft: {
    english: '◄',
    russian: '◄',
    style: 'meta',
  },
  ArrowDown: {
    english: '▼',
    russian: '▼',
    style: 'meta',
  },
  ArrowRight: {
    english: '►',
    russian: '►',
    style: 'meta',
  },

};

const arrayKeys = Object.entries(keys);

function createKeyboard() {
  const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'english';
  localStorage.setItem('language', language);
  // if (localStorage.getItem('language')) {
  //   let language = localStorage.getItem('language');
  // }
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  let keyboardRow = document.createElement('div');
  keyboardRow.classList.add('key-row');
  for (let i = 0; i < Object.entries(keys).length; i++) {
    if (i === 0) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('key-row');
    } else if (i === 14) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('key-row');
    } else if (i === 29) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('key-row');
    } else if (i === 42) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('key-row');
    } else if (i === 56) {
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('key-row');
    }
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keys');
    if (arrayKeys[i][1].style) {
      keyboardKeys.classList.add(arrayKeys[i][1].style);
      keyboardKeys.classList.add('meta');
    } else {
      keyboardKeys.classList.add('letter');
    }

    keyboardKeys.dataset.key = arrayKeys[i][1][language];
    // console.log('arrayKeys[i]', arrayKeys[i][0]);
    const keyCode = arrayKeys[i][0];
    keyboardKeys.dataset.keyCode = keyCode;
    keyboardKeys.innerHTML = arrayKeys[i][1][language];
    keyboardRow.appendChild(keyboardKeys);

    keyboard.appendChild(keyboardRow);
    //   body.appendChild(keyboard);
  }

  return keyboard;
}

formArea.appendChild(textArea);
keyboardWrapper.appendChild(formArea);
keyboardWrapper.appendChild(createKeyboard());
wrapper.appendChild(keyboardWrapper);
body.appendChild(wrapper);

const keyboardPlug = keyboardWrapper.getElementsByClassName('keyboard')[0];

function keyUp(event) {
  const keyCode = event.code;
  const hoveredItem = document.querySelector(`div[data-key-code="${keyCode}"]`);
  hoveredItem.classList.remove('active');
}

function keyDown(event) {
  const keyCode = event.code;
  console.log('event - keyDown', event);
  const hoveredItem = document.querySelector(`div[data-key-code="${keyCode}"]`);
  hoveredItem.classList.add('active');
  if (event.key === 'Tab') {
    event.preventDefault();
    textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  textArea.focus();
  document.addEventListener('keyup', keyUp, false);
  localStorage.setItem('textArea', textArea.value);
}

function hovered(event) {
  // console.log('target -', event.target);
  // console.log('currentTarget -', event.currentTarget);
  if (event.target.className.includes('keys')) {
    const hoveredItem = event.target;
    // console.log('hovered item -', hoveredItem);
    hoveredItem.classList.toggle('hovered');
  }
  event.stopPropagation();
  keyboardWrapper.addEventListener('mouseout', hovered, false);
}

function active(event) {
  // console.log('event.target', event);
  if (event.target.className.includes('keys')) {
    const hoveredItem = event.target;
    hoveredItem.classList.toggle('active');
    if ((event.type === 'mouseup') && (!event.target.className.includes('meta'))) {
      textArea.setRangeText(event.srcElement.dataset.key, textArea.selectionStart, textArea.selectionEnd, 'end');
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'Backspace')) {
      if (textArea.selectionStart) {
        textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
      }
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'Delete')) {
      if (textArea.selectionEnd + 1) {
        textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
      }
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'Enter')) {
      textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'ArrowLeft')) {
      if (textArea.selectionStart) {
        textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd - 1, 'start');
      }
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'ArrowRight')) {
      if (textArea.selectionEnd) {
        textArea.setRangeText('', textArea.selectionStart + 1, textArea.selectionEnd + 1, 'end');
      }
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'Space')) {
      // if (textArea.selectionEnd) {
      textArea.setRangeText(event.srcElement.dataset.key, textArea.selectionStart, textArea.selectionEnd, 'end');
      // }
    } else if ((event.type === 'mouseup') && (event.target.dataset.keyCode === 'Tab')) {
      textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, 'end');
    }
  }
  localStorage.setItem('textArea', textArea.value);
  textArea.focus();
  event.stopPropagation();
  keyboardWrapper.addEventListener('mouseup', active, false);
}

function changeLanguage(event) {
  if ((event.ctrlKey) && (event.key === 'Alt')) {
    console.log('CHANGE LANGUAGE changeLanguage');
    keyboardWrapper.removeChild(keyboardWrapper.lastChild);
    keyboardPlug.removeEventListener('mouseover', hovered, false);
    keyboardPlug.removeEventListener('mousedown', active, false);
    const languages = localStorage.getItem('language') === 'english' ? 'russian' : 'english';
    localStorage.setItem('language', languages);
    const newKeyboard = createKeyboard();
    keyboardWrapper.appendChild(newKeyboard);
  }
}
document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', changeLanguage, false);

// const keyboardPlug = document.querySelector('keyboard');
// const keyboardPlug = keyboardWrapper.getElementsByClassName('keyboard')[0];
keyboardWrapper.addEventListener('mouseover', hovered, false);
keyboardWrapper.addEventListener('mousedown', active, false);
