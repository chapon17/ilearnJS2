class ReplacementText {
    constructor(container = '.text') {
        this.container = container;
        this.getText();
    }
    getText() {
        const data = document.querySelector(this.container);
        let rex = /'/g;
        let res = data.innerHTML.replace((rex), '"');
        rex = /\b"\b/g;
        res = res.replace((rex), '\'');
        data.innerHTML = res;
    }
}
const replacementText = new ReplacementText();
console.log(replacementText);

function checkAll() {
    function checkName() {
        var namecolor = document.getElementsByClassName("nameInput");
        var color = namecolor[0].value;
        var reg = new RegExp(/[^A-Za-z0]+/g);
        result = reg.test(color);
        if (result == true) {
            document.getElementsByClassName("nameInput")[0].style.background = 'red'
        }
    };

    function checkNumber() {
        var namecolor = document.getElementsByClassName("numberInput");
        var color = namecolor[0].value;
        var reg = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm);
        result = reg.test(color);
        if (result == false) {
            document.getElementsByClassName("numberInput")[0].style.background = 'red'

        }
    };
function checkEmail() {
        var namecolor = document.getElementsByClassName("emailInput");
        var color = namecolor[0].value;
        var reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        result = reg.test(color);
        if (result == false) {
            document.getElementsByClassName("emailInput")[0].style.background = 'red'

        }
    };
checkEmail();
checkNumber();
checkName();
    if  (document.getElementsByClassName("emailInput")[0].style.background != 'red' && document.getElementsByClassName("numberInput")[0].style.background != 'red' &&  document.getElementsByClassName("nameInput")[0].style.background != 'red'){
        alert('Вы ввели все правильно!');
    }
};
