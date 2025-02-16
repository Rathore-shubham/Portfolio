import photo from "../assets/dp.jpg";

const House = () => {
  return (
    <>
      <img src={photo} alt="photo" className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg" />
    </>
  );
};

export default House;
