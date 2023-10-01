
const imageButton = document.getElementById('mmimage');


imageButton.addEventListener('click', function() 
{
    window.location.href = 'mainmenu.html';
});
document.getElementById("back-button").addEventListener("click", function () 
{            
    window.location.href = "EmpowerKids.html";
});
const correctAnswer = "To have a family like that"; 

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            alert("Correct!");
        } 
        else {
            alert("Incorrect. Try again.");
        }
    } else {
        alert("Please select an option.");
    }
}
