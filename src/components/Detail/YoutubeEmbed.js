export default function YoutubeEmbed({ link }) {
  return (
    <div
      className="overflow-hidden relative h-0"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        className="left-0 top-0 w-full h-full absolute"
        src={`https://www.youtube.com/embed/${link}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
