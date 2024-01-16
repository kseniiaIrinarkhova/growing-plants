/**--------------------Input
* The area in which the plants are contained is circular, with a radius of 5 meters.
* The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
* Each plant requires a minimum space of 0.8 square meters.
* The area is starting with 20 plants.
* The plants double in number every week.
 */

// Define constant variables
const PI = 3.1415;
const minPlantSpace = 0.8;


// Define changeable variables 
let radius = 5;
let area = PI*(radius**2);
let startPlantAmount = 20;


/**--------------------Part 1
 * Predict the plant growth after a specific number of weeks.
* Implement control flow to make decisions on whether the plants should be:
*   Pruned, to stop them from exceeding the capacity of the garden.
*          This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
*   Monitored, if they are growing at an acceptable rate.
*          This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
*   Planted, if there is room to plant more plants.
*          This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
*Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
 */

const maxCapacity = area/minPlantSpace; //count max garden capacity

let weekNumber = 2;

let plantAmount = startPlantAmount*(2**weekNumber); //count how many plants will be after viewed week
let occupancy = plantAmount / maxCapacity * 100; //calc current plant occupancy

if (occupancy > 80) {
    console.log(`Pruned! currently plants occupy ${occupancy} of the garden.`)
} else if (occupancy < 50) {
    console.log(`Planted! currently plants occupy ${occupancy} of the garden.`)
}
else{
    console.log(`Monitored! currently plants occupy ${occupancy} of the garden.`)
};
/**---------------------Part 3
 * The conservation area in which the garden is located has multiple other gardens. 
*Using the logic you have already created, determine:
*The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
*If the space remained circular, what would be the radius of this expanded garden?
 */
console.log(`
****************************
*******next part************
****************************
`);

startPlantAmount = 100;
weekNumber = 10;
plantAmount = startPlantAmount * (2 ** weekNumber); //count how many plants will be after viewed week
let plantArea = plantAmount*minPlantSpace; //calc the area which current plant's ammount 
console.log(`After ${weekNumber} weeks plants will occupy ${plantArea.toFixed(2)} square meters. It needs ${(plantArea - area).toFixed(2)} square meters more.`);
radius = Math.sqrt(plantArea/PI);
console.log(`The radius of the garden would be ${radius.toFixed(2)} meters`);

/**---------------------Part 4
* The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
* Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
 */