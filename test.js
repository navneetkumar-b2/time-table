const timetableData = {
    Monday:
      "9:15 AM - 10:10 AM: Maths\n10:10 AM - 12:00 AM: PPS lab (B1) / chem Lab(B2)\n12:00 Noon - 12:55 PM :Break 😋 \n12:55 PM - 1:50 PM :PPS \n1:50 PM - 2:45 PM : chem \n2:45 PM - 4:35 PM : WORKSHOP",
    Tuesday:
      "9:15 AM - 10:10 AM: Eng\n10:10 AM - 11:05 AM: Chem\n11:05 - 12:00 : MPD \n12:00 Noon - 12:55 PM :Chem\n12:55 PM - 1:50 PM :Break 😋 \n1:50 PM - 3:40 PM : eng lab(B1) / PPS lab(B2) \n3:40 PM - 4:35 PM : Maths",
    Wednesday:
      "9:15 AM - 10:10 AM: Chem\n10:10 AM - 11:05 AM: PPS\n11:05 - 12:00 : Eng \n12:00 Noon - 12:55 PM :Break 😋 \n12:55 PM - 3:40 PM : WORKSHOP \n3:40 PM - 4:35 PM : Maths",
    Thursday:
      "9:15 AM - 11:05 AM: Chem Lab(B1) / PPS Lab(B2)\n11:05 - 12:00 : Maths \n12:00 Noon - 12:55 PM :Break 😋 \n12:55 PM - 2:45 PM :PPS Lab(B1) / Eng Lab(B2) \n2:45 PM - 3:40 PM : Maths \n3:40 PM - 4:35 PM : FREE !",
    Friday:
      "9:15 AM - 10:10 AM: MPD\n10:10 AM - 11:05 AM: Maths\n11:05 - 12:00 : Eng \n12:00 Noon - 12:55 PM :Break 😋 \n12:55 PM - 1:50 PM : PPS \n1:50 PM - 2:45 PM : Chem \n 2:45 PM - 3:40 PM : Maths \n3:40 PM - 4:35 PM : Library",
    Saturday: "Enjoy! 😍 its Saturday OFF ",
    Sunday: "Enjoy! 😍 its Sunday OFF ",
  };


// Arrays to store times and subjects
const times = [];
const subjects = [];

// Iterate through the timetable data
for (const day in timetableData) {
    const schedule = timetableData[day].split('\n');
    schedule.forEach(slot => {
        const [timeSubject, subject] = slot.split(':'); // Split time and subject
        const [time] = timeSubject.split(' '); // Split time
        times.push(time.trim()); // Remove leading/trailing whitespace and push to times array
        subjects.push(subject.trim()); // Remove leading/trailing whitespace and push to subjects array
    });
}

// Output the arrays
console.log("Times:", times);
console.log("Subjects:", subjects);
