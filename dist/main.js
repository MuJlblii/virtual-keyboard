(()=>{"use strict";const{body:e}=document,t=document.createElement("div");t.classList.add("wrapper");const s=document.createElement("div");s.classList.add("keyboard-wrapper");const n=document.createElement("form"),a=document.createElement("textarea"),i=document.createElement("p");i.innerText="Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: левыe ctrl + alt",localStorage.getItem("textArea")&&(a.value=localStorage.getItem("textArea")),a.id="text-area",a.cols=78,a.rows=6;const l={Backquote:{english:"`",russian:"ё",shiftEn:"~",shiftRu:"Ё",capsRu:"Ё"},Digit1:{english:"1",russian:"1",shiftEn:"!",shiftRu:"!"},Digit2:{english:"2",russian:"2",shiftEn:"@",shiftRu:'"'},Digit3:{english:"3",russian:"3",shiftEn:"#",shiftRu:"№"},Digit4:{english:"4",russian:"4",shiftEn:"$",shiftRu:";"},Digit5:{english:"5",russian:"5",shiftEn:"%",shiftRu:"%"},Digit6:{english:"6",russian:"6",shiftEn:"^",shiftRu:":"},Digit7:{english:"7",russian:"7",shiftEn:"&",shiftRu:"?"},Digit8:{english:"8",russian:"8",shiftEn:"*",shiftRu:"*"},Digit9:{english:"9",russian:"9",shiftEn:"(",shiftRu:"("},Digit0:{english:"0",russian:"0",shiftEn:")",shiftRu:")"},Minus:{english:"-",russian:"-",shiftEn:"_",shiftRu:"_"},Equal:{english:"=",russian:"=",shiftEn:"+",shiftRu:"+"},Backspace:{english:"Backspace",russian:"Backspace",style:"keys-2_25"},Tab:{english:"Tab",russian:"Tab",style:"keys-1_25"},KeyQ:{english:"q",russian:"й",shiftEn:"Q",shiftRu:"Й",capsEn:"Q",capsRu:"Й"},KeyW:{english:"w",russian:"ц",shiftEn:"W",shiftRu:"Ц",capsEn:"W",capsRu:"Ц"},KeyE:{english:"e",russian:"у",shiftEn:"E",shiftRu:"У",capsEn:"E",capsRu:"У"},KeyR:{english:"r",russian:"к",shiftEn:"R",shiftRu:"К",capsEn:"R",capsRu:"К"},KeyT:{english:"t",russian:"е",shiftEn:"T",shiftRu:"Е",capsEn:"T",capsRu:"Е"},KeyY:{english:"y",russian:"н",shiftEn:"Y",shiftRu:"Н",capsEn:"Y",capsRu:"Н"},KeyU:{english:"u",russian:"г",shiftEn:"U",shiftRu:"Г",capsEn:"U",capsRu:"Г"},KeyI:{english:"i",russian:"ш",shiftEn:"I",shiftRu:"Ш",capsEn:"I",capsRu:"Ш"},KeyO:{english:"o",russian:"щ",shiftEn:"O",shiftRu:"Щ",capsEn:"O",capsRu:"Щ"},KeyP:{english:"p",russian:"з",shiftEn:"P",shiftRu:"З",capsEn:"P",capsRu:"З"},BracketLeft:{english:"[",russian:"х",shiftEn:"{",shiftRu:"Х",capsRu:"Х"},BracketRight:{english:"]",russian:"ъ",shiftEn:"}",shiftRu:"Ъ",capsRu:"Ъ"},Backslash:{english:"\\",russian:"\\",shiftEn:"|",shiftRu:"/"},Delete:{english:"DEL",russian:"DEL",style:"meta"},CapsLock:{english:"Caps Lock",russian:"Caps Lock",style:"keys-2_25"},KeyA:{english:"a",russian:"ф",shiftEn:"A",shiftRu:"Ф",capsEn:"A",capsRu:"Ф"},KeyS:{english:"s",russian:"ы",shiftEn:"S",shiftRu:"Ы",capsEn:"S",capsRu:"Ы"},KeyD:{english:"d",russian:"в",shiftEn:"D",shiftRu:"В",capsEn:"D",capsRu:"В"},KeyF:{english:"f",russian:"а",shiftEn:"F",shiftRu:"А",capsEn:"F",capsRu:"А"},KeyG:{english:"g",russian:"п",shiftEn:"G",shiftRu:"П",capsEn:"G",capsRu:"П"},KeyH:{english:"h",russian:"р",shiftEn:"H",shiftRu:"Р",capsEn:"H",capsRu:"Р"},KeyJ:{english:"j",russian:"о",shiftEn:"J",shiftRu:"О",capsEn:"J",capsRu:"О"},KeyK:{english:"k",russian:"л",shiftEn:"K",shiftRu:"Л",capsEn:"K",capsRu:"Л"},KeyL:{english:"l",russian:"д",shiftEn:"L",shiftRu:"Д",capsEn:"L",capsRu:"Д"},Semicolon:{english:";",russian:"ж",shiftEn:":",shiftRu:"Ж",capsRu:"Ж"},Quote:{english:"'",russian:"э",shiftEn:'"',shiftRu:"Э",capsRu:"Э"},Enter:{english:"ENTER",russian:"ENTER",style:"keys-2_25"},ShiftLeft:{english:"Shift",russian:"Shift",style:"keys-2_25"},IntlBackslash:{english:"\\",russian:"\\",shiftEn:"|",shiftRu:"/"},KeyZ:{english:"z",russian:"я",shiftEn:"Z",shiftRu:"Я",capsEn:"Z",capsRu:"Я"},KeyX:{english:"x",russian:"ч",shiftEn:"X",shiftRu:"Ч",capsEn:"X",capsRu:"Ч"},KeyC:{english:"c",russian:"с",shiftEn:"C",shiftRu:"С",capsEn:"C",capsRu:"С"},KeyV:{english:"v",russian:"м",shiftEn:"V",shiftRu:"М",capsEn:"V",capsRu:"М"},KeyB:{english:"b",russian:"и",shiftEn:"B",shiftRu:"И",capsEn:"B",capsRu:"И"},KeyN:{english:"n",russian:"т",shiftEn:"N",shiftRu:"Т",capsEn:"N",capsRu:"Т"},KeyM:{english:"m",russian:"ь",shiftEn:"M",shiftRu:"Ь",capsEn:"M",capsRu:"Ь"},Comma:{english:",",russian:"б",shiftEn:"<",shiftRu:"Б",capsRu:"Б"},Period:{english:".",russian:"ю",shiftEn:">",shiftRu:"Ю",capsRu:"Ю"},Slash:{english:"/",russian:".",shiftEn:"?",shiftRu:","},ArrowUp:{english:"▲",russian:"▲",style:"meta"},ShiftRight:{english:"Shift",russian:"Shift",style:"meta"},ControlLeft:{english:"Ctrl",russian:"Ctrl",style:"keys-1_5"},MetaLeft:{english:"Win",russian:"Win",style:"meta"},AltLeft:{english:"Alt",russian:"Alt",style:"meta"},Space:{english:" ",russian:" ",style:"keys-6"},AltRight:{english:"Alt",russian:"Alt",style:"meta"},ControlRight:{english:"Ctrl",russian:"Ctrl",style:"keys-1_5"},ArrowLeft:{english:"◄",russian:"◄",style:"meta"},ArrowDown:{english:"▼",russian:"▼",style:"meta"},ArrowRight:{english:"►",russian:"►",style:"meta"}},o=Object.entries(l);function c(e){const t=localStorage.getItem("language")?localStorage.getItem("language"):"english";localStorage.setItem("language",t);const s="english"===t?"capsEn":"capsRu",n=document.createElement("div");n.classList.add("keyboard");let a=document.createElement("div");a.classList.add("key-row");for(let i=0;i<Object.entries(l).length;i++){(0===i||14===i||29===i||42===i||56===i)&&(a=document.createElement("div"),a.classList.add("key-row"));const l=document.createElement("div");l.classList.add("keys"),o[i][1].style?(l.classList.add(o[i][1].style),l.classList.add("meta")):l.classList.add("letter"),"ShiftPr"===e?l.dataset.key="russian"===t?o[i][1].shiftRu?o[i][1].shiftRu:o[i][1][t]:o[i][1].shiftEn?o[i][1].shiftEn:o[i][1][t]:"1"===localStorage.getItem("capsLock")&&o[i][1][s]?l.dataset.key=o[i][1][s]:l.dataset.key=o[i][1][t];const c=o[i][0];l.dataset.keyCode=c,localStorage.getItem("mouseShift")===l.dataset.keyCode&&l.classList.toggle("active"),"1"===localStorage.getItem("capsLock")&&"CapsLock"===l.dataset.keyCode&&l.classList.add("active"),"ShiftPr"===e?l.innerHTML="russian"===t?o[i][1].shiftRu?o[i][1].shiftRu:o[i][1][t]:o[i][1].shiftEn?o[i][1].shiftEn:o[i][1][t]:"1"===localStorage.getItem("capsLock")&&o[i][1][s]?l.innerHTML=o[i][1][s]:l.innerHTML=o[i][1][t],a.appendChild(l),n.appendChild(a)}return n}n.appendChild(a),s.appendChild(n),s.appendChild(c()),t.appendChild(s),t.appendChild(i),e.appendChild(t);const r=s.getElementsByClassName("keyboard")[0];function u(e){const t=e.code,s=document.querySelector(`div[data-key-code="${t}"]`);s.classList.remove("active"),"1"===localStorage.getItem("capsLock")&&"CapsLock"===s.dataset.keyCode&&s.classList.add("active")}function d(e){e.target.className.includes("keys")&&e.target.classList.toggle("hovered"),e.stopPropagation(),s.addEventListener("mouseout",d,!1)}function h(e){if(e.target.className.includes("keys"))if(e.target.classList.toggle("active"),"mouseup"!==e.type||e.target.className.includes("meta"))if("mouseup"===e.type&&"Backspace"===e.target.dataset.keyCode)a.selectionStart&&a.setRangeText("",a.selectionStart-1,a.selectionEnd,"end");else if("mouseup"===e.type&&"Delete"===e.target.dataset.keyCode)a.selectionEnd+1&&a.setRangeText("",a.selectionStart,a.selectionEnd+1,"end");else if("mouseup"===e.type&&"Enter"===e.target.dataset.keyCode)a.setRangeText("\n",a.selectionStart,a.selectionEnd,"end");else if("mouseup"===e.type&&"ArrowLeft"===e.target.dataset.keyCode)a.selectionStart&&a.setRangeText("",a.selectionStart-1,a.selectionEnd-1,"start");else if("mouseup"===e.type&&"ArrowRight"===e.target.dataset.keyCode)a.selectionEnd&&a.setRangeText("",a.selectionStart+1,a.selectionEnd+1,"end");else if("mouseup"===e.type&&"Space"===e.target.dataset.keyCode)a.setRangeText(e.srcElement.dataset.key,a.selectionStart,a.selectionEnd,"end");else if("mouseup"===e.type&&"Tab"===e.target.dataset.keyCode)a.setRangeText("    ",a.selectionStart,a.selectionEnd,"end");else if("mouseup"!==e.type||"ArrowUp"!==e.target.dataset.keyCode&&"ArrowDown"!==e.target.dataset.keyCode)if("mousedown"!==e.type||"ShiftRight"!==e.target.dataset.keyCode&&"ShiftLeft"!==e.target.dataset.keyCode)if("mouseup"!==e.type||"ShiftRight"!==e.target.dataset.keyCode&&"ShiftLeft"!==e.target.dataset.keyCode){if("mouseup"===e.type&&"CapsLock"===e.target.dataset.keyCode){s.removeChild(s.lastChild),"1"===localStorage.getItem("capsLock")?localStorage.setItem("capsLock","0"):localStorage.setItem("capsLock","1");const e=c("1"===localStorage.getItem("capsLock")?"CapsLock":"");s.appendChild(e)}}else{s.removeChild(s.lastChild),localStorage.removeItem("mouseShift");const e=c();s.appendChild(e)}else{s.removeChild(s.lastChild),localStorage.setItem("mouseShift",e.target.dataset.keyCode);const t=c("ShiftPr");s.appendChild(t)}else a.setRangeText(e.srcElement.dataset.key,a.selectionStart,a.selectionEnd,"end");else a.setRangeText(e.srcElement.dataset.key,a.selectionStart,a.selectionEnd,"end");localStorage.setItem("textArea",a.value),a.focus(),e.stopPropagation(),s.addEventListener("mouseup",h,!1)}document.addEventListener("keydown",(function(e){e.preventDefault();const t=e.code,s=document.querySelector(`div[data-key-code="${t}"]`);s.classList.add("active"),e.metaKey||a.setRangeText(s.className.includes("meta")?"":s.dataset.key,a.selectionStart,a.selectionEnd,"end"),"Tab"===e.key&&(e.preventDefault(),a.setRangeText("    ",a.selectionStart,a.selectionEnd,"end"))," "===e.key&&a.setRangeText(s.dataset.key,a.selectionStart,a.selectionEnd,"end"),"Backspace"===e.key&&a.selectionStart&&a.setRangeText("",a.selectionStart-1,a.selectionEnd,"end"),"Delete"===e.key&&a.selectionEnd+1&&a.setRangeText("",a.selectionStart,a.selectionEnd+1,"end"),"Enter"===e.key&&a.setRangeText("\n",a.selectionStart,a.selectionEnd,"end"),"ArrowLeft"===e.key&&a.selectionStart&&a.setRangeText("",a.selectionStart-1,a.selectionEnd-1,"start"),"ArrowRight"===e.key&&a.selectionEnd&&a.setRangeText("",a.selectionStart+1,a.selectionEnd+1,"end"),"ArrowDown"!==e.key&&"ArrowUp"!==e.key||a.setRangeText(s.dataset.key,a.selectionStart,a.selectionEnd,"end"),a.focus(),document.addEventListener("keyup",u,!1),localStorage.setItem("textArea",a.value)}),!1),document.addEventListener("keyup",(function(e){if(e.ctrlKey&&"Alt"===e.key){s.removeChild(s.lastChild),r.removeEventListener("mouseover",d,!1),r.removeEventListener("mousedown",h,!1);const e="english"===localStorage.getItem("language")?"russian":"english";localStorage.setItem("language",e);const t=c();s.appendChild(t)}}),!1),document.addEventListener("keydown",(function e(t){if("keydown"===t.type){if("Shift"===t.key&&!1===t.repeat){s.removeChild(s.lastChild),r.removeEventListener("mouseover",d,!1),r.removeEventListener("mousedown",h,!1);const e=c("ShiftPr");s.appendChild(e),document.querySelector(`div[data-key-code="${t.code}"]`).classList.add("active")}document.addEventListener("keyup",e,!1)}else if("keyup"===t.type&&"Shift"===t.key){s.removeChild(s.lastChild),r.removeEventListener("mouseover",d,!1),r.removeEventListener("mousedown",h,!1);const e=c();s.appendChild(e)}document.addEventListener("keyup",e,!1)}),!1),document.addEventListener("keyup",(function(e){if("keyup"===e.type&&"CapsLock"===e.key){s.removeChild(s.lastChild),r.removeEventListener("mouseover",d,!1),r.removeEventListener("mousedown",h,!1),"1"===localStorage.getItem("capsLock")?localStorage.setItem("capsLock","0"):localStorage.setItem("capsLock","1");const e=c("1"===localStorage.getItem("capsLock")?"CapsLock":"");s.appendChild(e)}}),!1),s.addEventListener("mouseover",d,!1),s.addEventListener("mousedown",h,!1)})();
//# sourceMappingURL=main.js.map