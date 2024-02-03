document.getElementById('calculateBtn').addEventListener('click',calcuateLoan);
function calcuateLoan()
{
    const loanAmount=parseFloat(document.getElementById("loanAmountInput").value)
    const interstRate=parseFloat(document.getElementById("interstRateinput").value)
    const loanTerm=parseFloat(document.getElementById("loanTermInput").value)


    if(isNaN(loanAmount)||isNaN(interstRate)||isNaN(loanTerm))
    {
        alert("please enter valid no")
    }
    const monthlyIntrest=interstRate/100/12
    const totalPayments=loanTerm;
    const monthlyPayment=(loanAmount*monthlyIntrest)/(1-Math.pow(1+monthlyIntrest,-totalPayments))
    const totalInttest=(monthlyPayment*totalPayments)-loanAmount
    displayresult(monthlyPayment,monthlyIntrest)
}

function displayresult(monthlyIntrest,totalInttest){
const resultDiv=document.getElementById('result')

resultDiv.innerHTML=`
<p><strong>Monthly Intrest: ${monthlyIntrest.toFixed(2)}</p></strong>
<p><strong>Total Inttest: ${totalInttest.toFixed(2)}</p></strong>
`;
}