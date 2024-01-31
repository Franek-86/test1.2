
let url = "http://time.jsontest.com";

const time = document.querySelector(".time");
console.log(time)

const testFunk = ()=> {

  fetch(url)
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the retrieved data
    console.log('Data:', data);
    const providedDateTime = new Date(`${data.date} ${data.time}`);
    console.log('this',providedDateTime);
    let myDateTime = new Date();
    const discrepancy = Math.floor((myDateTime - providedDateTime) / 1000)
    console.log(discrepancy)
    time.textContent = discrepancy;


  })
  .catch(error => {
    // Handle errors that occurred during the fetch
    console.error('Error:', error);
  });



}



 



