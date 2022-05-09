import './style.scss';

const { body } = document;
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');

const formArea = document.createElement('form');
const textArea = document.createElement('textarea');

const textMessage = document.createElement('p');
textMessage.innerText = 'Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: левыe ctrl + alt';

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
    // style: 'meta',
    shiftEn: '~',
    shiftRu: 'Ё',
    capsRu: 'Ё',
  },
  Digit1: {
    english: '1',
    russian: '1',
    shiftEn: '!',
    shiftRu: '!',
  },
  Digit2: {
    english: '2',
    russian: '2',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit3: {
    english: '3',
    russian: '3',
    shiftEn: '#',
    shiftRu: '№',
  },
  Digit4: {
    english: '4',
    russian: '4',
    shiftEn: '$',
    shiftRu: ';',
  },
  Digit5: {
    english: '5',
    russian: '5',
    shiftEn: '%',
    shiftRu: '%',
  },
  Digit6: {
    english: '6',
    russian: '6',
    shiftEn: '^',
    shiftRu: ':',
  },
  Digit7: {
    english: '7',
    russian: '7',
    shiftEn: '&',
    shiftRu: '?',
  },
  Digit8: {
    english: '8',
    russian: '8',
    shiftEn: '*',
    shiftRu: '*',
  },
  Digit9: {
    english: '9',
    russian: '9',
    shiftEn: '(',
    shiftRu: '(',
  },
  Digit0: {
    english: '0',
    russian: '0',
    shiftEn: ')',
    shiftRu: ')',
  },

  Minus: {
    english: '-',
    russian: '-',
    shiftEn: '_',
    shiftRu: '_',
  },
  Equal: {
    english: '=',
    russian: '=',
    shiftEn: '+',
    shiftRu: '+',
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
    shiftEn: 'Q',
    shiftRu: 'Й',
    capsEn: 'Q',
    capsRu: 'Й',
  },
  KeyW: {
    english: 'w',
    russian: 'ц',
    shiftEn: 'W',
    shiftRu: 'Ц',
    capsEn: 'W',
    capsRu: 'Ц',
  },
  KeyE: {
    english: 'e',
    russian: 'у',
    shiftEn: 'E',
    shiftRu: 'У',
    capsEn: 'E',
    capsRu: 'У',
  },
  KeyR: {
    english: 'r',
    russian: 'к',
    shiftEn: 'R',
    shiftRu: 'К',
    capsEn: 'R',
    capsRu: 'К',
  },
  KeyT: {
    english: 't',
    russian: 'е',
    shiftEn: 'T',
    shiftRu: 'Е',
    capsEn: 'T',
    capsRu: 'Е',
  },
  KeyY: {
    english: 'y',
    russian: 'н',
    shiftEn: 'Y',
    shiftRu: 'Н',
    capsEn: 'Y',
    capsRu: 'Н',
  },
  KeyU: {
    english: 'u',
    russian: 'г',
    shiftEn: 'U',
    shiftRu: 'Г',
    capsEn: 'U',
    capsRu: 'Г',
  },
  KeyI: {
    english: 'i',
    russian: 'ш',
    shiftEn: 'I',
    shiftRu: 'Ш',
    capsEn: 'I',
    capsRu: 'Ш',
  },
  KeyO: {
    english: 'o',
    russian: 'щ',
    shiftEn: 'O',
    shiftRu: 'Щ',
    capsEn: 'O',
    capsRu: 'Щ',
  },
  KeyP: {
    english: 'p',
    russian: 'з',
    shiftEn: 'P',
    shiftRu: 'З',
    capsEn: 'P',
    capsRu: 'З',
  },
  BracketLeft: {
    english: '[',
    russian: 'х',
    shiftEn: '{',
    shiftRu: 'Х',
    capsRu: 'Х',
  },
  BracketRight: {
    english: ']',
    russian: 'ъ',
    shiftEn: '}',
    shiftRu: 'Ъ',
    capsRu: 'Ъ',
  },
  Backslash: {
    english: '\\',
    russian: '\\',
    shiftEn: '|',
    shiftRu: '/',
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
    shiftEn: 'A',
    shiftRu: 'Ф',
    capsEn: 'A',
    capsRu: 'Ф',
  },
  KeyS: {
    english: 's',
    russian: 'ы',
    shiftEn: 'S',
    shiftRu: 'Ы',
    capsEn: 'S',
    capsRu: 'Ы',
  },
  KeyD: {
    english: 'd',
    russian: 'в',
    shiftEn: 'D',
    shiftRu: 'В',
    capsEn: 'D',
    capsRu: 'В',
  },
  KeyF: {
    english: 'f',
    russian: 'а',
    shiftEn: 'F',
    shiftRu: 'А',
    capsEn: 'F',
    capsRu: 'А',
  },
  KeyG: {
    english: 'g',
    russian: 'п',
    shiftEn: 'G',
    shiftRu: 'П',
    capsEn: 'G',
    capsRu: 'П',
  },
  KeyH: {
    english: 'h',
    russian: 'р',
    shiftEn: 'H',
    shiftRu: 'Р',
    capsEn: 'H',
    capsRu: 'Р',
  },
  KeyJ: {
    english: 'j',
    russian: 'о',
    shiftEn: 'J',
    shiftRu: 'О',
    capsEn: 'J',
    capsRu: 'О',
  },
  KeyK: {
    english: 'k',
    russian: 'л',
    shiftEn: 'K',
    shiftRu: 'Л',
    capsEn: 'K',
    capsRu: 'Л',
  },
  KeyL: {
    english: 'l',
    russian: 'д',
    shiftEn: 'L',
    shiftRu: 'Д',
    capsEn: 'L',
    capsRu: 'Д',
  },
  Semicolon: {
    english: ';',
    russian: 'ж',
    shiftEn: ':',
    shiftRu: 'Ж',
    capsRu: 'Ж',
  },
  Quote: {
    english: "'",
    russian: 'э',
    shiftEn: '"',
    shiftRu: 'Э',
    capsRu: 'Э',
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
    shiftEn: '|',
    shiftRu: '/',
  },
  KeyZ: {
    english: 'z',
    russian: 'я',
    shiftEn: 'Z',
    shiftRu: 'Я',
    capsEn: 'Z',
    capsRu: 'Я',
  },
  KeyX: {
    english: 'x',
    russian: 'ч',
    shiftEn: 'X',
    shiftRu: 'Ч',
    capsEn: 'X',
    capsRu: 'Ч',
  },
  KeyC: {
    english: 'c',
    russian: 'с',
    shiftEn: 'C',
    shiftRu: 'С',
    capsEn: 'C',
    capsRu: 'С',
  },
  KeyV: {
    english: 'v',
    russian: 'м',
    shiftEn: 'V',
    shiftRu: 'М',
    capsEn: 'V',
    capsRu: 'М',
  },
  KeyB: {
    english: 'b',
    russian: 'и',
    shiftEn: 'B',
    shiftRu: 'И',
    capsEn: 'B',
    capsRu: 'И',
  },
  KeyN: {
    english: 'n',
    russian: 'т',
    shiftEn: 'N',
    shiftRu: 'Т',
    capsEn: 'N',
    capsRu: 'Т',
  },
  KeyM: {
    english: 'm',
    russian: 'ь',
    shiftEn: 'M',
    shiftRu: 'Ь',
    capsEn: 'M',
    capsRu: 'Ь',
  },
  Comma: {
    english: ',',
    russian: 'б',
    shiftEn: '<',
    shiftRu: 'Б',
    capsRu: 'Б',
  },
  Period: {
    english: '.',
    russian: 'ю',
    shiftEn: '>',
    shiftRu: 'Ю',
    capsRu: 'Ю',
  },
  Slash: {
    english: '/',
    russian: '.',
    shiftEn: '?',
    shiftRu: ',',
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

function createKeyboard(shiftPr) {
  const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'english';
  localStorage.setItem('language', language);
  const languageCaps = language === 'english' ? 'capsEn' : 'capsRu';

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
    if (shiftPr === 'ShitPr') {
      if (language === 'russian') {
        keyboardKeys.dataset.key = arrayKeys[i][1].shiftRu
          ? arrayKeys[i][1].shiftRu : arrayKeys[i][1][language];
      } else {
        keyboardKeys.dataset.key = arrayKeys[i][1].shiftEn
          ? arrayKeys[i][1].shiftEn : arrayKeys[i][1][language];
      }
    } else if (localStorage.getItem('capsLock') === '1') {
      if (arrayKeys[i][1][languageCaps]) {
        keyboardKeys.dataset.key = arrayKeys[i][1][languageCaps];
      } else {
        keyboardKeys.dataset.key = arrayKeys[i][1][language];
      }
    } else {
      keyboardKeys.dataset.key = arrayKeys[i][1][language];
    }
    // console.log('arrayKeys[i]', arrayKeys[i][0]);
    const keyCode = arrayKeys[i][0];
    keyboardKeys.dataset.keyCode = keyCode;

    if (localStorage.getItem('mouseShift') === keyboardKeys.dataset.keyCode) {
      keyboardKeys.classList.toggle('active');
    }

    if (localStorage.getItem('capsLock') === '1' && keyboardKeys.dataset.keyCode === 'CapsLock') {
      console.log('hello');
      keyboardKeys.classList.add('active');
    }

    if (shiftPr === 'ShitPr') {
      if (language === 'russian') {
        keyboardKeys.innerHTML = arrayKeys[i][1].shiftRu
          ? arrayKeys[i][1].shiftRu : arrayKeys[i][1][language];
      } else {
        keyboardKeys.innerHTML = arrayKeys[i][1].shiftEn
          ? arrayKeys[i][1].shiftEn : arrayKeys[i][1][language];
      }
    } else if (localStorage.getItem('capsLock') === '1') {
      if (arrayKeys[i][1][languageCaps]) {
        keyboardKeys.innerHTML = arrayKeys[i][1][languageCaps];
      } else {
        keyboardKeys.innerHTML = arrayKeys[i][1][language];
      }
    } else {
      keyboardKeys.innerHTML = arrayKeys[i][1][language];
    }
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
wrapper.appendChild(textMessage);
body.appendChild(wrapper);

const keyboardPlug = keyboardWrapper.getElementsByClassName('keyboard')[0];

function keyUp(event) {
  const keyCode = event.code;
  const hoveredItem = document.querySelector(`div[data-key-code="${keyCode}"]`);
  hoveredItem.classList.remove('active');
}

function keyDown(event) {
  event.preventDefault();
  const keyCode = event.code;
  console.log('event - keyDown', event);
  const hoveredItem = document.querySelector(`div[data-key-code="${keyCode}"]`);
  hoveredItem.classList.add('active');
  if (!event.metaKey) {
    textArea.setRangeText((hoveredItem.className.includes('meta') ? '' : hoveredItem.dataset.key), textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (event.key === 'Tab') {
    event.preventDefault();
    textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (event.key === ' ') {
    textArea.setRangeText(hoveredItem.dataset.key, textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (event.key === 'Backspace') {
    if (textArea.selectionStart) {
      textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
    }
  }
  if (event.key === 'Delete') {
    if (textArea.selectionEnd + 1) {
      textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
    }
  }
  if (event.key === 'Enter') {
    textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (event.key === 'ArrowLeft') {
    if (textArea.selectionStart) {
      textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd - 1, 'start');
    }
  }
  if (event.key === 'ArrowRight') {
    if (textArea.selectionEnd) {
      textArea.setRangeText('', textArea.selectionStart + 1, textArea.selectionEnd + 1, 'end');
    }
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    textArea.setRangeText(hoveredItem.dataset.key, textArea.selectionStart, textArea.selectionEnd, 'end');
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
    } else if ((event.type === 'mouseup') && ((event.target.dataset.keyCode === 'ArrowUp') || (event.target.dataset.keyCode === 'ArrowDown'))) {
      textArea.setRangeText(event.srcElement.dataset.key, textArea.selectionStart, textArea.selectionEnd, 'end');
    } else if (event.type === 'mousedown' && (event.target.dataset.keyCode === 'ShiftRight' || event.target.dataset.keyCode === 'ShiftLeft')) {
      keyboardWrapper.removeChild(keyboardWrapper.lastChild);
      console.log('event.target -- mouse Shift --', event.target.dataset.keyCode);
      localStorage.setItem('mouseShift', event.target.dataset.keyCode);
      const newKeyboard = createKeyboard('ShitPr');
      keyboardWrapper.appendChild(newKeyboard);
    } else if (event.type === 'mouseup' && (event.target.dataset.keyCode === 'ShiftRight' || event.target.dataset.keyCode === 'ShiftLeft')) {
      keyboardWrapper.removeChild(keyboardWrapper.lastChild);
      localStorage.removeItem('mouseShift');
      const newKeyboard = createKeyboard();
      keyboardWrapper.appendChild(newKeyboard);
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

function shiftPress(event) {
  if (event.type === 'keydown') {
    if (event.key === 'Shift' && event.repeat === false) {
      keyboardWrapper.removeChild(keyboardWrapper.lastChild);
      keyboardPlug.removeEventListener('mouseover', hovered, false);
      keyboardPlug.removeEventListener('mousedown', active, false);
      // const languages = localStorage.getItem('language') === 'english' ? 'russian' : 'english';
      // localStorage.setItem('language', languages);
      const newKeyboard = createKeyboard('ShitPr');
      keyboardWrapper.appendChild(newKeyboard);
      const hoveredItem = document.querySelector(`div[data-key-code="${event.code}"]`);
      hoveredItem.classList.add('active');
      // console.log('event.code --- shift ----', event.code);
    }
    document.addEventListener('keyup', shiftPress, false);
  } else if (event.type === 'keyup' && event.key === 'Shift') {
    keyboardWrapper.removeChild(keyboardWrapper.lastChild);
    keyboardPlug.removeEventListener('mouseover', hovered, false);
    keyboardPlug.removeEventListener('mousedown', active, false);
    // const languages = localStorage.getItem('language') === 'english' ? 'russian' : 'english';
    // localStorage.setItem('language', languages);
    const newKeyboard = createKeyboard();
    keyboardWrapper.appendChild(newKeyboard);
  }
  // event.stopPropagation();
  document.addEventListener('keyup', shiftPress, false);
}

function capsPress(event) {
  if (event.type === 'keyup' && event.key === 'CapsLock') {
    keyboardWrapper.removeChild(keyboardWrapper.lastChild);
    keyboardPlug.removeEventListener('mouseover', hovered, false);
    keyboardPlug.removeEventListener('mousedown', active, false);
    // const languages = localStorage.getItem('language') === 'english' ? 'russian' : 'english';
    if (localStorage.getItem('capsLock') === '1') {
      localStorage.setItem('capsLock', '0');
    } else {
      localStorage.setItem('capsLock', '1');
    }
    // localStorage.getItem('capsLock') === 1 ? localStorage.setItem('capsLock', 0) :
    // localStorage.setItem('capsLock', 1);
    // if (localStorage.getItem('capsLock') === 1) {
    //   const newKeyboard = createKeyboard('CapsLock');
    // } else {
    //   const newKeyboard = createKeyboard();
    // }

    const newKeyboard = createKeyboard(localStorage.getItem('capsLock') === '1' ? 'CapsLock' : '');
    keyboardWrapper.appendChild(newKeyboard);
    // const hoveredItem = document.querySelector(`div[data-key-code="${event.code}"]`);
    // hoveredItem.classList.add('active');
  }
  const hoveredItem = document.querySelector(`div[data-key-code="${event.code}"]`);
  hoveredItem.classList.add('active');
  // event.stopPropagation();
  // document.addEventListener('keyup', shiftPress, false);
}

document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', changeLanguage, false);
document.addEventListener('keydown', shiftPress, false);
document.addEventListener('keyup', capsPress, false);

// const keyboardPlug = document.querySelector('keyboard');
// const keyboardPlug = keyboardWrapper.getElementsByClassName('keyboard')[0];
keyboardWrapper.addEventListener('mouseover', hovered, false);
keyboardWrapper.addEventListener('mousedown', active, false);
