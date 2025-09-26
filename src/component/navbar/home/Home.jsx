//Home.jsx
import { useState } from "react";
import Navbar from "../Navbar";
import sendmoney from '../../../assets/send1.png'
import addmoney from '../../../assets/wallet1.png'
import transaction from '../../../assets/transaction1.png'
import bonus from '../../../assets/bonus1.png'
import money from '../../../assets/money1.png'
import purse from '../../../assets/purse1.png'
import Footer from "../../../Foter/Footer";

// import TransactionCard from "./TransactionCard";
const Home = ({Transaction,array}) => {
  const pass = "1234";
  const [pin, setPin] = useState("");
  const [mobile,setMobile]=useState("");
  
  const [balance,setBalance]=useState(50000);
  const [amount,setAmount]=useState("");

  const [activeSection, setActiveSection] = useState("addMoney");
  //Add money
  function AddMoney() {
    
    if(mobile.length!==11){
      alert("Please Provide 11 Digit Bank Number");
      return;
    }
    if(pin!==pass){
      alert("Invalid Pin Number");
      return;
    }
    alert("Money Added Successfully");
    setBalance(balance+Number(amount));
    Transaction(["Add Money",amount]);
  }
  function CashOut() {
    if(pin!==pass){
      alert("Invalid Pin Number");
      return;
    }
    if(mobile.length!==11){
      alert("Please Provide 11 Digit Mobile Number");
      return;
    }
    if(Number(amount)>balance){
      alert("Insufficient Balance");
      return;
    }
    alert("Cash Out Successfully");
    setBalance(balance-Number(amount));
    Transaction(["Cash Out",amount]);
  }
  // Recharge
  function Recharge() {
    if(mobile.length!==11){
      alert("Please Provide 11 Digit Mobile Number");
      return;
    }
    if(pin!==pass){
      alert("Invalid Pin Number");
      return;
    }
    setBalance(balance-Number(amount));
    alert("Recharge Successfully");
    Transaction(["Recharge",amount]);
  }
  // Pay Bill
  function PayBill() {
    setBalance(balance-1000);
    alert("Bill Paid Successfully");
    Transaction(["Pay Bill",1000]);
  }
  // Claim Bonus
  function ClaimBonus() {
    setBalance(balance+500);
    alert("Bonus Claimed Successfully");
    Transaction(["Get Bonus",500]);
  }
  return (
    <div>
      <Navbar />

      <div className="shadow-lg max-w-lg mx-auto  p-4 rounded-lg">
        {/* Balance */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold mt-3">
            <span className="text-gray-500">Hello!</span> Ayas
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mt-3">৳ <span>{balance}</span></h1>
            <p className="text-gray-500">Available Balance</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-4 p-4 bg-gray-100 rounded-lg">
          <div 
            className={` ${activeSection === "addMoney" ? "!bg-[#7f8ae9] text-white" : ""} bg-white h-20 flex font-semibold flex-col items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
            onClick={() => setActiveSection("addMoney")}
          >
            <img src={addmoney} alt="Add Money" className="h-7 w-7" />
            <p>Add Money</p>
          </div>
          <div 
            className={` ${activeSection === "cashOut" ? "!bg-[#7f8ae9] text-white" : ""} bg-white h-20 flex font-semibold flex-col items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
            onClick={() => setActiveSection("cashOut")}
          >
            <img src={sendmoney} alt="Cash Out" className="h-7 w-7" />
            <p>Cash Out</p>
          </div>
          <div 
            className={` ${activeSection === "recharge" ? "!bg-[#7f8ae9] text-white" : ""} bg-white h-20 flex  font-semibold flex-col items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
            onClick={() => setActiveSection("recharge")}
          >
            <img src={money} alt="Recharge" className="h-7 w-7" />
            <p>Recharge</p>
          </div>
          <div 
            className={` ${activeSection === "payBill" ? "!bg-[#7f8ae9] text-white" : ""} bg-white h-20 flex  font-semibold flex-col items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
            onClick={() => setActiveSection("payBill")}
          >
            <img src={purse} alt="Pay Bill" className="h-7 w-7" />
            <p>Pay Bill</p>
          </div>
          <div 
            className={` ${activeSection === "bonus" ? "!bg-[#7f8ae9] text-white" : ""} bg-white h-20 flex  font-semibold flex-col items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
            onClick={() => setActiveSection("bonus")}
          >
            <img src={bonus} alt="Bonus" className="h-7 w-7" />
            <p>Get Bonus</p>
          </div>
          <div 
            className={` ${activeSection === "transaction" ? "!bg-[#7f8ae9] text-white" : ""} bg-white h-20  font-semibold flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200`}
            onClick={() => setActiveSection("transaction")}
          >
            <img src={transaction} alt="Transaction" className="h-7 w-7 hover:bg-gray-200" />
            <p>Transaction</p>
          </div>
        </div>

        
        {activeSection === "addMoney" && (
          <div className="mt-4 p-4 rounded bg-white ">
            <h2 className="text-lg font-bold mb-2 text-center">Add Money</h2>
            <label htmlFor="bank" className="block mb-2 text-md font-semibold">Select a Bank</label>
            <select className="select px-5 select-primary input w-full rounded-full cursor-pointer" required>
              <option disabled selected>Select Bank</option>
              <option>City Bank</option>
              <option>Islami Bank</option>
              <option>Rupali Bank</option>
              <option>Al-Arafah</option>
            </select>
            <label htmlFor="bank" className="block mb-2  text-md font-semibold">Bank Account Number</label>
            <input 
              type="number" 
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              placeholder="Enter your bank account number" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <label htmlFor="bank" className="block mb-2 text-md font-semibold">Amount to Add</label>
            <input 
              type="amount" 
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="Add Amount" 
              className="border p-2 rounded-full w-full mb-2 px-5"
            />
            <label htmlFor="bank" className="block mb-2 text-md font-semibold">Pin Number</label>
            <input 
              type="password" 
              value={pin}
              onChange={(e)=>setPin(e.target.value)}
              placeholder="Enter your pin number" 
              className="border p-2 rounded-full w-full mb-2 px-5"
            />
            <button onClick={AddMoney}  className="btn hover:bg-blue-600 px-4 py-2 w-full rounded-full bg-blue-500 text-white">Add</button>
          
          </div>
        )}

        {activeSection === "cashOut" && (
          <div className="mt-4 p-4  rounded bg-white">
            <h2 className="text-lg font-bold mb-2 text-center">Cash Out</h2>
            <label htmlFor="agent" className="block mb-2  text-md font-semibold">Agent Number</label>
            <input 
              type="number" 
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              placeholder="Enter 11 digit number" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <label htmlFor="bank" className="block mb-2  text-md font-semibold">Amount</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="Enter amount to withdraw" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <label htmlFor="bank" className="block mb-2  text-md font-semibold">Pin Number</label>
            <input 
              type="password" 
              value={pin}
              onChange={(e)=>setPin(e.target.value)}
              placeholder="Enter 4 digit pin" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <button onClick={CashOut} className="btn hover:bg-blue-600 px-4 py-2 w-full rounded-full bg-blue-500 text-white">Cash Out</button>
          </div>
        )}

        {activeSection === "recharge" && (
          <div className="mt-4 p-4  rounded bg-white">
            <h2 className="text-lg font-bold mb-2 text-center">Recharge</h2>
            <label htmlFor="bank" className="block mb-2  text-md font-semibold">Mobile Number</label>
            <input 
              type="number" 
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              placeholder="Enter 11 digit mobile number" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <label htmlFor="bank" className="block mb-2  text-md font-semibold">Amount</label>
            <input 
              type="amount" 
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="Enter amount" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <label htmlFor="bank" className="block mb-2  text-md font-semibold">Pin Number</label>
            <input 
              type="password" 
              value={pin}
              onChange={(e)=>setPin(e.target.value)}
              placeholder="Enter 4 digit pin" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <button onClick={Recharge} className="btn hover:bg-blue-600 px-4 py-2 w-full rounded-full bg-blue-500 text-white">Recharge</button>
          </div>
        )}

        {activeSection === "payBill" && (
          <div className="mt-4 p-4  rounded bg-white">
            <h2 className="text-lg font-bold mb-2 text-center">Pay Bill</h2>
            <select className="select px-5 select-primary input w-full rounded-full cursor-pointer" required>
              <option disabled selected>Select Bill</option>
              <option>Gas Bill</option>
              <option>Electricity Bill</option>
              <option>Water Bill</option>
              <option>Telephone Bill</option>
            </select>
            <label htmlFor="bank" className="block my-2  text-md font-semibold">Bill ID</label>
            <input 
              type="text" 
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
              placeholder="Enter bill ID" 
              className="border p-2 rounded-full w-full mb-2 px-5 "
            />
            <button onClick={PayBill} className="btn px-4 py-2 rounded-full w-full bg-red-500 text-white">Pay</button>
          </div>
        )}

        {activeSection === "bonus" && (
          <div className="mt-4 p-4  rounded bg-white">
            <h2 className="text-lg font-bold mb-2">Get Bonus</h2>
            <p className="mb-2">You have 2 pending bonuses.</p>
            <button onClick={ClaimBonus} className="px-4 py-2 btn w-full  bg-yellow-500 text-white rounded-full">Claim Bonus</button>
          </div>
        )}

        {activeSection === "transaction" && (
          <div className="mt-4 p-4  rounded bg-white">
            <h2 className="text-lg font-bold mb-2">Transaction</h2>
            {/* Card */}

            {
              array.map((a,i)=>{
                const currentDate = new Date();
                const options = { day: '2-digit', month: 'short', year: 'numeric' };
                const formattedDate = currentDate.toLocaleDateString('en-US', options);
                return (
                  <div key={i} className="bg-[#f2f2f2] py-2 px-4 rounded-lg mb-2 shadow-sm flex items-center justify-between">
                    <div className="">
                      <p className="text-lg font-semibold">{a[0]}</p>
                      <p className="text-red-600 text-md font-semibold">৳{a[1]}</p>
                    </div>
                    <p>{formattedDate}</p>
                  </div>
                )
              })
            }
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
