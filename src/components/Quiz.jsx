import React, { forwardRef, useState } from 'react';

const questions = [
  {
    question: "Halloween traces its origins to this pagan festival:",
    options: ["Saturnalia", "Imbolc", "Samhain", "Ostara"],
    answer: "Samhain",
  },
  {
    question: "Jack-o’-lanterns were originally carved from this vegetable:",
    options: ["Turnips", "Potatoes", "Carrots", "Beets"],
    answer: "Turnips",
  },
  {
    question: "Vampires can be defeated by which of the following?",
    options: ["Garlic", "Wooden Stake", "Silver Bullet", "Sunlight"],
    answer: "Wooden Stake",
  },{
    question:"Which Date is Halloween celebrated?",
    options:["October 31","November 1","December 25","January 1"],
    answer:"October 31",
  },{
    question:"In which country did the trick or treat tradition originate?",
    options:["Ireland","USA","Germany","France"],
    answer:"Ireland"
  }
];

const Quiz = forwardRef((props,ref) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleRetake = ()=>{
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mb-5">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-500">
          Take the Halloween Quiz 🎃
        </h1>
      </div>

      {showScore ? (
        <div className="text-2xl font-bold text-white flex flex-col">
          <h1 className="text-center">You scored {score} out of {questions.length}</h1>
          {score<=3?<h2 className="text-red-500">You are not safe this halloween👻</h2>:<h2 className="text-green-500">You did well!</h2>}
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200" onClick={handleRetake}>Retake</button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">
            {questions[currentQuestion].question}
          </h2>

          <div className="flex flex-col space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Quiz;
