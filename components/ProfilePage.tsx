"use client";

import BottomBar from "../components/BottomBar";
import { useDynamicContext, useUserWallets } from '@dynamic-labs/sdk-react-core';
import { GetClaimableTokens, ClaimAirdrop } from '@/utils/SelfClaimAirdropContract';

const ProfilePage = () => {
  const { user, primaryWallet } = useDynamicContext();
  const userWallets = useUserWallets();

  const quests = [
    { id: 1, name: "Quest 1", completed: true },
    { id: 2, name: "Quest 2", completed: true },
    { id: 3, name: "Quest 3", completed: true },
  ];

  var walletAddress = "0x1B0f8FAE193873F453a7dE8e469468EDf8eedDBD";
  if (userWallets && userWallets.length > 0)
  {
    walletAddress = userWallets[0].address;
    for(var i = 0; i < userWallets.length; i++)
    {
      if (userWallets[i].chain == "Flow") 
      {
        walletAddress = userWallets[i].address;
        break;
      }
    }
  }


  // Function to determine if the Claim Rewards button should be enabled
  const isEligible = quests.every((quest) => quest.completed);
  const walletAddressBeauty = walletAddress.substring(0, 8) + "...." + walletAddress.substring(walletAddress.length - 8, walletAddress.length-1);

  const handleClaimRewards = async () => {
    if (isEligible) {
      try {
        //const result = await SendAirdrop([walletAddress], [5]);
        const signer = primaryWallet ? await primaryWallet.signMessage("ClaimAirdrop") : null;
        const result = await ClaimAirdrop(signer);
        console.log("handleClaimRewards: ", result);
        alert("Rewards / Airdrop successfully claimed! " + result);
      } catch (error) {
        console.error('Error calling contract:', error);
        alert("Rewards / Airdrop ERROR: " + error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pb-20">
      {/* Profile Content */}
      <div className="bg-gray-800 text-white rounded-lg p-4 mb-6 shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <h2 className="text-xl font-bold"> {user && user.username ? user.username : "ETHGlobal Bangkok"}</h2>
            <p className="text-sm text-gray-400">Wallet: <a href={"https://evm-testnet.flowscan.io/address/" + walletAddress}> {walletAddressBeauty} </a> </p>
            <p
              className={`text-sm font-bold ${
                isEligible ? "text-green-500" : "text-red-500"
              }`}
            >
              {isEligible
                ? "Eligible to claim rewards"
                : "❌ Not eligible to claim rewards, please complete the quests."}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />

      {/* Claim Rewards Button */}
      <div className="text-center mb-6">
        <button
          className={`${
            isEligible
              ? "bg-orange text-black hover:bg-orange-600"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          } font-bold px-6 py-3 rounded`}
          disabled={!isEligible}
          onClick={handleClaimRewards}
        >
          Claim Rewards / Airdrop
        </button>
      </div>

      {/* Quest Checklist */}
      <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-bold mb-4">Quest Checklist</h3>
        <ul className="space-y-2">
          {quests.map((quest) => (
            <li
              key={quest.id}
              className="flex justify-between items-center p-2 bg-gray-700 rounded"
            >
              <span>{quest.name}</span>
              {quest.completed ? (
                <span className="text-green-500 font-bold">✅</span>
              ) : (
                <span className="text-red-500 font-bold">❌</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
