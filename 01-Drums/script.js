window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key-itens[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key-itens-active');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('key-itens-active');
}

const keys = document.querySelectorAll('.key-itens');
keys.forEach(key => key.addEventListener('transitionend' , removeTransition));