import Foot from '@/components/Foot';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

// Import your JSON data (update the path as necessary)
import data from "../../test/imaging";

const CategoryPage = () => {
  const router = useRouter();
  const [selectedCenter, setSelectedCenter] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  const Imaging = data.Imaging;

  const handleItemClick = (centerName) => {
    setSelectedCenter(centerName);
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <div className="bg-[#F2F7FF] min-h-screen md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Imaging Test
        </h1>

        <div className="flex justify-center space-x-4">
          {Imaging.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 w-36 h-32 rounded-xl flex flex-col items-center cursor-pointer hover:bg-[#017BFC]"
              onClick={() => handleItemClick(item.centerName)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="h-16 w-16 mb-2">
                <Image
                  src={hoveredItem === index ? item.hoverIcon : item.icon} // Conditionally render hover image
                  alt={item.name}
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-xl font-semibold">{item.name}</span>
            </div>
          ))}
        </div>

        {selectedCenter && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Center Name:</h2>
            <p className="text-xl">{selectedCenter}</p>
          </div>
        )}
      </div>
      <Foot />
    </>
  );
};

export default CategoryPage;
