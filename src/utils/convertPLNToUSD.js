export const convertPLNToUSD = (PLN) => {


  if(!Number.isNaN()) {
    return NaN
  }
  if(PLN <= Number.MIN_VALUE){
    return  '$0.00'
}
  if(PLN !== String && PLN !== Number ){
    return 'Error'
  }









  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  });

  return formatter.format(PLNtoUSD);
}
