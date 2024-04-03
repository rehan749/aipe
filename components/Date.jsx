// import React from 'react'

const CurrentDate = () => {

    const currentDate = new Date();

    // Array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Format the date
    const formattedDate = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  
  
  return (
    <div className="date">
         {formattedDate}
    </div>
  )
}

export default CurrentDate