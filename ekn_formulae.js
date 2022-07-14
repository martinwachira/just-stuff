const principal = 2000;
const time = 5;
const rate = 0.08;
const n = 12;
const compoundInterest = (p, t, r, n) => {
  const amount = p * Math.pow(1 + r / n, n * t);
  const interest = amount - p;
  return interest;
};
console.log(compoundInterest(principal, time, rate, n));
