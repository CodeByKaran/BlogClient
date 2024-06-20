
function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  
  const year = date.getFullYear().toString().slice(-2); 
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2)
  const hours = ("0" + date.getHours()).slice(-2); 
  const minutes = ("0" + date.getMinutes()).slice(-2);  
  const formattedDateTime = `${day}-${month}-${year} • ${hours}:${minutes}`;
  return formattedDateTime;
}


function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${String(day).padStart(2, '0')} • ${month} • ${year}`;
    return formattedDate;
}


export {
   formatDateTime,
   formatDate
}