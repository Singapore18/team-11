//alert("linked");

var personalInterests = document.getElementById("personalInterests");
var personalStrengths = document.getElementById("personalStrengths");
var workExperience = document.getElementById("workExperience");
var workSkills = document.getElementById("workSkills");
var jobInterests = document.getElementById("jobInterests");
var support = document.getElementById("support");
var jobRequests = document.getElementById("jobRequests");

var checkBoxes = document.querySelectorAll("input[type=checkbox]");

console.log(checkBoxes.length);
var checkedBoxes = [];

var count = 0;

for(var i=0; i<checkBoxes.length; i++){
    if(checkBoxes[i].checked){
        checkedBoxes.push(checkBoxes[i].value); 
    }

    //console.log(checkBoxes[i].checked);
    /*
    if(checkBoxes[i].checked == true) {
      console.log(checkBoxes[i].value);
    checkedBoxes.push(checkBoxes[i].value);
      console.log(count++);
    }  
    */
   
}

console.log("count is " + count);

function submitForm(){
    var obj = {
        "answer" : [
            {
                "question" : "1",
                "answers" :  personalInterests.value
            },
            {
                "question" : "2",
                "answers" : personalStrengths.value
            },
            {
                "question" : "3",
                "answers" : workExperience.value
            },
            {
                "question" : "4",
                "answers" : workSkills.value
            },
            {
                "question" : "5",
                "answers" : jobInterests.value
            },
            {
                "question" : "6",
                "answers" : support.value
            },
            {
                "question" : "7",
                "answers" : jobRequests.value
            },
            {
                "question" : "8",
                "answers" : checkedBoxes
            }

        ] 
    }
    ;
    console.log(obj);
    return false;
}