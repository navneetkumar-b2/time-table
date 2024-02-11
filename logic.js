const TIMESLOT=[
  ["9:15 - 10:10" , "10:10 - 11:05"
  ,"11:05 - 12:00",
  "12:00 - 12:55","12:55 - 1:50",
  "1:50 - 2:45"],
  ["9:15 - 11:05"
  ,"11:05 - 12:00"
  ,"12:00 - 12:55","12:55 - 1:50"
  ,"1:50 - 2:45","2:45 - 3:40","3:40 - 4:35"],
  ["9:15 - 10:10" , "10:10 - 11:05"
  ,"11:05 - 12:00"
  ,"12:00 - 12:55","12:55 - 1:50"
  ,"1:50 - 4:35"],
  ["9:15 - 10:10" , "10:10 - 11:05","11:05 - 12:00",
  "12:00 - 12:55","12:55 - 1:50"
  ,"1:50 - 2:45","2:45 - 3:40","3:40 - 4:35"],
  ["9:15 - 10:10" ,"10:10 - 12:00"
  ,"12:00 - 12:55","12:55 - 1:50"
  ,"1:50 - 2:45","2:45 - 4:35"],
  [0],[0]
  ]
  const SUBJECT=[
      ["MATHS" , "PHYSICS"
      ,"BEE"
      ,"BREAK","MATHS",
      "PHY(B1)/LIBRARY(B2)"],
      ["BEE LAB(B1)/PHY LAB(B2)"
      ,"MATHS"
      ,"BREAK","BEE"
      ,"PHYSICS","BEE","MATHS(B1)/PHYSICS(B2)"],
      ["MPD" , "PHYSICS"
      ,"MATHS"
      ,"BREAK","BEE"
      ,"EGD"],
      ["PHYSICS" , "BEE","MATHS"
      ,"BREAK","MPD","EGD LAB(B1)/MATHS(B2)"
      ,"LIBRARY(B1)/BEE(B2)","FREE"],
      ["BEE(B1)/EGD LAB(B2)" , "EGD"
      ,"BREAK","PHYSICS"
      ,"MATHS","PHY LAB(B1)/BEE LAB(B2)"],
      [0],[0]
      ]
  
      let day;
      let weather_body = document.querySelector('.w-report')
  
      function displayTimeTable(day) {
        let len = TIMESLOT[day].length;
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
        `;
    
        for (let i = 0; i < len; i++) {
            tableHTML += `
                <tr>
                    <td>${TIMESLOT[day][i]}</td>
                    <td>${SUBJECT[day][i]}</td>
                </tr>
            `;
        }
    
        tableHTML += `
                </tbody>
            </table>
        `;
    
        weather_body.innerHTML = tableHTML;
    }
    
    
  
  
  
  
      
  
// let weather_body = document.querySelector('.w-report')
displayHoliday=()=>{
  weather_body.innerHTML = `
  <h2>Enjoy! its OFF</h2>
  `;


}
function HandleOnClick(dayToDisplay){
  if(dayToDisplay>=0 && dayToDisplay<=4){
    // alert(dayToDisplay)
    displayTimeTable(dayToDisplay)
   }
   else if (dayToDisplay==11){
    displayHoliday();
}
else if (dayToDisplay==99){
  const d = new Date();
let dayy = d.getDay();
if(dayy==0){
  displayHoliday();
}
else if(dayy==6){
  displayHoliday();

}
else if (dayy>=1 && dayy<=5){
  let on=dayy-1;
displayTimeTable(on)
} 
   }
   else if (dayToDisplay==999){

    const d = new Date();
  let dayy = d.getDay();
  dayy+=1;
  if(dayy==0){
    displayHoliday();
  }
  else if(dayy==6){
    displayHoliday();
  
  }
  else if (dayy>=1 && dayy<=5){
    let on=dayy-1;
  displayTimeTable(on)
  } 
     }
}












