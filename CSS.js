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
    
    appendClass: function (el, classname) {
        if(el.className) {
            var classes = el.className.split(" ");
            var alreadyclassed = false;
            classes.forEach(function(thisclassname) {
                if(classname == thisclassname)
                    alreadyclassed=true;
            });
            if(!alreadyclassed)
                classes.push(classname);
            el.className = classes.join(" ")
        } else {
            el.className=classname;
        }
    },
    
    deleteClass: function (el, classname) {
        if(el.className) {
            var classes = el.className.split(" ");
            for(i=0; i<=classes.length; i++) {
                if((classes[i]) && (classes[i]==classname))
                    classes.splice(i,1);
            }
            el.className = classes.join(" ");
        }
    },
};
