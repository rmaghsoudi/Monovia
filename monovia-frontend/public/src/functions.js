//////////////////////////////////MAIN-BOX//////////////////////////////////////
//UPDATED!!!
function createUser(name){
  fetch(USER_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      accepts: 'application/json'
    },
    body: JSON.stringify({
      name: name,
      wallet: 50
    })
  }).then(res => res.json())
  .then(res => currentUser = res)
  welcomeUser(name)
}//END

//UPDATED!!!
function handleLogIn(e){
  e.preventDefault()
  let name = e.target.children[0].value
  let user = allUsers.filter(user => (user.name === name))
  if (user.length > 0){
    welcomeUser(user[0].name)
    currentUser = user[0]
  }else{
    createUser(name)
  }
  e.target.reset()
  toggleSubjectModal()
}//END

  function handleHeader(e){

    let editForm = document.createElement('form')
    let nameInput = document.createElement('input')
    let submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.innerText = 'Submit Edit'
    nameInput.placeholder = `${currentUser.name}`
    editForm.append(nameInput, submitBtn)
    h2.append(editForm)
   
  }

  function handleEdit(e){
    e.preventDefault()
    fetch(`${USER_URL}/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({
        name: e.target.children[0].value
      })
    }).then(res => res.json())
    .then(json => {header.innerText = `Welcome ${json.name}!`
    currentUser = json
    })
    h2.removeChild(document.querySelector('form'))
    header.removeEventListener('click', handleHeader)
  }

function welcomeUser(name){
  header.innerText = `Welcome ${name}!`
  toggleForm()
  h2.innerText = 'Roll the dice to start!'
  toggleDice()
  alert('You can edit your name by clicking on it!')
}//END

function toggleForm(){
  if (form.style.display === 'none'){
    form.style.display = 'block'
  }else
  form.style.display = 'none'
}//END

function toggleDice(){
  if (diceContainer.style.display === 'none'){
    diceContainer.style.display = 'block'
  }else
  diceContainer.style.display = 'none'
}//END

function showLogIn(){
    let nameInput = document.createElement('input')
    let submitBtn = document.createElement('input')
    submitBtn.setAttribute('type','submit')

    form.append(nameInput, submitBtn)
    mainBox.appendChild(form)
}//END


function rollDice(e) {
  dieClickCount++
  let roll = Math.floor((Math.random() * 6) + 1);
  currentRoll = roll
  $("div.container").on("click", ".dice", function() {
    $(this).attr("class", "dice");
    setTimeout( function() {
      $(".dice").addClass("roll-" + currentRoll);
    }, 0);//check if 0 should be 1
  });
  if (dieClickCount !== 1){
    stopFlashing(currentRoll)
    boardMove(roll)//check if we still need this line

  }
}//END

/////////////////////////////////GAMEBOARD//////////////////////////////////////

function stopFlashing(currentRoll){
  if (dieClickCount === 2){
  Array.from(flashingDivs).forEach((div) => {
    $(div).removeClass('flashing')
  })
  Array.from(wallDivs).forEach((div) => {
    if (!div.className.includes('main-box')){
    $(div).addClass("changed")
    }
  })

  renderBoard()
  }
}//END

function renderBoard(){
    fillCornerDivs()
    fillPropDivs()
    fillDoubleDivs()
}//END


function restartAnimation(e){
  // alert("BUG! FIX ME!")
  Array.from(wallDivs).forEach((div) => {
    if (!div.className.includes('main-box')){
    $(div).addClass("flashing")
    }
  })
}//END

function boardMove(currentRoll) {
    rollCounter += currentRoll
    if (rollCounter > 20){
      rollCounter -=20
    }
    $(currentDiv).removeClass('flashing')
    currentDiv = document.getElementsByClassName(`box${rollCounter}`);
    setTimeout(function() {
      $(currentDiv).addClass('flashing')
    }, 2000)
    currentPropName = currentDiv[0].innerHTML
    currentProp = roundProps.find(findProp)
    divCheck()
  }//END


function findProp(prop){
    return currentPropName.includes(prop.name)
}//END


function divCheck(){
    setTimeout(function(){
    switch (currentDiv[0].innerText) {
      case 'DOUBLE OR NOTHING':
        toggleQuestionModal()
      break;

      case 'GO TO JAIL':
        alert("YOU GOIN TO JAIL FOO!")
        $(currentDiv).removeClass('flashing')
        rollCounter -= 10
        currentDiv = document.getElementsByClassName('box5')
        $(currentDiv).addClass('flashing')
      break;

      case 'JAIL':
        alert('JUST VISITING!')
      break;

      case 'GET PAID':
        alert("ENJOY A COOL 300 SMACKAROONS!")
        incrementWallet(300)
      break;

      case 'START':
        alert("KEEP GOING!")
      break;

      default:
      toggleQuestionModal()
      break;
    }
  }, 2600)
}//END

  function fillPropDivs(){
    let testArr = ['box2', 'box4', 'box7', 'box9', 'box12', 'box14', 'box17', 'box19']
    for (let i = 0; i < wallDivs.length; i++) {

      if (testArr.includes(wallDivs[i].className.split(' ')[1])){
        propDivs.push(wallDivs[i])
      }
    }
    for (let i = 0; i < propDivs.length; i++) {
      propDivs[i].innerText = `${roundProps[i].name}
      Price: ${roundProps[i].value}`

    }
}//END

function fillDoubleDivs(){
    let testArr = ['box1', 'box3', 'box6', 'box8', 'box11', 'box13', 'box16', 'box18']
    for (let i = 0; i < wallDivs.length; i++) {

      if (testArr.includes(wallDivs[i].className.split(' ')[1])){
        doubleDivs.push(wallDivs[i])
      }
    }
    for (let i = 0; i < propDivs.length; i++) {
      doubleDivs[i].innerText = 'DOUBLE OR NOTHING'
    }
}//END

function fillCornerDivs(){

    for (let i = 0; i < wallDivs.length; i++) {
      switch (wallDivs[i].className.split(' ')[1]) {
        case 'box5':
          wallDivs[i].innerText = 'JAIL'
          break;
        case 'box10':
          wallDivs[i].innerText = 'GET PAID'
          break;
        case 'box15':
          wallDivs[i].innerText = 'GO TO JAIL'
          break;
        case 'box20':
          wallDivs[i].innerText = 'START'
          break;
      }
    }
}//END


//////////////////////////////MODAL//////////////////////////////////////

function toggleQuestionModal() {
     modal.classList.toggle("show-modal");
     let currentQuestion = roundQuestions.flat()[Math.floor((Math.random() * 10) + 1)]
     askedQuestion = currentQuestion
     let currentAnswer = currentQuestion.correct_answer
     modalContent.querySelector('h1').innerHTML = currentQuestion.question
     trueButton.innerText = "True"
     falseButton.innerText = "False"
     trueButton.style.display = "block"
     falseButton.style.display = "block"
     trueButton.addEventListener("click", evaluateAnswer);
     falseButton.addEventListener("click", evaluateAnswer);
}//END

function toggleSubjectModal(){
     modal.classList.toggle("show-modal");
     modalContent.querySelector('h1').innerText = `Choose Your Subject`
     trueButton.innerText = "Music"
     falseButton.innerText = "Computer Science"
     trueButton.addEventListener("click", chooseSubject)
     falseButton.addEventListener("click", chooseSubject)
}//END

function chooseSubject(e){
  // e.preventDefault()
  modal.classList.toggle("show-modal")
  if (e.target.innerText === "MUSIC"){
    roundQuestions = musicQuestions
    roundProps = musicProps
  }
  else if (e.target.innerText === "COMPUTER SCIENCE"){
    roundQuestions = cscQuestions
    roundProps = cscProps
  }
}//END

function windowOnClick(event) {
       if (event.target === modal) {
           toggleQuestionModal();
       }
}//END

////////////////////////////////////GAME FUNCTIONS//////////////////////////////


function evaluateAnswer(e){
  modal.classList.toggle("show-modal");
  trueButton.style.display = "none"
  falseButton.style.display = "none"
  e.target.className.includes("true-button") ? usersAnswer = "True" : usersAnswer = "False"
  //THE LONG WAY TO DO THE LINE ABOVE! KEEP THESE COMMENTED FOR UNDERSTANDING IN CASE OF BUGS!
  // if (e.target.className.includes("true-button")){
  //   console.log("user chose true")
  //   console.log(askedQuestion.correct_answer)
  //
  //   usersAnswer = "True"
  // }
  // else if (e.target.className.includes("false-button")){
  //   console.log("user chose false")
  //   console.log(askedQuestion.correct_answer)
  //   usersAnswer = "False"
  // }
  if (currentDiv[0].innerText !== 'DOUBLE OR NOTHING'){
    if (usersAnswer === askedQuestion.correct_answer){
      modalContent.querySelector('h1').innerText = `Righto! Here's one hundo`
      h2.innerText = 'Roll Again!'
      incrementWallet(100)
      if (currentUser.wallet >= currentProp.value) {
        displayPurchaseButton()
      }
    }
    else{
      modalContent.querySelector('h1').innerText = `Enjoy being WRONG!`
      h2.innerText = "Roll Again!"
      if (currentUser.wallet >= currentProp.value) {
        displayPurchaseButton()
      }
    }
  }else{
    if (usersAnswer === askedQuestion.correct_answer){
      modalContent.querySelector('h1').innerText = `Doubling Dividends!`
      h2.innerText = 'Roll Again!'
      incrementWallet(currentUser.wallet)
      if (currentUser.wallet >= currentProp.value) {
      }
    }
    else{
      modalContent.querySelector('h1').innerText = `Get Nae Nae'd!`
      h2.innerText = "Roll Again!"
      decrementWallet()
      if (currentUser.wallet >= currentProp.value) {
      }
    }
  }
  //BUG HERE! MODAL WON'T STAY OPEN!
  // setTimeout(function(){
  // modal.classList.toggle("show-modal");
  // }, 1)
}//END


