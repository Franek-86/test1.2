
let url = "http://time.jsontest.com";

let myDate = new Date().getTime();
console.log('my date', myDate);
const myTime = new Date(myDate);
console.log('my date',new Date(myTime ));

const fetch  = fetch(url)
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
    let myDate = new Date();
    console.log(myDate - providedDateTime) / 1000;

  })
  .catch(error => {
    // Handle errors that occurred during the fetch
    console.error('Error:', error);
  });

  console.log(test)

 



