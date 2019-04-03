// Initialize Firebase
const config = {
  apiKey: "AIzaSyAnOzlbaNuDByi5skiVrqTr6QYpqpdKpQM",
  authDomain: "train-schedule-40861.firebaseapp.com",
  databaseURL: "https://train-schedule-40861.firebaseio.com",
  projectId: "train-schedule-40861",
  storageBucket: "train-schedule-40861.appspot.com",
  messagingSenderId: "1076915703990"
}
firebase.initializeApp(config)

let db = firebase.firestore()
//save input to database
document.querySelector(".submit").addEventListener("click", e => {
  e.preventDefault()
  console.log("hello")
  let id = db.collection("submissions").doc().id
  db.collection("submissions").doc(id).set({
    trainName: document.querySelector("#trainName").value,
    destination: document.querySelector("#destName").value,
    time: document.querySelector("#time").value,
    frequency: document.querySelector("#frequency").value
  })
  document.querySelector("#trainName").value = ''
  document.querySelector("#destName").value = ''
  document.querySelector("#time").value = ''
  document.querySelector("#frequency").value = ''
})
