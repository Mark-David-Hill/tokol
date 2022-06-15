import { getData, capitalize, display, getEl} from './modules/util.js'

// 
// To do: 
// Minimum/default value of 4.7 for Weapon Power
// Validation before running
// Error Message if not ready
// Set up json character data so I can quickly test lots of different characters at once.
// 

getData('char.json', onLoad);

// 
// On Load
// 

function onLoad(data, localData) {
    // displayCards(data);
    displayData(data);
}


const modEl = document.getElementById('modValue');

function getWpnMod(str, wpnPow, pa) {
    const mod = (pa - str) /wpnPow;
    console.log('Modifier:');
    console.log(mod);
    modEl.innerText = `Mod: ${mod}`
    return mod
}

// Get weapon power modifier based on known STR, Weapon Power, and Physical Attack Power
function wpnModTest() {
    // Make sure weapon power is at least 4.7 (value when unarmed)
    console.log('element: ')
    console.log(this);
    const strEl = this.querySelector('input[name="str"]');
    const wpnPowEl = this.querySelector('input[name="wpnPow"]');
    const paEl = this.querySelector('input[name="pa"]');
    const str = strEl.value;
    let wpnPow = wpnPowEl.value;
    const pa = paEl.value;
    // console.log(strEl);
    // console.log(str);
    // console.log(wpnPow);
    // console.log(pa);

    if (wpnPow < 4.7) {
        wpnPow = 4.7
    }
    const mod = (pa -str) /wpnPow;
    console.log('Modifier:');
    console.log(mod);
    modEl.innerText = `Mod: ${mod}`
    return mod
}


let form = document.getElementById('form')
form.addEventListener('blur', wpnModTest, true);


// PA = STR + Math.round(wpnPow * classMod);

// PA - STR = Math.round(wpnPow * classMod);

// (PA - STR) / wpnPow;

function getExpectedPA(str, wpnPow, classMod) {
    let pa = str + Math.round(wpnPow * classMod);
    return pa
}



// 
// Display Data
// 

function displayData(data) {
    // ClassMod
    let classMod = data.witch3Mod;
    // Class
    const characters = data.witch3
    const target = getEl('test');
    let charClasses = data.charClasses;

    


    let content = '';
    // Content Open
    content += `<div class="album py-5 bg-light">
                    <div class="row">
                        <h2>Characters</h2>`
        
    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        const name = "name";
        const str = char.str;
        const wpnPow = char.wpnPow;
        const pa = char.pa;
        

        let expectedPA = getExpectedPA(str, wpnPow, classMod)

        let result = "";
        if(pa === expectedPA) {
            result = "PA matches!"
        }
        else {
            result = "PA doesn't match."
        }

        const calcWpnMod = getWpnMod(str, wpnPow, pa);
        let modResult = "";
        if(classMod === calcWpnMod) {
            modResult = "The Mod matches!"
        }
        else {
            modResult = "Mod doesn't match."
        }

        content += `<div class="col-6 col-sm-3">
                        <div class="card">
                            <div class="row">
                                <p>${name}</p>
                                <p>STR:${str} wpnPow:${wpnPow} pa:${pa}</p>
                                <p>Expected PA: ${expectedPA}
                                <p>${result}</p>
                                <p>Expected Mod: ${classMod}</p>
                                <p>Calculated Mod: ${calcWpnMod}</p>
                                <p>${modResult}</p>
                            </div>
                        </div>
                    </div>`;
    }

    // Content Close
    content += `</div>
                    </div>`

    // Display Content
    display(target, content);
}