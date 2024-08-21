document
  .getElementById("batchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const data = {
      batch_name: document.getElementById("batch_name").value,
      start_date: document.getElementById("start_date").value,
      end_date: document.getElementById("end_date").value,
      pb_session: document.getElementById("pb_session").value,
      pb_trainer_name: document.getElementById("pb_trainer_name").value,
      pb_session_link: document.getElementById("pb_session_link").value,
      pb_recording_link: document.getElementById("pb_recording_link").value,
      sk_session: document.getElementById("sk_session").value,
      sk_trainer_name: document.getElementById("sk_trainer_name").value,
      sk_session_link: document.getElementById("sk_session_link").value,
      sk_recording_link: document.getElementById("sk_recording_link").value,
      apt_session: document.getElementById("apt_session").value,
      apt_trainer_name: document.getElementById("apt_trainer_name").value,
      apt_session_link: document.getElementById("apt_session_link").value,
      apt_recording_link: document.getElementById("apt_recording_link").value,
      domain_session: document.getElementById("domain_session").value,
      domain_trainer_name: document.getElementById("domain_trainer_name").value,
      domain_session_link: document.getElementById("domain_session_link").value,
      domain_recording_link: document.getElementById("domain_recording_link")
        .value,
      batch_status: document.getElementById("batch_status").value,
      comments: document.getElementById("comments").value,
    };

    fetch("http://127.0.0.1:8000/courses/batch/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Batch created successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error creating batch.");
      });
  });
