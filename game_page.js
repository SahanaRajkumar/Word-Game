player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
console.log(player1_score);
console.log(player2_score);

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send(){

    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);

    length_mius_1=word.length-1;
    charat3=word.charAt(length_mius_1);
    console.log(charat3);

    remove1=word.replace(charAt1,"_");

    remove2=remove1.replace(charAt2,"_");

    remove3=remove2.replace(charat3,"_");
    console.log(remove3);

    question_word ="<h4 id='word_display'>Q. " + remove3+"</h4>";

    input_box="<br>Answer : <input type='text' id= 'inpput_check_box'> ";
    check_button="<br> <br> <buton class='btn btn-info' onclick='check()'>check</buton>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";


}