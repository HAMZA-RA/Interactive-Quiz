const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: "Au"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      answer: "Harper Lee"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElements = document.querySelectorAll('.option');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElements.forEach((option, index) => {
      option.innerText = currentQuestion.options[index];
      option.dataset.correct = currentQuestion.options[index] === currentQuestion.answer;
      option.classList.remove('selected', 'correct', 'incorrect');
      option.style.backgroundColor = '#f0f0f0'; // Reset background color
    });
    resultElement.innerText = ''; // Clear previous result
  }
  
  function checkAnswer(selectedOption) {
    optionsElements.forEach(option => {
      if (option.dataset.correct === 'true') {
        option.classList.add('correct');
      } else {
        option.classList.add('incorrect');
      }
    });
  
    selectedOption.classList.add('selected');
  
    const isCorrect = selectedOption.dataset.correct === 'true';
    resultElement.innerText = isCorrect ? 'Correct!' : 'Incorrect!';
  }
  
  optionsElements.forEach(option => {
    option.addEventListener('click', () => {
      optionsElements.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
  
  submitButton.addEventListener('click', () => {
    const selected = document.querySelector('.option.selected');
    if (selected) {
      checkAnswer(selected);
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          loadQuestion();
        } else {
          resultElement.innerText = 'Quiz Completed!';
        }
      }, 1000); // Delay for feedback
    } else {
      resultElement.innerText = 'Please select an option!';
    }
  });
  
  loadQuestion();
  