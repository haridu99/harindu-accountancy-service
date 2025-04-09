document.getElementById('bookAppointmentBtn').onclick = function() {
  document.getElementById('appointmentModal').style.display = 'block';
};

document.getElementById('inquiryBtn').onclick = function() {
  document.getElementById('inquiryModal').style.display = 'block';
};

document.getElementById('closeAppointment').onclick = function() {
  document.getElementById('appointmentModal').style.display = 'none';
};

document.getElementById('closeInquiry').onclick = function() {
  document.getElementById('inquiryModal').style.display = 'none';
};

document.getElementById('confirmAppointment').onclick = function() {
  const date = document.getElementById('appointmentDate').value;
  if (date) {
    // Initialize EmailJS with your user ID
    emailjs.init("n6K9LBhUPgP6X1piC");  // Replace with your EmailJS user ID
    
    emailjs.send("service_502lusl", "YOUR_TEMPLATE_ID", {
      date: date,
      to_email: "harinduchathuranga1234@gmail.com"
    }).then(() => {
      alert(`Appointment booked for ${date}`);
      document.getElementById('appointmentModal').style.display = 'none';
    }).catch((error) => {
      console.error("Error sending email:", error);
    });
  } else {
    alert("Please select a date.");
  }
};

document.getElementById('submitInquiry').onclick = function() {
  const message = document.getElementById('inquiryMessage').value;
  if (message) {
    // Initialize EmailJS with your user ID
    emailjs.init("n6K9LBhUPgP6X1piC");  // Replace with your EmailJS user ID

    emailjs.send("service_502lusl", "YOUR_TEMPLATE_ID", {
      message: message,
      to_email: "harinduchathuranga1234@gmail.com"
    }).then(() => {
      alert('Inquiry submitted!');
      document.getElementById('inquiryModal').style.display = 'none';
    }).catch((error) => {
      console.error("Error sending email:", error);
    });
  } else {
    alert("Please enter your inquiry.");
  }
};
