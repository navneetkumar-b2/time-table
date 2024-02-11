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

    displayTimeTable=(day)=>{
        alert("i called -- displayTimeTable")
        let len=TIMESLOT[day].length;
        console.log("no of periods = ",len)
        for(let i=0;i<len;i++){
            console.log(TIMESLOT[day][i],"=",SUBJECT[day][i])
            weather_body.innerHTML=`
            <table>
  <tr>
    <th>time</th>
    <th>subject</th>
    
  </tr>
  <tr>
    <td>${TIMESLOT[day][i]}</td>
    <td>${SUBJECT[day][i]}</td>
    
  </tr>
  
</table>
            
            `
        }

    }
    // displayTimeTable(day);
    // console.log(TIMESLOT[day][day],"=",SUBJECT[day][day])
    // console.log(SUBJECT[day])




    
