/////////////////////////////////URLS//////////////////////////////////////
const BASE_URL = "https://monovia-api.herokuapp.com/"
const GAME_URL = `${BASE_URL}games`
const USER_URL = `${BASE_URL}users`
const ROUND_URL = `${BASE_URL}rounds`
const PROPERTY_URL = `${BASE_URL}properties`
const mquestions_URL = 'https://opentdb.com/api.php?amount=20&category=12&type=boolean'
const cscquestions_URL = 'https://opentdb.com/api.php?amount=20&category=18&type=boolean'

/////////////////////////////////CONST//////////////////////////////////////////
const diceContainer = document.querySelector(".container");
const flashingDivs = document.getElementsByClassName("flashing");
const wallDivs = document.getElementsByClassName('wall');
const mainBox = document.querySelector('.main-box');
const form = document.createElement('form')
const propDivs = []
const doubleDivs = []
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const trigger = document.querySelector(".trigger");
const h2 = document.querySelector('h2')
const wallet = document.querySelector('#wallet')
const header = document.querySelector('#header')
let currentProp = ""
/////////////////////////BUTTONS///////////////////////////////////////////////
const button = document.createElement('button');
const editBtn = document.createElement('button');
editBtn.innerText = 'Edit Name'
const closeButton = document.querySelector(".close-button");
const trueButton = document.querySelector(".true-button");
const falseButton = document.querySelector(".false-button");
const subbtn1 = document.createElement('button')
const subbtn2 = document.createElement('button')
const purchaseButton = document.createElement('button')

//////////////////////////////LET///////////////////////////////////////////////
let allUsers = []
let musicQuestions = []
let cscQuestions = []
let roundQuestions = []
let askedQuestion = {}
let usersAnswer = ""
let currentUser = {}
let currentSubject = ""
let musicProps = []
let cscProps = []
let roundProps = []
let currentPropName = ""//should be the property OBJECT
let currentDiv = ""
let dieClickCount = 0
let rollCounter = 0
let currentRoll = 0

//////////////////////PROPERTY EMOJIS///////////////////////////////////////////
let thisProperty = ""


//////////////////////////TESTERS//////////////////////////////////////////////
