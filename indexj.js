
function populat(selectObj)
{
// get the index of the selected option 
var idx = selectObj.selectedIndex; 
// get the value of the selected option 
var which = selectObj.options[idx].value;

const box=document.getElementById('Q1_id');
box.setAttribute('name',which);
const box1=document.getElementById('Q1_a_id');
box1.setAttribute('name',which);
const box2=document.getElementById('Q1_b_id');
box2.setAttribute('name',which);
const box3=document.getElementById('Q3_id');
box3.setAttribute('name',which);
const box4=document.getElementById('Q3_a_id');
box4.setAttribute('name',which);
const box5=document.getElementById('Q3_b_id');
box5.setAttribute('name',which);
const box6=document.getElementById('Q5_id');
box6.setAttribute('name',which);
const box7=document.getElementById('Q5_a_id');
box7.setAttribute('name',which);
const box8=document.getElementById('Q5_b_id');
box8.setAttribute('name',which);
}