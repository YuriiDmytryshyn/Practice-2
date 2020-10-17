// Доступаюсь до блоку з текстом
let text = document.querySelector('.divScreen');
// Доступаюсь до кнопки яка робить текс жирним
let boltText = document.querySelector('.noLoginNav__textWeight--bolt');

// вішаю подію click на кнопку в ній провіряю чи текст є жирним якщо ні то задаю жирність якщо так то забираю живність. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
boltText.addEventListener('click', function () {
    if (text.style.fontWeight != 'bold') {
        text.style.fontWeight = 'bold';
        boltText.style.border = '1px solid lightgrey';
        boltText.style.backgroundColor = 'lightgrey';
        boltText.style.boxShadow = '0px 0px 3px lightgrey';
    } else {
        text.style.fontWeight = 'normal';
        boltText.style.border = '1px solid white';
        boltText.style.backgroundColor = 'white';
        boltText.style.boxShadow = 'none';
    }
});

// Доступаюсь до кнопки яка робить текс курсивним
let italicText = document.querySelector('.noLoginNav__textWeight--italics');

// вішаю подію click на кнопку в ній провіряю чи текст є курсивним якщо ні то задаю курсивність якщо так то забираю курсивність. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
italicText.addEventListener('click', function () {
    if (text.style.fontStyle != 'italic') {
        text.style.fontStyle = 'italic';
        italicText.style.border = '1px solid lightgrey';
        italicText.style.backgroundColor = 'lightgrey';
        italicText.style.boxShadow = '0px 0px 3px lightgrey';
    } else {
        text.style.fontStyle = 'normal';
        italicText.style.border = '1px solid white';
        italicText.style.backgroundColor = 'white';
        italicText.style.boxShadow = 'none';
    }
});

// Доступаюсь до кнопки яка підкреслює текс
let underlineText = document.querySelector('.noLoginNav__textWeight--strikethrough');

// вішаю подію click на кнопку в ній провіряю чи текст є підкресленим з низу якщо ні то задаю курсивність якщо так то забираю підкреслення. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
underlineText.addEventListener('click', function () {
    if (text.style.textDecoration != 'underline') {
        text.style.textDecoration = 'underline';
        underlineText.style.border = '1px solid lightgrey';
        underlineText.style.backgroundColor = 'lightgrey';
        underlineText.style.boxShadow = '0px 0px 3px lightgrey';
    } else {
        text.style.textDecoration = 'none';
        underlineText.style.border = '1px solid white';
        underlineText.style.backgroundColor = 'white';
        underlineText.style.boxShadow = 'none';
    }
});

// Доступаюсь до кнопки яка підкреслює текс
let lineThroughText = document.querySelector('.noLoginNav__textWeight--strikeout');

// вішаю подію click на кнопку в ній провіряю чи текст є закреслений якщо ні то задаю курсивність якщо так то забираю закреслення. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
lineThroughText.addEventListener('click', function () {
    if (text.style.textDecoration != 'line-through') {
        text.style.textDecoration = 'line-through';
        lineThroughText.style.border = '1px solid lightgrey';
        lineThroughText.style.backgroundColor = 'lightgrey';
        lineThroughText.style.boxShadow = '0px 0px 3px lightgrey';
    } else {
        text.style.textDecoration = 'none';
        lineThroughText.style.border = '1px solid white';
        lineThroughText.style.backgroundColor = 'white';
        lineThroughText.style.boxShadow = 'none';
    }
});

// Доступаюсь до кнопки яка вирівнює текст з ліва
let leftText = document.querySelector('.noLoginNav__textPosition--left');

// вішаю подію click на кнопку в ній  вирівнюю текст по тій стороні яка потрібна. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
leftText.addEventListener('click', function () {
    text.style.textAlign = 'left';
});

// Доступаюсь до кнопки яка вирівнює текст по центру
let centerText = document.querySelector('.noLoginNav__textPosition--center');

// вішаю подію click на кнопку в ній  вирівнюю текст по тій стороні яка потрібна. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
centerText.addEventListener('click', function () {
    text.style.textAlign = 'center';
});

// Доступаюсь до кнопки яка вирівнює текст з права 
let rightText = document.querySelector('.noLoginNav__textPosition--right');

