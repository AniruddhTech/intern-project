document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Form data extraction
    const fullName = document.getElementById('fullName').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const time = document.getElementById('time').value;

  
    if (!fullName || !checkIn || !checkOut || !adults || !phoneNumber || !time) {
        alert('Please fill out all required fields.');
        return;
    }

   
    console.log('Form Submitted');
    console.log('Full Name:', fullName);
    console.log('Check-in Date:', checkIn);
    console.log('Check-out Date:', checkOut);
    console.log('Adults:', adults);
    console.log('Children:', children);
    console.log('Phone Number:', phoneNumber);
    console.log('Time:', time);

  
    alert('Form submitted successfully!');

  
    document.getElementById('enquiryForm').reset();
});




