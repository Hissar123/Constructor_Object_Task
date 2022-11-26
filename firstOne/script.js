
/*
function Hospital(name, location, date, specialization){
    this.name = name;
    this.location = location;
    this.date = date;
    this.specialization = specialization;
}

let hospital1 = new Hospital('All_India', 'Delhi_NCE', '12-11-22', 'dental surgery');

console.log(hospital1);   */

class HospitalForm{
    submit(){
        alert(this.name1+ ': Your form is submitted' +' on date: '+this.date);
    }
    cancel(){
        alert(this.name1 +': Your form got cancelled' + ' of this date: '+this.date);
    }
    fill(name1, date){
        this.name1 = name1;
        this.date = date;
    }
}

// Create a forms for Rahul
let rahulFrom = new HospitalForm();
// Fill the forms with Rahul's details
rahulFrom.fill("Rahul", '26-11-22');

//Create a form for Rohan
let rohanForm1 = new HospitalForm();
let rohanForm2 = new HospitalForm();
// Fill the forms with Rohan's details
rohanForm1.fill("Rohan", '25-10-22');
rohanForm2.fill("Rohan", '23-08-22');

rahulFrom.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();

