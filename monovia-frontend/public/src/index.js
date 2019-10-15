document.addEventListener("DOMContentLoaded", init)
////////////////////////////////////////////////////////////////////////////////
function init() {

  ////////////////////////EVENT LISTENERS///////////////////////////////////////
  closeButton.addEventListener("click", toggleQuestionModal);
  window.addEventListener("click", windowOnClick);
  diceContainer.addEventListener("click", (e) => rollDice(e))
  form.addEventListener('submit', handleLogIn)
  header.addEventListener('click', handleHeader)
  h2.addEventListener('submit', handleEdit)

  ////////////////////////////FETCHES//////////////////////////////////////////
  fetch(USER_URL).then(res => res.json()).then(json => {allUsers.push(json)})
  fetch(USER_URL).then(res => res.json()).then(json => allUsers = json)
  fetch(mquestions_URL).then(res => res.json()).then(json => {musicQuestions.push(json.results)})
  fetch(cscquestions_URL).then(res => res.json()).then(json  => {cscQuestions.push(json.results)})
  fetch(GAME_URL).then(res => res.json()).then(res => musicProps = res[0].properties)//BUG
  fetch(GAME_URL).then(res => res.json()).then(res => cscProps = res[1].properties)

  ////////////////////////TOGGLES AND DISPLAYS//////////////////////////////////
  toggleDice()
  rollDice()//SOMETHING ABOUT THE ROLL IS BROKEN
  showLogIn()

}//END
