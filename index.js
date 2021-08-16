var read=require('readline-sync');

var username=read.question("Can I have your name? ")
console.log("Welcome "+ username +" to the quiz on India.")
console.log("Type the option name present.")
score=0
function quiz(ques,ans){
  userAnswer=read.question(ques)
  if (userAnswer.toLowerCase()==ans.toLowerCase()){
    console.log("✔️ Right")
    score=score+1
  }
  else{
    console.log("❌ Wrong ")
  }
}
question1=[{
  ques:"What is the name of India's National Aquatic Animal?\n (A) River Dolphin 🐬\n (B) Crocodile🐊\n (C) Katla Fish 🐟\n (D) Green Frog🐸\nYour Answer: ",
  ans:"A"},
{
  ques:"Which monument was built to commemorate the visit of King George V and Queen Mary to Bombay?\n  (A) India Gate \n (B) Gateway of India \n (C) Victoria Terminus\n (D) Elephanta Caves \nYour Answer: ",
  ans:"B", 
},
{
  ques:"The largest museum of India is located at 🏰 \n (A) Kolkata\n (B) Delhi\n (C) Mumbai\n (D) Hyderabad\nYour Answer: ",
  ans:"A",
}]
question2=[{
  ques:"National Motto of India\nYour Answer: ",
  ans:"Satyameva Jayate"},
{
  ques:"National Anthem of India\nYour Answer:  ",
  ans:"Jana Gana Mana", 
},
{
  ques:"National Song of India\nYour Answer:  ",
  ans:"Vande Mataram",
}]
for(i=0;i<question1.length;i++){
  curr=question1[i]
  quiz(curr.ques,curr.ans)
}
if (score==3){
  for(i=0;i<question2.length;i++){
  curr=question2[i]
  quiz(curr.ques,curr.ans)
}
}
console.log("Your final score is "+score)
if (score==6){
  console.log("Congralutions✨🎊🎉.You have the highest score.")
}
