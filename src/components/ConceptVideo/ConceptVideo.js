const ConceptVideo = () => {
  return (
    <div className="text-center relative flex overflow-x-scroll m-5 bg-gray-100 z-30 right-10">
      <div>
        <div className="absolute inset-2 z-20 pointer-events-none w-screen h-screen m-5">
          {/* This div prevents hovering directly over the video */}
          <h1 className="absolute z-10 text-purple-700 bg-white p-4 text-3xl left-[5.2%] font-semibold">
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
        <div className="absolute inset-2 z-20 pointer-events-none w-screen h-screen m-5">
          {/* This div prevents hovering directly over the video */}
          <h1 className="absolute z-10 text-purple-700 bg-white p-4 text-3xl left-[105.2%] font-semibold">
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
