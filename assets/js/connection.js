
export async function connection() {

const provider = new ethers.providers.Web3Provider(window.ethereum)

const user = await provider.send("eth_requestAccounts", []);

//const signer = provider.getSigner()
let accountConnection = user[0];
//console.log('esta conectado',accountConnection);
let subint = accountConnection.substr(0,4);
let subfinal = accountConnection.substr(-4,4);
document.querySelector('#userMetamask').innerHTML =subint + '...' + subfinal;
    
const network = 'bnbt' 
//const provider = ethers.getDefaultProvider(network)
const addressFBAPP = '0xa00F24e545bA6Cc26Fb88Cb6E2B385f464c3EF3b';
subint = addressFBAPP.substr(0,4);
subfinal = addressFBAPP.substr(-4,4);
document.querySelector('#walletFBAPP').innerHTML =subint + '...' + subfinal;
provider.getBalance(addressFBAPP).then((balance) => {
 // convert a currency unit from wei to ether
 const balanceInEth = ethers.utils.formatEther(balance);
 let result = Number.parseFloat(balanceInEth).toFixed(2);
 document.querySelector('#balance').innerHTML =`${result} Otiums`;
})

}