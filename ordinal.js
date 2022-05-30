let ordinal = 0;
let aaaaa = 0;
let ordinalh1 = 0;
let ordinalh2 = 0;
let ordinalh3 = 0;
let ordinalh4 = 0;
let clicks = 1;
let aplha = 0;
let aplhagains = 1;
let clickdouble = 0;

function ConvertOrdinal4(ordinal) {
    if (ordinal == 0) {
        return "";
    }
    if (ordinal == 1) {
        return "\u03C9<sup>4</sup>+";
    }
    if (ordinal == 2) {
        return "\u03C9<sup>4</sup>2+";
    }
    if (ordinal == 3) {
        return "\u03C9<sup>4</sup>3+";
    }
    if (ordinal == 4) {
        return "\u03C9<sup>4</sup>4+";
    }
    if (ordinal == 5) {
        return "\u03C9<sup>4</sup>5+";
    }
    if (ordinal == 6) {
        return "\u03C9<sup>4</sup>6+";
    }
    if (ordinal == 7) {
        return "\u03C9<sup>4</sup>7+";
    }
    if (ordinal == 8) {
        return "\u03C9<sup>4</sup>8+";
    }
    if (ordinal == 9) {
        return "\u03C9<sup>4</sup>9+";
    }
}

function ConvertOrdinal3(ordinal) {
    if (ordinal == 0) {
        return "";
    }
    if (ordinal == 1) {
        return "\u03C9<sup>3</sup>+";
    }
    if (ordinal == 2) {
        return "\u03C9<sup>3</sup>2+";
    }
    if (ordinal == 3) {
        return "\u03C9<sup>3</sup>3+";
    }
    if (ordinal == 4) {
        return "\u03C9<sup>3</sup>4+";
    }
    if (ordinal == 5) {
        return "\u03C9<sup>3</sup>5+";
    }
    if (ordinal == 6) {
        return "\u03C9<sup>3</sup>6+";
    }
    if (ordinal == 7) {
        return "\u03C9<sup>3</sup>7+";
    }
    if (ordinal == 8) {
        return "\u03C9<sup>3</sup>8+";
    }
    if (ordinal == 9) {
        return "\u03C9<sup>3</sup>9+";
    }
}

function ConvertOrdinal2(ordinal) {
    if (ordinal == 0) {
        return "";
    }
    if (ordinal == 1) {
        return "\u03C9<sup>2</sup>+";
    }
    if (ordinal == 2) {
        return "\u03C9<sup>2</sup>2+";
    }
    if (ordinal == 3) {
        return "\u03C9<sup>2</sup>3+";
    }
    if (ordinal == 4) {
        return "\u03C9<sup>2</sup>4+";
    }
    if (ordinal == 5) {
        return "\u03C9<sup>2</sup>5+";
    }
    if (ordinal == 6) {
        return "\u03C9<sup>2</sup>6+";
    }
    if (ordinal == 7) {
        return "\u03C9<sup>2</sup>7+";
    }
    if (ordinal == 8) {
        return "\u03C9<sup>2</sup>8+";
    }
    if (ordinal == 9) {
        return "\u03C9<sup>2</sup>9+";
    }
}

function ConvertOrdinal1(ordinal) {
    if (ordinal == 0) {
        return "";
    }
    if (ordinal == 1) {
        return "\u03C9+";
    }
    if (ordinal == 2) {
        return "\u03C92+";
    }
    if (ordinal == 3) {
        return "\u03C93+";
    }
    if (ordinal == 4) {
        return "\u03C94+";
    }
    if (ordinal == 5) {
        return "\u03C95+";
    }
    if (ordinal == 6) {
        return "\u03C96+";
    }
    if (ordinal == 7) {
        return "\u03C97+";
    }
    if (ordinal == 8) {
        return "\u03C98+";
    }
    if (ordinal == 9) {
        return "\u03C99+";
    }
}

document.getElementById('click').onclick = () => {
    aaaaa = aaaaa + clicks;
    clicks = clicks + clickdouble
    document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
    document.getElementById('clickings').innerText = "You Have " + clicks + " Per Clicks."
}

document.getElementById('cost1').onclick = () => {
    if (aaaaa > 9) {
        aaaaa = aaaaa - 10
        ordinalh1 = ordinalh1 + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
    }
}

document.getElementById('cost2').onclick = () => {
    if (aaaaa > 9 && ordinalh1 > 9) {
        aaaaa = aaaaa - 10
        ordinalh1 = ordinalh1 - 10
        ordinalh2 = ordinalh2 + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
    }
}

document.getElementById('cost3').onclick = () => {
    if (aaaaa > 9 && ordinalh1 > 9 && ordinalh2 > 9) {
        aaaaa = aaaaa - 10
        ordinalh1 = ordinalh1 - 10
        ordinalh2 = ordinalh2 - 10
        ordinalh3 = ordinalh3 + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
    }
}

document.getElementById('cost4').onclick = () => {
    if (aaaaa > 9 && ordinalh1 > 9 && ordinalh2 > 9) {
        aaaaa = 0
        ordinalh1 = 0
        ordinalh2 = 0
        ordinalh3 = 0
        ordinalh4 = 0
        aplha = aplha + aplhagains
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
        document.getElementById('aplha').innerText = "You Have " + aplha + " Aplha"
    }
}

document.getElementById('cost5').onclick = () => {
    if (aaaaa > 9 && ordinalh1 > 9 && ordinalh2 > 9 && ordinalh3 > 9) {
        aaaaa = 0
        ordinalh1 = 0
        ordinalh2 = 0
        ordinalh3 = 0
        ordinalh4 = ordinalh4 + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
        document.getElementById('aplha').innerText = "You Have " + aplha + " Aplha"
    }
}

document.getElementById('aplhacost1').onclick = () => {
    if (aplha > 9) {
        aplha = aplha - 10
        clicks = clicks + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
        document.getElementById('aplha').innerText = "You Have " + aplha + " Aplha"
        document.getElementById('clickings').innerText = "You Have " + clicks + " Per Clicks."
    }
}

document.getElementById('aplhacost2').onclick = () => {
    if (aplha > 19) {
        aplha = aplha - 20
        aplhagains = aplhagains + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
        document.getElementById('aplha').innerText = "You Have " + aplha + " Aplha"
    }
}

document.getElementById('aplhacost3').onclick = () => {
    if (aplha > 999) {
        aplha = aplha - 10 ** 3
        clickdouble = clickdouble + 1
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
        document.getElementById('aplha').innerText = "You Have " + aplha + " Aplha"
    }
}

document.getElementById('aplhacost4').onclick = () => {
    if (aplha > (10 ** 12) - 1) {
        aplha = aplha - 10 ** 12
        wins = wins + Math.log10(aplha) - 11
        clicks = clicks * wins
        document.getElementById('ordinal').innerHTML = ConvertOrdinal4(ordinalh4) + ConvertOrdinal3(ordinalh3) + ConvertOrdinal2(ordinalh2) + ConvertOrdinal1(ordinalh1) + aaaaa;
        document.getElementById('aplha').innerText = "You Have " + aplha + " Aplha"
    }
}

document.getElementById('ordinal').innerText = aaaaa;