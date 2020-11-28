
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const jwt_secret = process.env.JWT_SECRET;
  console.log("JWT secret is " + jwt_secret);
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();