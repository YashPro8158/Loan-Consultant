const loanamountInput = document.querySelector(".loan-amout");
const loanInterestInput = document.querySelector(".interest-rate");
const loantenureInput = document.querySelector(".loan-tenure");

const TotalEmiShow = document.querySelector(".total-Emi .value");
const TotalInterestShow = document.querySelector(".total-interest .value");
const TotalAmounShow = document.querySelector(".total-amount .value");

const clickresultbtn = document.querySelector(".calculteBtn");

let Loanamount = parseFloat(loanamountInput.value);
let InterestRate = parseFloat(loanInterestInput.value);
let LoanTenure = parseFloat(loantenureInput.value);

let interest = InterestRate / 12 / 100;

let myChart;

const displaychart = (totalinterestp) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Total Interest", "Principal Loan Amount"],
      datasets: [
        {
          data: [totalinterestp, Loanamount],
          backgroundColor: ["#ee5253", "#14213d"],
          borderWidth: 0,
        },
      ],
    },
  });
};

const updateChart = (totalinterestp) => {
  myChart.data.datasets[0].data[0] = totalinterestp;
  myChart.data.datasets[0].data[1] = Loanamount;
  myChart.update();
};
// Udate the Value Here

const UpDateData = (emi) => {
  TotalEmiShow.innerHTML = Math.round(emi);
  let totalamount = Math.round(LoanTenure * emi);
  TotalAmounShow.innerHTML = totalamount;
  let interestpayable = Math.round(totalamount - Loanamount);
  TotalInterestShow.innerHTML = interestpayable;

  if (myChart) {
    updateChart(interestpayable);
  } else {
    displaychart(interestpayable);
  }
};

const calculateEmi = () => {
  let emi =
    Loanamount *
    interest *
    (Math.pow(1 + interest, LoanTenure) /
      (Math.pow(1 + interest, LoanTenure) - 1));
  return emi;
};
const refreshData = () => {
  Loanamount = parseFloat(loanamountInput.value);
  InterestRate = parseFloat(loanInterestInput.value);
  LoanTenure = parseFloat(loantenureInput.value);

  interest = InterestRate / 12 / 100;
};
const init = () => {
  refreshData();
  let emi = calculateEmi();
  UpDateData(emi);
};
init();

clickresultbtn.addEventListener("click", init);
