function validate(form) {
    var valid = true;
    var elems = form.elements;
    var radios = document.getElementsByName("age");
    var formValid = false;
    var check = document.getElementsByName("list")

    if (elems.name.value == "") {
        alert("Введите имя!");
        valid = false;
    } else if (!validateName(elems.name.value)) {
        alert("Неверный формат ввода имени! Введите только буквы.");
        valid = false;
    }

    if (elems.surname.value == "") {
        alert("Введите фамилию!");
        valid = false;
    } else if (!validateSurname(elems.surname.value)) {
        alert("Неверный формат ввода фамилии! Введите только буквы.");
        valid = false;
    }
    if (elems.email.value == "") {
        alert("Введите e-mail!");
        valid = false;
    } else if (!validateEmail(elems.email.value)) {
        alert("Неверный формат ввода e-mail!");
        valid = false;
    }
    if (elems.rad[0].checked == false && elems.rad[1].checked == false) {
        alert("Выберите пол!");
        valid = false;
    }
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }
    if (!formValid) {
        alert("Выберите возраст!");
        valid = false;
    }
    if (!elems.choise.value) {
        alert("Выберите марку!");
        valid = false;
    }

    var j = 0;
    while (!formValid && j < check.length) {
        if (check[j].checked) formValid = true;
        j++;
    }
    if (!formValid) {
        alert("Выберите параметры, которые важны для вас!");
        valid = false;
    }
    return valid;
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name) {
    var re = /^[А-Я][а-я]{2,10}$/;
    return re.test(name);
}


function validateSurname(surname) {
    var re = /^[А-Я][а-я]{2,10}$/;
    return re.test(surname);
}

function onclearbutton() {
    opros.name.value = '';
    opros.surname.value = '';
    opros.choise.value = '';
    opros.email.value = '';
    opros.comment.value = '';
}

names = new Array();
surnames = new Array();
emails = new Array();
radio_rad = new Array();
radio_age = new Array();
brands = new Array();
checkbox1 = new Array();
comments = new Array();
n = 0;


function show() {
    names[n] = document.opros.name.value;
    surnames[n] = document.opros.surname.value;
    emails[n] = document.opros.email.value;
    brands[n] = document.opros.choise.value;
    comments[n] = document.opros.comment.value;

    var elems = document.opros.rad;
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].checked == true) {
            radio_rad[n] = elems[i].value;
            break;
        }
    }
    var elems1 = document.opros.age;
    for (var i = 0; i < elems1.length; i++) {
        if (elems1[i].checked == true) {
            radio_age[n] = elems1[i].value;
            break;
        }
    }


    html = "<header>";
    html += "</header>";
    html += "<article class=\"img1\">";
    html += "<table align=\"center\" border='2' cellpadding='5'>";
    html += "<tr>" + "Введённая Вами информация" + "</tr>";
    html += "<tr>";
    html += "<td>" + "Имя" + "</td>";
    html += "<td>" + "Фамилия" + "</td>";
    html += "<td>" + "E-mail" + "</td>";
    html += "<td>" + "Пол" + "</td>";
    html += "<td>" + "Возраст" + "</td>";
    html += "<td>" + "Предпочтительная марка" + "</td>";
    html += "<td>" + "Комментарии" + "</td>";
    html += "</tr>";
    html += "<tr>";
    for (var i = 0; i < names.length; i++) {
        html += "<td>" + names[i] + "</td>";
        html += "<td>" + surnames[i] + "</td>";
        html += "<td>" + emails[i] + "</td>";
        html += "<td>" + radio_rad[i] + "</td>";
        html += "<td>" + radio_age[i] + "</td>";
        html += "<td>" + brands[i] + "</td>";
        html += "<td>" + comments[i] + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    html += "Ранее зарегистрированные";
    html += "<ol>";
    for (var i = 0; i <= n; i++) {
        html += "<li>" + emails[i] + "</li>";
    }
    html += "</ol>";

    html += "</table>";
    html += "</article>";
    html += "<footer>"
    html += "</footer>"

    var newWin = window.open("about:blank", "hello", "width=1333px,height=400,scrollbars=yes");
    newWin.document.write('<DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="../css/style.css"></head><body>');
    newWin.document.write(html);
    newWin.document.write('<input class="color-button2" type="button" value="Закрыть окно" onClick="window.close()"><script type="text/javascript" src="../js/myScript.js"></script></body></html>');
    n++;
}