function incrementWallet(value){
  fetch(`${USER_URL}/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body:JSON.stringify({
        wallet: currentUser.wallet += value
      })
  }).then(res => res.json())
  .then(res => console.log(res))
  wallet.innerText = `You have ${currentUser.wallet} dollars!`
}//END

function decrementWallet(){
  fetch(`${USER_URL}/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body:JSON.stringify({
        wallet: currentUser.wallet = 0
      })
  }).then(res => res.json())
  .then(res => console.log(res))

  wallet.innerText = `You have ${currentUser.wallet} dollars!`
}//END


function displayPurchaseButton(){
  mainBox.appendChild(purchaseButton)
  purchaseButton.innerHTML = "Buy Property"
  $(purchaseButton).insertAfter(wallet)
  purchaseButton.addEventListener("click", buyProperty)
  $(purchaseButton).addClass("buy")
  setTimeout(hidePurchaseButton, 5000)
}//END

function hidePurchaseButton(){
  mainBox.removeChild(purchaseButton)
}//END

function buyProperty(e){
  e.preventDefault()
  currentUser.wallet -= currentProp.value
  currentDiv[0].innerHTML += `<br>${currentProp.emoji}`
  // purchaseButton.style.display = "none"
  wallet.innerText = `You have ${currentUser.wallet} dollars!`
  let newProperties = currentUser.properties.push(currentProp)
  fetch(`${USER_URL}/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "user" : {"properties" : newProperties}
        })
      }).then(res => res.json())
      .then(res => console.log(res))//END OF FETCH
}//END
