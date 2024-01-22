let musicPlaying = true;

    const buttons = document.querySelectorAll('.btn');
    const easy = document.querySelector('.easy');
    const hard = document.querySelector('.hard');

    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        playSound();
    });
  });
  easy.addEventListener('click', playSound);
  hard.addEventListener('click', playSound)
    function playSound() {
      const audio = new Audio('sounds/button_click.wav');
      audio.play();
    }
    const switchButtons = document.querySelectorAll('button');
    switchButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        playSound();
    });
  });

  
    
    // function toggleMusicIcon(element) {
    //   if (musicPlaying) {
    //     element.innerHTML = '<i class="fa-solid fa-music-slash"></i>';
    //     musicPlaying = false;
    //   } else {
    //     element.innerHTML = '<i class="fas fa-music"></i>';
    //     musicPlaying = true;
    //   }
    // }