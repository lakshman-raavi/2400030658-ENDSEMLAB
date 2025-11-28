

function submitForm(event) {
 

  let name = document.getElementById("name").value.trim();
  let course = document.getElementById("course").value.trim();
  let rating = document.getElementById("rating").value;
  let comments = document.getElementById("comments").value.trim();
  let file = document.getElementById("fileUpload").files[0];

  if (!name || !course || !rating || !comments || !file) {
    alert("Please fill all fields and upload a file.");
    return;
  }

  console.log("Feedback Submitted:");
  console.log("Name:", name);
  console.log("Course:", course);
  console.log("Rating:", rating);
  console.log("Comments:", comments);
  console.log("Uploaded File:", file ? file.name : "No file");

  document.getElementById("successMsg").style.display = "block";
}