// вішаю подію click на кнопку в ній  вирівнюю текст по тій стороні яка потрібна. Під чвс цієї провірки задаю стілі кнопки(роблю ефект focus)
rightText.addEventListener('click', function () {
    text.style.textAlign = 'right';
});

// Доступаюсь до кнопки для вибору шрифта
let fontFamilyButton = document.querySelector('.noLoginNav__textStyle--fontFamily');

// При кліку на кнопку з шрифтами я відкриваю блок з ними
fontFamilyButton.addEventListener('click', function () {
    fontFamilyButton.style.border = '1px solid lightgrey';
    fontFamilyButton.style.backgroundColor = 'lightgrey';
    fontFamilyButton.style.boxShadow = '0px 0px 3px lightgrey';
    document.querySelector('.allFontFamily').style.display = 'block';
});

// Тепере дістаю усі дівки зі шрифтами в яких назва потрібних нам шрифтів
let arialFontFamily = document.querySelector('.arialFontFamily');
let georgiaFontFamily = document.querySelector('.georgiaFontFamily');
let impactFontFamily = document.querySelector('.impactFontFamily');
let tahomaFontFamily = document.querySelector('.tahomaFontFamily');
let romanFontFamily = document.querySelector('.romanFontFamily');
let verdanaFontFamily = document.querySelector('.verdanaFontFamily');

// Зчитаю що написано в div і переписую стиль в текста
arialFontFamily.addEventListener('click', function (event) {
    text.style.fontFamily = event.target.textContent;
    document.querySelector('.allFontFamily').style.display = 'none';
    fontFamilyButton.style.border = '1px solid white';
    fontFamilyButton.style.backgroundColor = 'white';
    fontFamilyButton.style.boxShadow = 'none';
});

georgiaFontFamily.addEventListener('click', function (event) {
    text.style.fontFamily = event.target.textContent;
    document.querySelector('.allFontFamily').style.display = 'none';
    fontFamilyButton.style.border = '1px solid white';
    fontFamilyButton.style.backgroundColor = 'white';
    fontFamilyButton.style.boxShadow = 'none';
});

impactFontFamily.addEventListener('click', function (event) {
    text.style.fontFamily = event.target.textContent;
    document.querySelector('.allFontFamily').style.display = 'none';
    fontFamilyButton.style.border = '1px solid white';
    fontFamilyButton.style.backgroundColor = 'white';
    fontFamilyButton.style.boxShadow = 'none';
});

tahomaFontFamily.addEventListener('click', function (event) {
    text.style.fontFamily = event.target.textContent;
    document.querySelector('.allFontFamily').style.display = 'none';
    fontFamilyButton.style.border = '1px solid white';
    fontFamilyButton.style.backgroundColor = 'white';
    fontFamilyButton.style.boxShadow = 'none';
});

romanFontFamily.addEventListener('click', function (event) {
    text.style.fontFamily = event.target.textContent;
    document.querySelector('.allFontFamily').style.display = 'none';
    fontFamilyButton.style.border = '1px solid white';
    fontFamilyButton.style.backgroundColor = 'white';
    fontFamilyButton.style.boxShadow = 'none';
});

verdanaFontFamily.addEventListener('click', function (event) {
    text.style.fontFamily = event.target.textContent;
    document.querySelector('.allFontFamily').style.display = 'none';
    fontFamilyButton.style.border = '1px solid white';
    fontFamilyButton.style.backgroundColor = 'white';
    fontFamilyButton.style.boxShadow = 'none';
});

// Доступаюсь до кнопки для вибору розміру шрифта
let fontSizeButton = document.querySelector('.noLoginNav__textStyle--size');

// При кліку на кнопку з розмірами шрифтів я відкриваю блок з розмірами
fontSizeButton.addEventListener('click', function () {
    fontSizeButton.style.border = '1px solid lightgrey';
    fontSizeButton.style.backgroundColor = 'lightgrey';
    fontSizeButton.style.boxShadow = '0px 0px 3px lightgrey';
    document.querySelector('.fontsSize').style.display = 'block';
});

// Тепере дістаю усі дівки з розмірами шрифтів в яких назва це потрібний нам розмір
let fontsSize12px = document.querySelector('.fontsSize__12px');
let fontsSize14px = document.querySelector('.fontsSize__14px');
let fontsSize16px = document.querySelector('.fontsSize__16px');
let fontsSize18px = document.querySelector('.fontsSize__18px');
let fontsSize20px = document.querySelector('.fontsSize__20px');
let fontsSize22px = document.querySelector('.fontsSize__22px');
let fontsSize25px = document.querySelector('.fontsSize__25px');
let fontsSize30px = document.querySelector('.fontsSize__30px');

