
export async function connection() {
const addressFBAPP = '0xa00F24e545bA6Cc26Fb88Cb6E2B385f464c3EF3b';
const otiumContract = "0x8702Cb6908D8De666bBb54F18762047791590C1B";
const    ABI_balance =    [{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}]

    // connection metamask
const provider = new ethers.providers.Web3Provider(window.ethereum)
const user = await provider.send("eth_requestAccounts", []);
let accountConnection = user[0];
// balance of account metamask
const contract = new ethers.Contract(otiumContract, ABI_balance, provider);
const balanceOtiums = await contract.balanceOf(accountConnection);
let amountOtiums = ethers.utils.formatEther(balanceOtiums).toString();
let otiums = Number.parseFloat(amountOtiums).toFixed(0);
document.querySelector('#balanceMetamask').innerHTML =`${otiums} Otiums`;
//balance of account FBAPP
const balanceOtiumsFBAPP = await contract.balanceOf(addressFBAPP);
amountOtiums = ethers.utils.formatEther(balanceOtiumsFBAPP).toString();
otiums = Number.parseFloat(amountOtiums).toFixed(0);
document.querySelector('#balance').innerHTML =`${otiums} Otiums`;

// provider.getBalance(addressFBAPP).then((balance) => {

//  const balanceInEth = ethers.utils.formatEther(balance);
//  let result = Number.parseFloat(balanceInEth).toFixed(2);
//  document.querySelector('#balance').innerHTML =`${result} Otiums`;
// });
// render
let subint = accountConnection.substr(0,4);
let subfinal = accountConnection.substr(-4,4);
document.querySelector('#userMetamask').innerHTML =subint + '...' + subfinal;
subint = addressFBAPP.substr(0,4);
subfinal = addressFBAPP.substr(-4,4);
document.querySelector('#walletFBAPP').innerHTML =subint + '...' + subfinal;
}

export async function sender() {
const otiumContract = "0x8702Cb6908D8De666bBb54F18762047791590C1B";
const ABI_transfer = [{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}];

//    const network = 'bnbt' 
//const provider = ethers.getDefaultProvider(network)
const provider = new ethers.providers.Web3Provider(window.ethereum)
const addressFBAPP = '0xa00F24e545bA6Cc26Fb88Cb6E2B385f464c3EF3b';
// balance of account metamask
const contract = new ethers.Contract(otiumContract, ABI_transfer, provider.getSigner());
const amount = ethers.utils.parseEther('1000');
let transaction;
try {
 transaction = await contract.transfer(addressFBAPP, amount);
//const Ok = await transaction.wait();
console.log('transaccion ', transaction);
//console.log('ok  ', Ok);
return transaction.hash;
} catch (error) {
    console.log(error.message);
    return error.message;
}

}