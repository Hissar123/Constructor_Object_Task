
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


let rahulFrom = new HospitalForm("Rahul", "All_India", '26-11-22', 'dental_care');
let rohanForm1 = new HospitalForm("Rohan", 'All_India', '25-10-22', 'Skin_Care');
let rohanForm2 = new HospitalForm("Rohan", 'Appolo_Hospital','23-08-22', 'Skin_Care');


console.log(rohanForm1);


rahulFrom.submit();
rahulFrom.preview();
rohanForm1.submit();
rohanForm1.preview();
rohanForm2.submit();
rohanForm2.preview();   


// Storing Object in  localStorage()
console.log('Getting/Grabing the concept of localStorage');
localStorage.setItem('formDetails1', JSON.stringify(rahulFrom));

let naam1 = localStorage.getItem('Name1');
naam1 = JSON.parse(localStorage.getItem('formDetails1'));
console.log(naam1);

// Storing Object in  localStorage()
localStorage.setItem('formDetails2', JSON.stringify(rohanForm1));

let naam2 = localStorage.getItem('Name2');
naam2 = JSON.parse(localStorage.getItem('formDetails2'));
console.log(naam2);

// Storing Object in  localStorage()
localStorage.setItem('formDetails3', JSON.stringify(rohanForm2));

let naam3 = localStorage.getItem('Name3');
naam3 = JSON.parse(localStorage.getItem('formDetails3'));
console.log(naam3);









