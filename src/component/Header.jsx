export default function Header() {
  const images = [
    "https://www.scottmarshall.co.uk/wp-content/uploads/2022/09/MCU-Thunderbolts-Marvel.jpg",
    "https://img.youtube.com/vi/bKGxHflevuk/maxresdefault.jpg",
    "https://i.ytimg.com/vi/HPcBayEhJnk/maxresdefault.jpg",
  ];

  return (
    <>
      <div
        className="h-[70vh] w-full bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${images[2]})` }}
      >
        {/* Optional content here */}
      </div>
    </>
  );
}
