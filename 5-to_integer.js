

const myNumber = process.argv[2];

// Convert to integer
const convertedNumber = parseInt(myNumber);

if (isNaN(convertedNumber)) {
  console.log("Not a number");
} else {
  console.log("My number: " + convertedNumber);
}
