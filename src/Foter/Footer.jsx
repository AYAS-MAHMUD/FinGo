import home from "../assets/home.png";
import account from "../assets/user.png";
import discount from "../assets/discount.png";

const Footer = () => {
  return (
    <div className="cursor-pointer bg-blue-500 text-white max-w-lg mx-auto p-4 flex items-center justify-around rounded-t-lg  bottom-0 left-0 right-0">
      <div className="flex flex-col items-center">
        <img src={home} alt="Home" className="h-6 w-6 mb-1 text-white" />
        <p className="text-white font-semibold">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={discount} alt="Account" className="h-6 w-6 mb-1 text-white" />
        <p className="text-white font-semibold">Offers</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={account} alt="Discount" className="h-6 w-6 mb-1 text-white" />
        <p className="text-white font-semibold">Account</p>
      </div>
    </div>
  );
};

export default Footer;
