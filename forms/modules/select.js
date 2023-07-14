export default function initSelectOpt(destSelect) {
  const townsArr = ['Vilnius', 'Kaunas', 'Klaipeda', 'London', 'Bahamas'];
  const townsArrObj = [
    { value: 'vilnius', label: 'Vilnius' },
    { value: 'kaunas', label: 'Kaunas' },
    { value: 'klaipeda', label: 'Klaipeda' },
    { value: 'london', label: 'London' },
    { value: 'bahamas', label: 'Bahamas' },
  ];
  // sukti cikla per townsArr
  // townsArr.forEach((townName) => {
  //   // sukurti option taga
  //   const optEl = document.createElement('option');
  //   // ideti miesto pav i value ir textContenta
  //   optEl.value = townName;
  //   optEl.textContent = townName;
  //   // ideti ta taga i selecta
  //   els.town.append(optEl);
  // });
  townsArrObj.forEach((optionsObj) => {
    console.log('optionsObj ===', optionsObj);
    // sukurti option taga
    // const optionsObj = { value: 'vilnius', label: 'Vilnius' };
    const optEl = document.createElement('option');
    // ideti miesto pav i value ir textContenta
    optEl.value = optionsObj.value;
    optEl.textContent = optionsObj.label;
    // ideti ta taga i selecta
    destSelect.append(optEl);
  });
}
