function isAnagram(s, t) { 
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    var i;

    for (i = 0; i < s.length; i++) { 
        if (s[i] !== t[i]) {
            console.log('false');
            return;
        }
    }
    console.log('true');
    return;
}

isAnagram('rac', 'car');
isAnagram('race', 'card');