// При події клік місяю розмір шрифта в залежності від того що написато в дівках
fontsSize12px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize14px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize16px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize18px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize20px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize22px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize25px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

fontsSize30px.addEventListener('click', function (event) {
    text.style.fontSize = event.target.textContent;
    document.querySelector('.fontsSize').style.display = 'none';
    fontSizeButton.style.border = '1px solid white';
    fontSizeButton.style.backgroundColor = 'white';
    fontSizeButton.style.boxShadow = 'none';
});

// Доступаюсь до кнопки для вибору кольору текста
let textColorButton = document.querySelector('.noLoginNav__textStyle--textColor');

// При кліку на кнопку з кольорами шрифтів я відкриваю блок з кольорами
textColorButton.addEventListener('click', function () {
    textColorButton.style.border = '1px solid lightgrey';
    textColorButton.style.backgroundColor = 'lightgrey';
    textColorButton.style.boxShadow = '0px 0px 3px lightgrey';
    document.querySelector('.textColor').style.display = 'block';
});

// Доступаюсь до кнопки для закриття вікна з кольорами
let closeTextColor = document.querySelector('.closeTextColor');
// закриваю вікно при кліку
closeTextColor.addEventListener('click', () => {
    document.querySelector('.textColor').style.display = 'none';
    textColorButton.style.border = '1px solid white';
    textColorButton.style.backgroundColor = 'white';
    textColorButton.style.boxShadow = 'none';
});

// дістаю блок з кольорами
let allTextColor = document.querySelector('.xColor');

// Вішаю подію клік на блок з кольорами.... при кліку зчитую value кольорів і передаю їх в стилі кольору тексту
allTextColor.addEventListener('click', function (event) {
    text.style.color = event.target.value;
    document.querySelector('.textColor').style.display = 'none';
    textColorButton.style.border = '1px solid white';
    textColorButton.style.backgroundColor = 'white';
    textColorButton.style.boxShadow = 'none';
});

// Доступаюсь до кнопки вибору фона
let colorOrImageButton = document.querySelector('.noLoginNav__textStyle--bgColor');

// При кліку на кнопку з кольорами фона я відкриваю блок з кольорами
colorOrImageButton.addEventListener('click', function () {
    colorOrImageButton.style.border = '1px solid lightgrey';
    colorOrImageButton.style.backgroundColor = 'lightgrey';
    colorOrImageButton.style.boxShadow = '0px 0px 3px lightgrey';
    document.querySelector('.bgColor').style.display = 'block';
});

