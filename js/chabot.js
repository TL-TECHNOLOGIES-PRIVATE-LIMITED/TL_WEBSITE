var modal = document.getElementById("chatbotModal");

// Get the button that opens the modal
var btn = document.getElementById("chatbot-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.classList.add("show");
  showFAQ()
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("show");
};

// When the user clicks anywhere outside of the modal, close it

// chat bot get answer functions

function tokenize(text) {
  return text.toLowerCase().trim().split(/\s+/);
}

// Calculate similarity score based on word matches
function calculateSimilarityScore(inputTokens, questionTokens) {
  let score = 0;
  for (const token of inputTokens) {
    if (questionTokens.includes(token)) {
      score += 1;
    }
  }
  return score;
}

// Function to get the best matching answer based on the user input
function getBestAnswer(userInput) {
  const inputTokens = tokenize(userInput);
  let bestMatch = null;
  let highestScore = 0;

  for (const q of questions) {
    const questionTokens = tokenize(q.answer);
    const score = calculateSimilarityScore(inputTokens, questionTokens);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = q;
    }
  }

  if (bestMatch) {
    return bestMatch.answer;
  } else {
    return "Sorry, I couldn't find an answer to your question."
  }
}

function showFAQ() {
  const faqList = document.getElementById("faqList");
  faqList.innerHTML = ""; // Clear previous list items if any
  faqList.style.padding = '10px'
  const answerOutput = document.getElementById("answerOutput");
  answerOutput.style.padding ="0px"
  answerOutput.innerText = "";
  
  keywords.forEach((keyword) => {
    const p = document.createElement("p");
    p.textContent = keyword;
    p.onclick = () => {
      // document.getElementById("questionInput").value = keyword;
      displayAnswer(keyword)
      console.log("helloooooo");
      faqList.style.display = "none"; // Hide the FAQ list after selecting a keyword
    };
    faqList.appendChild(p);
  });
  
  faqList.style.display = "flex"; // Show the FAQ list
}
function displayAnswer(token) {

  let userInput
  if(token&&token.length>0){
    userInput=token
    console.log(userInput)
  }else{
    
    userInput = document.getElementById("questionInput").value;
    console.log(userInput)
  }
  const loader = document.getElementById("loader");
  const faqList = document.getElementById("faqList");
  faqList.style.padding ='0px'
  faqList.innerHTML = "";
  const answerOutput = document.getElementById("answerOutput");
  answerOutput.style.padding ="0px"
  answerOutput.innerText = "";
  
  // Show the loader
  loader.style.display = "flex";
  answerOutput.innerText = "";
  function highlightKeywords() {
  let text = answerOutput.innerHTML;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); 
    text = text.replace(regex, <span style="color: red;">${keyword}</span>) 

  });
    const phoneRegex = /(\b\d{10}\b)/g;
  text = text.replace(phoneRegex, '<a href="tel:$1">$1</a>');
  answerOutput.innerHTML = text;
}
  
  // Simulate a delay for loading (e.g., fetching data or processing)
  setTimeout(() => {
    const answer = getBestAnswer(userInput);
    
    // Hide the loader
    loader.style.display = "none";
    
    answerOutput.style.padding = "10px"

    // Display the answer
    answerOutput.innerText = answer;
    highlightKeywords();

  }, 1000); // Simulated delay (1 second)
}
// Example usage
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    showFAQ()
    
  }
  
};