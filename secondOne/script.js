
class HospitalForm{
    constructor(name1, hospitalName, date, specilzn){
        console.log("Constructor are called "+name1+" "+date);
        this.name1 = name1;
        this.hospitalName = hospitalName;
        this.date = date;
        this.specilzn = specilzn;
    }

    submit(){
        alert(this.name1+ ': Your form is submitted' +' on date: '+this.date);
    }
    
    preview(){
        alert('The specialization of '+this.hospitalName+ ' are: '+this.specilzn)
    }
    
}

// Create a forms for Rahul with details filled
let rahulFrom = new HospitalForm("Rahul", "All_India", '26-11-22', 'dental_care');

//Create a form for Rohan with details filled
let rohanForm1 = new HospitalForm("Rohan", 'All_India', '25-10-22', 'Skin_Care');
let rohanForm2 = new HospitalForm("Rohan", 'Appolo_Hospital','23-08-22', 'Skin_Care');


console.log(rohanForm1);

/*
rahulFrom.submit();
rahulFrom.preview();
rohanForm1.submit();
rohanForm1.preview();
rohanForm2.submit();
rohanForm2.preview();   */


// localStorage()
console.log('Getting/Grabing the concept of localStorage');
let impArray = ['adrak', 'payz', 'bhindi'];


// Add key-value inside local storage
localStorage.setItem('Name1', 'Pushpa'); 
localStorage.setItem('Name2', 'Rakhi');
localStorage.setItem('sabzi', JSON.stringify(impArray));
localStorage.setItem('formDetails', JSON.stringify(rahulFrom));

// localStorage.clear();  It is use for clearing the hole localStorage

// want to clear particulat key-value pair
// localStorage.removeItem('Name1');

/* This will give the value from the localStorage
let naam = localStorage.getItem('Namechin');
console.log(naam);  */
let naam = localStorage.getItem('Name1');
naam = JSON.parse(localStorage.getItem('sabzi'));
console.log(naam);

let naam1 = localStorage.getItem('Name1');
naam1 = JSON.parse(localStorage.getItem('formDetails'));
console.log(naam1);




