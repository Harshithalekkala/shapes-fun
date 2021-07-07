var reasons = ["lekkala ramu","nettem revathi chowdary","harshitha lekkala","khavish lekkala","venkatlakshmi","seetharamulu"];
var images = ["https://thumbs.dreamstime.com/z/illustration-cartoon-father-carrying-son-his-arms-cartoon-father-carrying-son-his-arms-145730921.jpg",
"https://image.shutterstock.com/image-vector/mother-kids-260nw-519721258.jpg",
"https://i.pinimg.com/736x/c6/19/f9/c619f9b74735d1f3b87a826a88f7b0cc.jpg",
"https://st.depositphotos.com/1077687/1903/v/950/depositphotos_19036597-stock-illustration-cartoon-boy.jpg",
"https://image.shutterstock.com/image-vector/vector-cartoon-grandmother-reading-astrophysics-260nw-1047163900.jpg",
"https://image.shutterstock.com/image-vector/vector-illustration-grandfather-old-man-260nw-1116857819.jpg"];
var i = 0;
function nextslide(){
document.getElementById("album").src = images[i];
document.getElementById("reasons").innerHTML = reasons[i];
i++;}