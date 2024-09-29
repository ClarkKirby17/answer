<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Answer Checker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 15px 0;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #4285f4;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #357ae8;
        }
        .message {
            text-align: center;
            margin-top: 20px;
            font-size: 18px;
            display: none;
        }
        .correct {
            color: green;
        }
        .wrong {
            color: red;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Answer Checker</h2>
    <input type="text" id="answerInput" placeholder="Enter your answer here">
    <button onclick="checkAnswer()">Submit</button>
    <div id="message" class="message"></div>
</div>

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

</body>
</html>
