

const Profile = () => {
    return (
        <div className="bg-blue-50 shadow-lg max-w-lg mx-auto h-[80vh] flex  justify-center ">
            <div className="w-30 rounded-full">
                <h1 className="text-3xl font-bold text-center mt-8 mb-15 text-gray-700">Profile</h1>
              <img
              className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
                <h1 className="text-2xl font-bold text-center mt-4">Ayas</h1>
                <p className="text-center">01863-199573</p>
                <p className=" w-40 text-lg mt-3">virtual card number</p>
                <p className="relative -left-8 font-semibold text-white bg-red-400 w-50 text-lg text-center">1234-5678-9012-3456</p>
                <div className="flex  gap-4 mt-6 relative -left-32 top-10">
                    <button className="btn btn-outline btn-info w-30 mx-auto">Settings</button>
                    <button className="btn btn-outline btn-info w-30 mx-auto">Support</button>
                    <button className="btn btn-outline btn-info w-30 mx-auto">Logout</button>
                </div>
                
                    
                
            </div>
        </div>
    );
};

export default Profile;