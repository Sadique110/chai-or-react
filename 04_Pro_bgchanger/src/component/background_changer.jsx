import React from "react";

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = React.useState("olive");
  const handleChangeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <>
    <div style={{ backgroundColor }}>
        <button onMouseEnter={handleChangeColor}>
          Change Background Color
        </button>
      </div>
      <div class="w-full h-screen duration-200 bottom-0 left-0 absolute flex items-bottom justify-center gap-2">
        <button className="text-white font-bold">Hover me </button>
        <button className="text-white font-bold">Hover me </button>
        <button className="text-white font-bold">Hover me </button>
      </div>
  </>
  );
}

export default BackgroundChanger;