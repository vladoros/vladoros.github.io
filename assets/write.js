(function(doc, win) {
// get list
    var list = doc.getElementById("content"),
        letters = list.children,
        i = letters.length,
        html = [];

// clear list
    while (i--) {
        html[i] = letters[i].innerHTML;
        letters[i].innerHTML = '';
    }

    var animate = function(i) {
        var content = letters[i],
            charDelay = 0,
            lineDelay = 0;
        list.style.marginTop = '-' + (((i + 1) * 25) / 2) + 'px';

        var inty = setInterval(function() {
            content.innerHTML = html[i].substr(0, charDelay) + '<i class="type">|</i>';
            charDelay++;

            if (html[i].length < charDelay) {
                clearInterval(inty);
                i++;
                if (letters[i]) {
                    setTimeout(function() {
                        content.innerHTML = html[i - 1];
                        animate(i);
                    }, 300);
                }
            }
        }, 65);
    };

    animate(0);
})(document, window);
