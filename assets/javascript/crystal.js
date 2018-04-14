        $(document).ready(function() {
            
            //declare global variables
            var rno = 0;
            var totalCount = 0;
            var winCount = 0;
            var lossCount = 0;

            function getRandomNumber(){

                rno = Math.floor(Math.random() * (120 - 19) + 19);
                $("#randomNo").html("<h3 class='text-center'>"+rno + "</h3");
                
                var arr = new Array();
                var imgNo = 0;
                for(x=1; x<5; x++){
                    imgNo = getNumber(); //get new random number
                     //check if number existed before
                    for(j=0; j<arr.length; j++){
                        if(imgNo === arr[j]){
                            imgNo = getNumber(); //get new random number
                            j=0; //reset array count to first position to check number again
                        }//end   if
                    } // end of for loop for check 
                    arr[x-1] = imgNo; //add number to array
                    $("#image"+x).attr("value", imgNo); // add to image
                }

            } //end of random number generation

            function getNumber(){
                return Math.floor(Math.random() * (13 - 1) + 1);
            } // give the random number

            //on click of any image add the number in total count
            $(".imageShape").on("click", function () {
//                var r = $(".imageShape").attr(this.value);
                var r = this.value;
                totalCount = totalCount + parseInt(r);
                $("#total").text(totalCount);
                r = "";
                if(totalCount > rno){

                    lossCount++;
                    $("#loss").text("Loss : " + lossCount);
                    resetGame();
                }
                else if (totalCount === rno){
                    winCount++;
                    $("#win").text("Win : " + winCount);
                    resetGame();
                }

                $("#resetBtn").on("click", function(){
                    winCount = 0;
                    lossCount = 0;
                    $("#win").text("Win : ");
                    $("#loss").text("Loss : ");
                    resetGame();
                });

                function resetGame(){
                    rno = 0;
                    totalCount = 0;
                    $("#total").empty();
                    getRandomNumber();
                }

            });
            
            getRandomNumber(); // call the function to set the initial values to images and random no.
        });

