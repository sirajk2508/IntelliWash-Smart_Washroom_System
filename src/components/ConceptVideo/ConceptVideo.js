const ConceptVideo = () => {
  return (
    <div className="text-center relative flex overflow-x-scroll">
      <div>
        <div className="absolute inset-2 z-20 pointer-events-none w-screen h-screen">
          {/* This div prevents hovering directly over the video */}
          <h1 className="absolute z-10 text-purple-700 bg-white p-4 text-5xl left-[5.2%] top-[5%] font-bold">
            Concept Video
          </h1>
        </div>
        <iframe
          className="relative w-screen h-screen -z-10"
          src="https://www.youtube.com/embed/imfmboauyRo?autoplay=1&loop=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <div className="absolute inset-2 z-20 pointer-events-none w-screen h-screen">
          {/* This div prevents hovering directly over the video */}
          <h1 className="absolute z-10 text-purple-700 bg-white p-4 text-5xl left-[105.2%] top-[5%] font-bold">
            Demo Video
          </h1>
        </div>
        <iframe
          className="relative w-screen h-screen -z-10"
          src="https://www.youtube.com/embed/imfmboauyRo?autoplay=1&loop=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default ConceptVideo;
