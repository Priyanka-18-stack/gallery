import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaQuestionCircle } from "react-icons/fa";

export function Widget({ className = "" }) {
  const defaultImages = [
    "https://images.unsplash.com/photo-1680538993863-70e440871f6e?w=400",
    "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=400",
    "https://images.unsplash.com/photo-1519662978799-2f05096d3636?w=400",
  ];

  const [images, setImages] = useState(defaultImages);
  const [index, setIndex] = useState(0);

  const handleAddImage = (e) => {
    const file=e.target.files[0];
    if (file){
      const newimage=URL.createObjectURL(file)
      setImages([...images,newimage])
    };
  };

  const handlePrev = () => setIndex((prev) => Math.max(0, prev - 3));
  const handleNext = () => setIndex((prev) => Math.min(images.length - 3, prev + 3));

  const visibleImages = images.slice(index, index + 3);

  return (
    <div className={`bg-[#363C43] rounded-lg shadow-md ${className}`}>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4 md:px-6 pt-5 pb-6">
        <div className=" bg-transparent absolute left-2 md:left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-6 md:h-6 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:bg-[#5A5E64] cursor-pointer">
          <FaQuestionCircle className="w-3 h-3 md:w-3 md:h-5" />
        </div>
        <button className="bg-black text-white px-6 md:ml-10 px-8 py-2 md:py-3 rounded-lg shadow">
          Gallery
        </button>
        <div className="flex items-center gap-2 md:gap-4">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAddImage}/>
            <label htmlFor="fileInput"
            className="shadow-lg shadow-cyan-500/50 flex items-center  text-white text-sm gap-2 bg-[#363C43]  border border-gray-800  hover:bg-gray-300 text-gray-600 px-3 md:px-4 py-1.5 md:py-2 bg-[#363C43]  rounded-full transition"
          >
            <FaPlus className="w-3 h-3 md:w-4 md:h-4" /> ADD IMAGE
          </label>

          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black disabled:opacity-50 flex items-center justify-center"
          >
            <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={index + 3 >= images.length}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black disabled:opacity-50 flex items-center justify-center"
          >
            <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
      <div className="px-2 md:px-6 pb-8">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {visibleImages.map((image, idx) => (
            <div
              key={index + idx}
              className="aspect-square rounded-lg overflow-hidden bg-gray-700 hover:scale-105 transition-transform"
            >
              <img
                src={image}
                alt={`Gallery ${index + idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
