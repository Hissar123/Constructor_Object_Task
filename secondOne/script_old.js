
class HospitalForm{
    constructor(name1, date){
        console.log("Constructor are called "+name1+" "+date);
        this.name1 = name1;
        this.date = date;
    }

    submit(){
        alert(this.name1+ ': Your form is submitted' +' on date: '+this.date);
    }
    cancel(){
        alert(this.name1 +': Your form got cancelled' + ' of this date: '+this.date);
    }
    
}

// Create a forms for Rahul with details filled
let rahulFrom = new HospitalForm("Rahul", '26-11-22');

//Create a form for Rohan with details filled
let rohanForm1 = new HospitalForm("Rohan", '25-10-22');
let rohanForm2 = new HospitalForm("Rohan", '23-08-22');


rahulFrom.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();