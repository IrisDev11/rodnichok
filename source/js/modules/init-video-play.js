/*
  const playBtns = document.querySelectorAll('[data-video-btn]');
  const initVideoPlasy = () => {
    if (!playBtns.length) {
      return;
    }

    playBtns.forEach((btn) => {
      const videoWrp = btn.closest('[data-video-wrp]');
      const video = videoWrp ? videoWrp.querySelector('.video-player__wrap') : null;
      const videoPlaceholder = videoWrp ? videoWrp.querySelector('.video-player__placeholder') : null;

      btn.addEventListener('click', () => {
        if (videoWrp) {
          btn.classList.add('is-hidden');
          videoPlaceholder.classList.add('is-hidden');
          // video.play();
          video.addEventListener('ended', () => {
            btn.classList.remove('is-hidden');
            videoPlaceholder.classList.remove('is-hidden');
          }, {once: true});
        }
      });

      if (video) {
        video.addEventListener('play', () => {
          btn.classList.add('is-hidden');
          videoPlaceholder.classList.add('is-hidden');
        });
      }
    });
  };

  export {initVideoPlay};
*/
const initVideoPlay = () => {
  const videoPlayer = document.querySelector('[data-video="video-player"]');

  if (!videoPlayer) {
    return;
  }

  const tag = document.createElement('script');
  const body = document.querySelector('body');
  tag.src = 'https://www.youtube.com/iframe_api';
  body.append(tag);

  const initPlayer = (playerEl) => {
    const overlay = videoPlayer.querySelector('[data-video="overlay"]');
    const button = videoPlayer.querySelector('[data-video="button-play"]');
    const player = new YT.Player(playerEl, {
      width: '384',
      height: '256',
      playerVars: {
        'autoplay': 0,
        'modestbranding': 1,
        'controls': 1,
        'rel': 0,
        'showinfo': 0,
      },
      events: {
        'onStateChange': (evt) => {
          if (evt.data === 0) {
            overlay.classList.toggle('is-hidden');
          }
        },
      },
      videoId: playerEl.dataset.videoId,
    });

    button.addEventListener('click', () => {
      overlay.classList.toggle('is-hidden');
      player.playVideo();
    });
  };

  window.onYouTubePlayerAPIReady = () => {
    const playerEl = videoPlayer.querySelector('[data-video="player"]');
    initPlayer(playerEl);
  };
};

export {initVideoPlay};
