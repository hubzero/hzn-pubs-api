var app = new Vue({

    el: '#app',
    data: {
        name: 'Vue.js',
        debug: true
    },
    methods: {

        emitGlobalClick(event) {
            if(this.debug) {
                console.log('Global click');
            }

            var container = findAncestor(event.target, '.options-list, .options');
            if(!container) {
                this.closeAllPopups();
                event.preventDefault();
            }
        },

        showOverlay() {
            document.getElementsByTagName('body')[0].classList.add('with-overlay');
        },

        hideOverlay() {
            document.getElementsByTagName('body')[0].classList.remove('with-overlay');
        },

        findPanel(panelClass) {
            var panel = document.getElementsByClassName('as-panel ' + panelClass)[0];

            if(this.debug) {
                console.log('Finding panel: ' + panel);
            }

            return panel;

        },

        openPanel(event, panel) {
            if(this.debug) {
                console.log('Opening panel: ' + panel);
            }

            event.preventDefault();

            var p = this.findPanel(panel);
            this.openPanelElement(p);
            this.showOverlay();
        },

        closePanel(panel) {
            var p = this.findPanel(panel);
            this.closePanelElement(p);
        },

        openPanelElement(panel) {
            panel.classList.add("open");
        },

        closePanelElement(panel) {
            panel.classList.remove("open");
        },

        fileOptions(event) {
            if(this.debug) {
                console.log('fileOptions');
                //console.log(event.target.parentElement);
            }

            var container = findAncestor(event.target, 'div.options');
            var dropDown = container.querySelector('div.options-list');
            if(dropDown) {
                dropDown.classList.add('open');
            }
        },

        closeAllPanels(event) {
            if(this.debug) {
                console.log('Closing all panels');
            }

            if(event) {
                event.preventDefault();
            }

            var panels = document.querySelectorAll('.page-panel, .as-panel');
            for(var i = 0; i < panels.length; i++) {
                if(this.debug) {
                    console.log(panels[i]);
                }
                this.closePanelElement(panels[i]);
            }
            this.hideOverlay();
        },

        closeAllPopups(event) {
            if(this.debug) {
                console.log('Closing all popups');
            }

            var popups = document.querySelectorAll('.options-list');
            for(var i = 0; i < popups.length; i++) {
                popups[i].classList.remove("open");
            }
        }

    }
});

function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
}
