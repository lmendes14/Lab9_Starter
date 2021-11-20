// binder.js

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

window.addEventListener('DOMContentLoaded', init);

async function init() {
  const buttons = document.querySelector('#error-btns');
  const butn_calc = document.querySelector('#calculate');

  const butn_log = buttons.childNodes[1];
  const butn_err = buttons.childNodes[3];
  const butn_count = buttons.childNodes[5];
  const butn_warn = buttons.childNodes[7];
  const butn_assert = buttons.childNodes[9];
  const butn_clear = buttons.childNodes[11];
  const butn_dir = buttons.childNodes[13];
  const butn_dirxml = buttons.childNodes[15];
  const butn_grp_start = buttons.childNodes[17];
  const butn_grp_end = buttons.childNodes[19];
  const butn_table = buttons.childNodes[21];
  const butn_tmr_start = buttons.childNodes[23];
  const butn_tmr_end = buttons.childNodes[25];
  const butn_trace = buttons.childNodes[27];
  const butn_globalerr = buttons.childNodes[29];

  butn_log.addEventListener('click', logDemo);
  butn_err.addEventListener('click', errDemo);
  butn_count.addEventListener('click', countDemo);
  butn_warn.addEventListener('click', warnDemo);
  butn_assert.addEventListener('click', assertDemo);
  butn_clear.addEventListener('click', clearDemo);
  butn_dir.addEventListener('click', dirDemo);
  butn_dirxml.addEventListener('click', dirxmlDemo);
  butn_grp_start.addEventListener('click', grpStartDemo);
  butn_grp_end.addEventListener('click', grpEndDemo);
  butn_table.addEventListener('click', tableDemo);
  butn_tmr_start.addEventListener('click', tmrStartDemo);
  butn_tmr_end.addEventListener('click', tmrEndDemo);
  butn_trace.addEventListener('click', handleBtnClick);
  butn_globalerr.addEventListener('click', throwError);

  window.onerror = function () {
    console.log('Sadly an error happened my friend');
  }

  let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;

      // Regex to determine if secondNum is a number
      if (!/^\d+$/.test(secondNum)){
        throw new CustomError('Invalid type!!!');
        return;
      }

      let operator = document.querySelector('#operator').value;
      try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`); 
      }catch (error) {
        throw error;
      }finally {
        setTimeout(() => {
          console.log('reached finally block');
        }, 100);
      }
    });

}


function throwError() {
  if (true){
    const boom = 1;
  }
  console.log(boom);
} 

function handleBtnClick () {
  deep();
}

function deep () {
  deeper();
}
 
function deeper () {
  deepest();
}

function deepest () {
  console.trace();
}

function tmrEndDemo () {
  console.timeEnd('Timer Button');
}

function tmrStartDemo () {
  console.time('Timer Button');
}

function tableDemo () {
  console.table([
    {
      name: 'Software Engineering',
      num: 110
    },
    {
      name: 'Programming Languages: Principles and Paradigms',
      num: 130
    },
    {
      name: 'Advanced Software Engineering',
      num: 112
    }
  ]);
}

function grpEndDemo () {
  console.groupEnd('console.group');
}

function grpStartDemo () {
  console.group('console.group');
}

function dirxmlDemo () {
  console.dirxml(document.querySelector('#error-btns').childNodes[15]);
}

function dirDemo () {
  console.dir(document.querySelector('#error-btns').childNodes[13]);
}

function clearDemo () {
  console.clear();
}

function assertDemo () {
  const number = 2;
  const errorMsg = 'The number does not equal 3';
  console.assert(number === 3, {number, errorMsg});
}

function warnDemo () {
  console.warn("Console Warn Button");
}

function countDemo () {
  console.count("Count Button");
}

function errDemo () {
  console.error("Console Error Demo");
}

function logDemo () {
  console.log("Console Log Demo");
}