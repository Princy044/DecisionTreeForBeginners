function predict(){
     outlook = document.getElementById("outlook").value;
     temp = document.getElementById("Temperature").value;
     wind = document.getElementById("Wind").value;
     humid = document.getElementById("Humidity").value;

     if(outlook == "Cloudy"){
        document.getElementById("temp_predict").innerHTML= "Yes! It's a good time to play, since it's cloudy."
     }
     else if((outlook=="Sunny") && (humid=="High")){
        document.getElementById("temp_predict").innerHTML= "No! It's not a good time to play, since it's sunny and humid."
     }
     else if((outlook=="Sunny") && (humid=="Normal")){
        document.getElementById("temp_predict").innerHTML= "Yes! It's a good time to play, since it's sunny and less humid"
     }
     else if((outlook=="Rainny") && (wind=="Strong")){
        document.getElementById("temp_predict").innerHTML= "No! It's not good time to play, since it's rainy and wind is strong"
     }
     else if((outlook=="Rainny") && (wind=="Weak")){
        document.getElementById("temp_predict").innerHTML= "Yes! It's good time to play, since it's rainy and wind is weak"
     }
     
}
function predict_iris(){
    pl= document.getElementById("pl").value;
    pw= document.getElementById("pw").value;
    sl= document.getElementById("sl").value;
    sw= document.getElementById("sw").value;
    if((sw<0) || (pl>9) || (pw<0) || (sl>9) || (sw<0) || (pl<0) || (pw>3) || (sw>4.9)){
        document.getElementById("out_iris").innerHTML="Check if your inputs are in range"  
    }
    else if ((pw <= 0.8)){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Setosa</b> since Petal width less that 0.8"
    }
    else if((pl<=4.95) && (pw<=1.75) && (pw<=1.65) ){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Versicolor</b> since '0.8 < petal width <= 1.65' and petal length <= 4.95 "
    } else if((pw>=1.75) && (pl>4.85)){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Virginica</b> since 'petal width >= 1.75' and petal length > 1.55 "
    } else if((pw<=1.75) && (pl>=4.95) && (pw<=1.55)){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Virginica</b> since '0.8< petal width < 1.55' and petal length > 4.95. <br>Note: This might be overfitted only 3 data points found. "
    } else if((pw<=1.75) && (pl>=4.95) && (pw>=1.55) ){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Versicolor</b> since '1.55< petal width < 1.75' and petal length > 4.95. <br>Note: This might be overfitted only 2 data points found. "
    }else if((pl<=4.85) && (pw>1.75) && (sl>5.95)){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Virginica</b> since '0.8 < petal width < 1.75' and sepal length > 5.95 <br>Note: This might be overfitted only 2 data points found. "
    } 

    else if((pl<=4.85) && (pw>1.75) && (sl<=5.95)){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Versicolor</b> since '0.8 < petal width < 1.75' and sepal length <= 5.95 <br>Note: This might be overfitted only 1 data points found. "
    }  
    else if((pw<=1.75) && (pl<=4.95) && (pw>1.65)){
        document.getElementById("out_iris").innerHTML="It is <b>Iris Virginica</b> since '1.65< petal width < 1.75' and petal length < 4.95. <br>Note: This might be overfitted only 1 data points found. "
    } 
    else{
        document.getElementById("out_iris").innerHTML="Unable to predict."
    }


}