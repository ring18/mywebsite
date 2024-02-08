
window.onload = function() {
    const colorChangeButton = document.getElementById('colorChangeButton');
    if (!colorChangeButton){ return false;}//取得できない時の対策
    colorChangeButton.addEventListener('click', function() {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colorChangeButton.style.backgroundColor = randomColor;

        changeText = document.getElementById('changeText');
        changeText.textContent = randomColor;
    });

    const textChangeButton = document.getElementById('textChangeButton');
    const count = 0;
    if (!textChangeButton){ return false;}
    textChangeButton.addEventListener('click', function() {
        count += 1;
        textChangeButton.textContent = count; 
    });

};