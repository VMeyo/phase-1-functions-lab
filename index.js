// Code your solution in this file!
//Start of Calclulation in Blocks
function distanceFromHqInBlocks(pickuplocation){
    const headquarters = 42;
    return Math.abs(pickuplocation - headquarters);
}
//End of Calculation in Blocks

//Start of Calclulation in Ft of distance from HQ
function distanceFromHqInFeet(pickuplocation){

 const blockInFt = distanceFromHqInBlocks(pickuplocation) *264;

 return blockInFt;

}
//End of Calculation in Ft of distance from HQ

//Start of Calclulation in Ft of distance travelled

function distanceTravelledInFeet(start, destination) {
    
    const blocksTravelled = Math.abs(start - destination); 
    
    return blocksTravelled * 264; 
}
//End of Calclulation in Ft of distance travelled

//Start of Calclulation  of fare in Ft of distance travelled

/*function calculatesFarePrice (start, destination){
    const totalFeet = distanceTravelledInFeet(start, destination);
}


    //Free sample
    f(totalFeet === 0 && totalFeet <=400){
        return "Free Sample";
    }

    if(totalFeet > 400 && totalFeet <= 2000){
        return (totalFeet - 400) * 0.02;
    }

    if(totalFeet > 2000 && totalFeet <= 2500){
        return 25;
    }

    if(totalFeet > 25){
        return "Sorry, ride is too long";
    }
    */

    /*if(totalFeet === 0){
        return "Free Sample";
    }

    if(totalFeet > 400 && totalFeet <= 2000){
        return (totalFeet - 400) * 0.02;
    }

    if(totalFeet > 2000 && totalFeet < 2500){
        return 25;
    }

    if(totalFeet > 25){
        return "cannot travel that far";
    }

    return 0;
}
*/

/*
// Function to calculate the distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;  // 1 block = 264 feet
  }
  */



  // Function to calculate the fare price based on distance
  // Function to calculate the fare price based on distance


  // Function to calculate the fare price based on distance
function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination);
  
    // 1) Free sample for 0 feet
    if (totalFeet === 0) {
      return "Free Sample";
    }
  
    // 2) Charge 2 cents per foot for distances between 400 and 2000 feet (first 400 feet are free)
    if (totalFeet > 400 && totalFeet <= 2000) {
      return (totalFeet - 400) * 0.02;
    }
  
    // 3) Charge $25 for distances over 2000 feet
    if (totalFeet > 2000 && totalFeet <= 2500) {
      return 25;
    }
  
    // 4) Do not allow rides over 2500 feet
    if (totalFeet > 2500) {
      return "cannot travel that far";
    }
  
    // 0 to 400 feet are free
    
    return 0;
  }

