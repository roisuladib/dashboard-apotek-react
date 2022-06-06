export const NumberFormat = (num = 0) => {
   const thousand = new Intl.NumberFormat('id').format(num);
   return 'Rp ' + thousand;
}