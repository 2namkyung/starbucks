import { useEffect } from 'react';

export default function Youtube() {
  const loadVideo = () => {
    const player = new window.YT.Player('player', {
      videoId: 'An6LvWQuj_8',
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'An6LvWQuj_8',
      },
      events: {
        onReady(event: any) {
          event.target.playVideo();
          event.target.mute();
        },
      },
    });
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, []);

  return (
    <div className="relative h-[700px] bg-[#333] overflow-hidden">
      <div
        className="absolute w-[1905px] left-[50%] top-[50%] ml-[calc(1905px/-2)] mt-[calc(1905px*9/16/-2)]
        before:block before:w-[100%] before:h-0 before:pt-[56.25%]"
      >
        <div id="player" className="w-[100%] h-[100%] absolute top-0 left-0" />
      </div>
      <div className="bg-[url('/img/video_cover_pattern.png')] bg-[rgba(0,0,0,.3)] absolute top-0 left-0 w-full h-full" />
      <div className="relative w-[1100px] h-[inherit] m-auto">
        <img
          src="/img/floating1.png"
          alt="Icon"
          className="absolute top-[50px] left-0"
        />
        <img
          src="/img/floating2.png"
          alt="Icon"
          className="absolute top-[350px] left-0"
        />
      </div>
    </div>
  );
}
