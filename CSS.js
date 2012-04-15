djsex.css = {
    /*
     * http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
     */
    create: function(stylesheet) {
        var head = document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            rules = document.createTextNode(stylesheet);

        style.type = 'text/css';
        if(style.styleSheet)
            style.styleSheet.cssText = rules.nodeValue;
        else style.appendChild(rules);
            head.appendChild(style);
    },
};
