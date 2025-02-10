export default function VideoEmbed({ src, style: customStyle = {} }) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // for 16:9 ratio
        height: 0,
        marginBottom: "2rem",
        ...customStyle,
      }}
    >
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
}
