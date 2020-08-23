export function diffTime (startDate, endDate) { 
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const diff = endTime - startTime; //时间差的毫秒数 
 
  // 计算出相差天数 
  const days = Math.floor(diff / (24 * 3600 * 1000)); 

  // 计算出小时数
  let restTime = diff % (24 * 3600 * 1000);
  const hours = Math.floor(restTime / (3600 * 1000));

  // 计算相差分钟数 
  restTime = restTime % (3600 * 1000);
  const minutes = Math.floor(restTime / (60 * 1000));

  // 计算相差秒数 
  restTime = restTime % (60 * 1000);
  const seconds = Math.round(restTime / 1000);
     
  return { days, hours, minutes, seconds }
}
