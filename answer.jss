<script>
    function checkAnswer() {
        const correctAnswer = "Clark"; // Set your correct answer here
        const userAnswer = document.getElementById("answerInput").value.trim();
        const messageDiv = document.getElementById("message");

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            messageDiv.textContent = "Correct!";
            messageDiv.className = "message correct";
        } else {
            messageDiv.textContent = "Wrong!";
            messageDiv.className = "message wrong";
        }

        messageDiv.style.display = "block";
    }
</script>