// Доступаюсь до кнопки для закриття вікна з кольорами фонів та картинок
let closeBgColor = document.querySelector('.closeBgColor');
// закриваю вікно при кліку
closeBgColor.addEventListener('click', () => {
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

// доступаюсь до кнопок в середени вікда х кольорами і картинками фону
let colorButton = document.querySelector('.colors');
let imageButton = document.querySelector('.images');
let chooseImage = document.querySelector('.files');


// Відкриваю закриваю вікна і проводжу маніпуляції з кольором кнопки так як в мене чось не пахав автофокус
imageButton.addEventListener('click', function () {
    document.querySelector('.xBgColor').style.display = 'none';
    colorButton.style.color = 'blue';
    document.querySelector('.allbgImage').style.display = 'flex';
    document.querySelector('.downloadImage').style.display = 'none';
});

chooseImage.addEventListener('click', function () {
    document.querySelector('.xBgColor').style.display = 'none';
    colorButton.style.color = 'blue';
    document.querySelector('.allbgImage').style.display = 'none';
    document.querySelector('.downloadImage').style.display = 'block';
});

colorButton.addEventListener('click', function () {
    document.querySelector('.xBgColor').style.display = 'block';
    colorButton.style.color = 'black';
    document.querySelector('.allbgImage').style.display = 'none';
    document.querySelector('.downloadImage').style.display = 'none';
});

// дістаю блок з кольорами
let allBgtColor = document.querySelector('.xBgColor');
// Вішаю подію клік на блок з кольорами.... при кліку зчитую value кольорів і передаю їх в стилі кольору тексту
allBgtColor.addEventListener('click', function (event) {
    text.style.backgroundColor = event.target.value;
    text.style.backgroundImage = 'none';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

// дістаю усі блоки з картинками
let bgImage1 = document.querySelector('.bgImage1');
let bgImage2 = document.querySelector('.bgImage2');
let bgImage3 = document.querySelector('.bgImage3');
let bgImage4 = document.querySelector('.bgImage4');
let bgImage5 = document.querySelector('.bgImage5');
let bgImage6 = document.querySelector('.bgImage6');
let bgImage7 = document.querySelector('.bgImage7');
let bgImage8 = document.querySelector('.bgImage8');
let bgImage9 = document.querySelector('.bgImage9');

// Вішаю подію клік на блок з картинкою.... і задаю її бекгаундом імейдж
bgImage1.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/5563b8b21201f.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage2.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/dfdf.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage3.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/Laurie_Nature_Bee.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage4.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/ff.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage5.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/qq.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage6.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/rr.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage7.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/xx.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage8.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/cc.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

bgImage9.addEventListener('click', function () {
    text.style.backgroundImage = 'url(./img/m.jpg)';
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
    colorOrImageButton.style.border = '1px solid white';
    colorOrImageButton.style.backgroundColor = 'white';
    colorOrImageButton.style.boxShadow = 'none';
});

// Доступаюсь до інпута з типом файл, вішаю подію change і вибираю каритнку з пк
document.querySelector('#file').addEventListener('change', function (event) {
    let url = event.target.files[0]
    text.style.backgroundImage = `url(${URL.createObjectURL(url)})`;
    text.style.backgroundPosition = 'center';
    text.style.backgroundSize = 'cover';
    document.querySelector('.bgColor').style.display = 'none';
});

// Доступаюсь до кнопки з колодкою
const loginOn = document.querySelector('.noLoginNav__login--on');
// При кліку на кнопку виходить модальне вікно з логінуванням і провіряю його на валідність, якщо все добре даю доступ до кнокри </>
const login = document.querySelector('.signIn__input--login');
const password = document.querySelector('.signIn__input--password');
const textLoginPassword = document.querySelector('.signIn__input--text');
loginOn.addEventListener('click', function () {
    document.querySelector('.signIn').style.display = 'block';
});
// і провіряю його на валідність, якщо все добре даю доступ до кнокри </>
document.querySelector('.signIn__button--sign').addEventListener('click', function () {
    if (login.value == '' || password.value == '') {
        textLoginPassword.textContent = 'Value is empty';
        textLoginPassword.style.color = 'red';
        login.style.border = '1px solid red';
        password.style.border = '1px solid red';
    } else if (login.value != 'admin' || password.value != 'admin') {
        textLoginPassword.textContent = 'Please cheack your login or password';
        textLoginPassword.style.color = 'red';
        login.style.border = '1px solid red';
        password.style.border = '1px solid red';
    } else {
        login.style.border = '1px solid rgba(0, 0, 0, 0.5)';
        password.style.border = '1px solid rgba(0, 0, 0, 0.5)';
        textLoginPassword.textContent = '';
        loginOn.style.display = 'none';
        document.querySelector('.onLoginNav__login--on').style.display = 'block';
        document.querySelector('.signIn').style.display = 'none';
        document.querySelector('.noLoginNav__change--change').disabled = false;
    }
});

// доступаюсь до </>
document.querySelector('.noLoginNav__change--change').addEventListener('click', function () {
    document.querySelector('.noLoginNav').style.display = 'none';
    document.querySelector('.divScreen').style.display = 'none';
    document.querySelector('.loginNav').style.display = 'flex';
    document.querySelector('.textareaScreen').style.display = 'block';
    document.querySelector('.textareaScreen').value = document.querySelector('.divScreen').innerHTML;
});

// доступаюсь до кнопки вихода і перетошу текс арев в дів
document.querySelector('.loginNav__button--out').addEventListener('click', function () {
    document.querySelector('.noLoginNav').style.display = 'flex';
    document.querySelector('.divScreen').style.display = 'block';
    document.querySelector('.loginNav').style.display = 'none';
    document.querySelector('.textareaScreen').style.display = 'none';
    document.querySelector('.divScreen').innerHTML = document.querySelector('.textareaScreen').value
});

//  Доступаюсь до кнопки створення таблиці і при кліку на неї відкриваю модільне вікно
const tableModal = document.querySelector('.loginNav__table--create');
tableModal.addEventListener('click', function () {
    document.querySelector('.modalTable').style.display = 'block';
});

// прикліку на хрестик закриваю вікно
document.querySelector('.closeTable').addEventListener('click', function () {
    document.querySelector('.modalTable').style.display = 'none';
});

// доступаюсь до кнопки Creale lable
let createTable = document.querySelector('.createTable');
// при кліку на кнопку провіряю поля на заповненість...Якщо всі поля заповненні створюю таблицю зі стилями які вибрав користувач
createTable.addEventListener('click', function () {
    if (document.getElementById('countTR').value == '') {
        document.getElementById('countTR').style.border = '1px solid red';
    } else {
        document.getElementById('countTR').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('countTD').value == '') {
        document.getElementById('countTD').style.border = '1px solid red';
    } else {
        document.getElementById('countTD').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('wingthTD').value == '') {
        document.getElementById('wingthTD').style.border = '1px solid red';
    } else {
        document.getElementById('wingthTD').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('heightTD').value == '') {
        document.getElementById('heightTD').style.border = '1px solid red';
    } else {
        document.getElementById('heightTD').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('widthBorder').value == '') {
        document.getElementById('widthBorder').style.border = '1px solid red';
    } else {
        document.getElementById('widthBorder').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.querySelector('.typeBorder').value == 'choose style') {
        document.querySelector('.typeBorder').style.border = '1px solid red';
    } else {
        document.querySelector('.typeBorder').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.querySelector('.colorBorder').value == 'choose color') {
        document.querySelector('.colorBorder').style.border = '1px solid red'
    } else {
        document.querySelector('.colorBorder').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('countTR').value == '' || document.getElementById('countTD').value == '' || document.getElementById('wingthTD').value == '' || document.getElementById('heightTD').value == '' || document.getElementById('widthBorder').value == '' || document.querySelector('.typeBorder').value == 'choose style' || document.querySelector('.colorBorder').value == 'choose color') {
        document.querySelector('.validTable').innerHTML = 'invalid value';
        document.querySelector('.validTable').style.color = 'red';
    } else {
        document.querySelector('.emptyDiv').innerHTML = '';
        let table = document.createElement('table');
        for (let i = 0; i < document.getElementById('countTR').value; i++) {
            let tagTR = document.createElement('tr');
            table.appendChild(tagTR);
            for (let k = 0; k < document.getElementById('countTD').value; k++) {
                let tagTD = document.createElement('td');
                tagTR.appendChild(tagTD);
                tagTD.style.width = document.getElementById('wingthTD').value + 'px';
                tagTD.style.height = document.getElementById('heightTD').value + 'px';
                tagTD.style.borderWidth = document.getElementById('widthBorder').value + 'px';
                tagTD.style.borderStyle = `${document.querySelector('.typeBorder').value}`;
                tagTD.style.borderColor = `${document.querySelector('.colorBorder').value}`;
            }
        }
        document.querySelector('.emptyDiv').insertAdjacentElement('beforeend', table);
        document.querySelector('.textareaScreen').value += document.querySelector('.emptyDiv').innerHTML;
    }
});

// Доступаюсь до кнопки reset table і зачищаю поля при кліку на неї
const resetTable = document.querySelector('.resetTable');
resetTable.addEventListener('click', function () {
    document.getElementById('countTR').value = '';
    document.getElementById('countTD').value = '';
    document.getElementById('wingthTD').value = '';
    document.getElementById('heightTD').value = '';
    document.getElementById('widthBorder').value = '';
    document.querySelector('.typeBorder').value = 'choose style';
    document.querySelector('.colorBorder').value = 'choose color';
});

// Доступаюсь до кнопки роблю видимим вінко для створення списку
const olModal = document.querySelector('.loginNav__ol--create');
olModal.addEventListener('click', function () {
    document.querySelector('.modalOl').style.display = 'block';
});
// доступаюсь до картинки закриття вікна і закриваю його
document.querySelector('.closeOl').addEventListener('click', function () {
    document.querySelector('.modalOl').style.display = 'none';
});

// при кліку на create OL провіряю чи усі поля заповненні, якщо так створюю і стилізую список((Цікаво чого??...таке завдання нічого з цим не пороблю))
document.querySelector('.createOl').addEventListener('click', function () {
    if (document.getElementById('countLi').value == '') {
        document.getElementById('countLi').style.border = '1px solid red';
    } else {
        document.getElementById('countLi').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('styleLi').value == 'choose Ol type Mark') {
        document.getElementById('styleLi').style.border = '1px solid red';
    } else {
        document.getElementById('styleLi').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('styleLi').value == 'choose Ol type Mark' || document.getElementById('countLi').value == '') {
        document.querySelector('.ifValidOl').textContent = 'invalid value';
        document.querySelector('.ifValidOl').style.color = 'red';
    } else {
        document.querySelector('.emptyDiv').innerHTML = '';
        let ol = document.createElement('ol');
        for (let i = 0; i < document.getElementById('countLi').value; i++) {
            let li = document.createElement('li');
            li.textContent = 'item' + (i + 1);
            ol.appendChild(li);
            ol.style.listStyleType = document.getElementById('styleLi').value;
            ol.style.marginLeft = '30px';
        }
        document.querySelector('.emptyDiv').insertAdjacentElement('beforeend', ol);
        document.querySelector('.textareaScreen').value += document.querySelector('.emptyDiv').innerHTML;
    }
});

// При кліку на reset зачищаю поля
document.querySelector('.resetOl').addEventListener('click', function () {
    document.getElementById('countLi').value = '';
    document.getElementById('styleLi').value = 'choose Ol type Mark';
})

// Доступаюсь до кнопки роблю видимим вінко для створення списку
const uiModal = document.querySelector('.loginNav__li--create');
uiModal.addEventListener('click', function () {
    document.querySelector('.modalUi').style.display = 'block';
});
// доступаюсь до картинки закриття вікна і закриваю його
document.querySelector('.closeUi').addEventListener('click', function () {
    document.querySelector('.modalUi').style.display = 'none';
});

// при кліку на create UL провіряю чи усі поля заповненні, якщо так створюю і стилізую список
document.querySelector('.createUi').addEventListener('click', function () {
    if (document.getElementById('countUl').value == '') {
        document.getElementById('countUl').style.border = '1px solid red';
    } else {
        document.getElementById('countUl').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('styleUi').value == 'choose Ol type Mark') {
        document.getElementById('styleUi').style.border = '1px solid red';
    } else {
        document.getElementById('styleUi').style.border = '1px solid rgba(0, 0, 0, 0.5)';
    }
    if (document.getElementById('styleUi').value == 'choose Ol type Mark' || document.getElementById('countUl').value == '') {
        document.querySelector('.ifValidUi').textContent = 'invalid value';
        document.querySelector('.ifValidUi').style.color = 'red';
    } else {
        document.querySelector('.emptyDiv').innerHTML = '';
        let ul = document.createElement('ul');
        for (let i = 0; i < document.getElementById('countUl').value; i++) {
            let li = document.createElement('li');
            li.textContent = 'item' + (i + 1);
            ul.appendChild(li);
            ul.style.listStyleType = document.getElementById('styleUi').value;
            ul.style.marginLeft = '30px';
        }
        document.querySelector('.emptyDiv').insertAdjacentElement('beforeend', ul);
        document.querySelector('.textareaScreen').value += document.querySelector('.emptyDiv').innerHTML;
    }
});

// При кліку на reset зачищаю поля
document.querySelector('.resetUi').addEventListener('click', function () {
    document.getElementById('countUl').value = '';
    document.getElementById('styleUi').value = 'choose Ol type Mark';
});

// коли я клікаю на кнопку з відкритою колодкою я відкривю модальне вікно в якому я можу вилошінитись
document.querySelector('.onLoginNav__login--on').addEventListener('click', function () {
    document.querySelector('.singOut').style.display = 'block';
});

document.querySelector('.cansel').addEventListener('click', function () {
    document.querySelector('.singOut').style.display = 'none';
});

document.querySelector('.signOut').addEventListener('click', function () {
    loginOn.style.display = 'block';
    document.querySelector('.noLoginNav__change--change').disabled = true;
    document.querySelector('.onLoginNav__login').style.display = 'none';
    document.querySelector('.singOut').style.display = 'none';
    document.querySelector('.signIn__input--login').value = '';
    document.querySelector('.signIn__input--password').value = '';
})
