const today = new Date();
const date = () => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  console.log(year + '年' + month + '月' + day + '日');
};

date();