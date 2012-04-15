djsex.css = {
    create: function(stylesheet) {
        var head = document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            rules = document.createTextNode('h1 { background: red; }');

        style.type = 'text/css';
        if(style.styleSheet)
            style.styleSheet.cssText = rules.nodeValue;
        else style.appendChild(rules);
            head.appendChild(style);
    },
};
