// Things That Affect PA:
// Unaccounted for: status effects, weapon element
// Not affected by: terrain, emblems, level, luck, mental gague
// Get base phys attack power bonus from being unarmed? 5?

// PA: Physical Attack Power
// PD: Physical Defense
// SA: Spell Attack Power
// SD: Spell Defense

// classMod = either unarmed modifier or weapon modifier
// PA = str + weaponPow + typeMod

// TypeMod- Weapons proficiency. base of +3, +4, or +5. Low, medium, or high (Hawkman gets extra bonus for some reason, which scales up with higher powered weapons?). Determines adjustment to PA (based on weapon type equipped).

// What happens if a 1-handed weapon and a short bow are equipped together? How does that affect PA?
// Displayed PA is equal to higher value of 2 equipped weapons. Test for actual calculations later!
// Does ideal weapon vs non-ideal weapon equipped affect PA? No! Doesn't seem to

// Swords are supposd to be the ideal weapon for soldiers. Equipping swords does not seem to give any bonus to PA power however. Bonus applied later?
// But also... Hawkmen seem to get a bonus 1 point when equipping short swords. Why? Is that with all weapons for Hawkmen? I think I saw them get +2 with a better sword?
// Wizards seem to get minus to weapon bonus for PA. Soldiers break even
// Clerics get different weapon penalties depending on the weapon type?

// Penalty: Wiz
// Even: Sol
// Bonus: Hawk


// Get Physical Attack Power
function getPa(char) {
    const str = getStr(char);
    let classId = char.classId;
    const classMod = getClassMod(classId);
    const equipMods = getEquipMods(char.equip);
    const atkPow = str + classMod;
    return atkPow;
}

// Proficiency Modifiers
const lowMod = 2.8
const medMod = 17.7
const highMod = 1
// Hawkman
const expertMod = "???"

// With Equipment
const lowPenalty = Math.round(wpnPow / lowMod)
// modifier seems to range from 14.7-20. Some rounding going on.
const medClassMod = Math.round(wpnPow / medMod)
const physAtk = str + (wpnPow / proficiencyModifier);
// Is the classMod a penalty or bonus multiplier? Bonus or penalty seems to increase with more powerful weapons.


// No Equipment
const physAtkUn = str + classUneqMod;

// getPhysAtk(Cevellini) {
//   str = 34;
//   classId = sol;
//   classMod = 5;
//   atkPow = 39;
// }

const unarmedBonus = {
    griff: 50,
    sol: 5,
    knight: 5,
    nin: 5,
    bst: 5,
    hawkman: 5,
    arc: 4,
    drgnTam: 4,
    grem: 4,
    fairy: 3,
    cler: 3,
    wiz: 3
}

const emblemUnarmedBonus = {
    griff: 0,
    sol: 0,
    knight: 0,
    nin: 0,
    bst: 0,
    hawkman: 0,
    arc: 0,
    drgnTam: 0,
    grem: 0,
    fairy: 0,
    cler: 0,
    wiz: 0
}

// Short Sword power: 30
const shortSwrdBonus = {
    sol: 30,
    knight: 30,
    nin: 30,
    bst: 30,
    hawkman: 31,
    arc: 0,
    drgnTam: 0,
    grem: 0,
    fairy: 0,
    cler: 0,
    wiz: 
}

// Ideal Weapons:
// Sol: Swords (1h or 2h)

const weaponTypes = ["swords (1h, 2h)", "Rapiers", "Bows/Bowguns", "spears", "staves/wands", "hammers/flails", "katanas", "axes", "whips", "fans", "snapdragon?"]







function getPhysDef(char) {

}

function getSpellAtk(char) {

}

function getSpellDef(char) {

}

function getStr(char) {
    const str = char.stats[0];
    return str;
};

function getClassMod(classId);

function atkPow(char, wpn) {
    const physAtk = getPhysAtk(char);
    const wpnPow = wpn.pow;
    const power = physAtk + wpnPow;
    return power;
}