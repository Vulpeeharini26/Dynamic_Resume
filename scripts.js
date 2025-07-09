let inputName = document.getElementById("name");

let email = document.getElementById("email");

let mobile = document.getElementById("mobile");

let linkedin = document.getElementById("linkedin");



let summary = document.getElementById("summary");

let college = document.getElementById("college")

let degree = document.getElementById("degree");

let starting = document.getElementById("starting");

let completion = document.getElementById("completion");

let  skills = document.getElementById("skills");

let projectTitle = document.getElementById("projectTitle");

let projectDescription = document.getElementById("projectDescription");

let addButton = document.getElementById("addProjectButton");

let projectInputsContainer = document.getElementById("projectInputsContainer");

let buttonsContainer = document.getElementById("buttonsContainer");

let mainContainer = document.getElementById("mainContainer");

let errorContainer = document.getElementById("errorContainer");





//Buttons 
let previewButton = document.getElementById("previewButton");
let printResume = document.getElementById("printResume");
let exportPdf = document.getElementById("exportPdf");


//Preview Container
let previewContainer  = document.getElementById("previewContainer");
previewContainer.classList.add("previewContainer");






addButton.addEventListener("click", () => {
    let preContainer = document.createElement("div");
    preContainer.classList.add("each-input-container","projects-container");

    let labelText = document.createElement("label");
    labelText.textContent = "Title"
    labelText.classList.add("label-styling")
    preContainer.appendChild(labelText);

    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "";
    titleInput.classList.add("each-Project-input");
    preContainer.appendChild(titleInput);

    let labelTextDescription = document.createElement("label");
    labelTextDescription.textContent = "Description"
    labelTextDescription.classList.add("label-styling")
    preContainer.appendChild(labelTextDescription);

    let descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.placeholder = "";
    descriptionTextarea.classList.add("each-project-text-area");
    descriptionTextarea.cols = 120;
    descriptionTextarea.rows = 10 

    preContainer.appendChild(descriptionTextarea);
    projectInputsContainer.appendChild(preContainer);
});





function renderPreview() {
    previewContainer.innerHTML = ""; // Clear previous preview
    const profileDetailsContainer = document.createElement("div");
    profileDetailsContainer.classList.add("profile-container");
    profileDetailsContainer.style.borderColor = "black"; // Red border
    previewContainer.appendChild(profileDetailsContainer); 
   
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "☎ " + mobile.value;
    profileDetailsContainer.appendChild(phoneNumber);

    const gmailText = document.createElement("p");
    gmailText.innerHTML = `<i class="fa-solid fa-envelope"></i> ${email.value}`;
    profileDetailsContainer.appendChild(gmailText);

    const linkedIn = document.createElement("a");
    linkedIn.href = linkedin.value
    linkedIn.style.color = "grey"
    linkedIn.target = "_blank";
    linkedIn.style.width = "200px";
    linkedIn.innerHTML = `<i class="fa-brands fa-linkedin"></i> ${linkedin.value.slice(0,25)}`;
    profileDetailsContainer.appendChild(linkedIn);

    const educationHeading = document.createElement("h2");
    educationHeading.textContent = "Education";
    profileDetailsContainer.appendChild(educationHeading);

    const collegeName = document.createElement("p");
    collegeName.textContent = college.value;
    profileDetailsContainer.appendChild(collegeName);

    const degreeElement = document.createElement("p");
    degreeElement.textContent = degree.value;
    profileDetailsContainer.appendChild(degreeElement);

    const collegeDuration = document.createElement("p");
    collegeDuration.textContent = starting.value + " - " + completion.value;
    profileDetailsContainer.appendChild(collegeDuration);

    const skillsHeading = document.createElement("h2");
    skillsHeading.textContent = "Skills";
    profileDetailsContainer.appendChild(skillsHeading);

    const skillsList = document.createElement("ul");
    const skillsData = skills.value.split(",");
    skillsData.forEach(eachItem => {
        const item = document.createElement("li");
        item.textContent = eachItem.trim();
        skillsList.appendChild(item);
    });
    profileDetailsContainer.appendChild(skillsList);

    const resumeRightData = document.createElement("div");
    resumeRightData.classList.add("main-details-section");
    //resumeRightData.style.borderColor = "2px solid blue"; // Blue border
    previewContainer.appendChild(resumeRightData);

    const nameElement = document.createElement("h2");
    nameElement.textContent = inputName.value;
    nameElement.classList.add("name-styling");
    resumeRightData.appendChild(nameElement);

    const profileSummary = document.createElement("h3");
    profileSummary.textContent = "Profile Summary";
    resumeRightData.appendChild(profileSummary);

    const summaryDescription = document.createElement("p");
    summaryDescription.textContent = summary.value;
    resumeRightData.appendChild(summaryDescription);

    const projectHeading = document.createElement("h3");
    projectHeading.innerHTML = `<i class="fa-solid fa-suitcase"></i> Projects/Achievements`;
    resumeRightData.appendChild(projectHeading);



    // const projectTitleElement = document.createElement("h1");
    // projectTitleElement.textContent = projectTitle.value;
    // resumeRightData.appendChild(projectTitleElement);

    // const projectSummary = document.createElement("p");
    // projectSummary.textContent = projectDescription.value;
    // resumeRightData.appendChild(projectSummary);


    const allProjects = document.querySelectorAll(".projects-container");
    console.log(allProjects);

    allProjects.forEach(wrapper => {
    const title = wrapper.querySelector(".each-Project-input").value;
    console.log(title)
    const description = wrapper.querySelector(".each-project-text-area").value;
    console.log(description)

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    resumeRightData.appendChild(titleElement);

    const descElement = document.createElement("p");
    descElement.textContent = description;
    resumeRightData.appendChild(descElement);

    });


}



previewButton.addEventListener("click",() => {

    if (inputName.value !== "" && mobile.value!==""&& linkedin.value && college.value!== "" && starting.value !== "" && completion.value!==""&& skills.value !== "" && projectTitle.value!== "" && projectDescription.value !== ""){
        errorContainer.textContent = "";
        renderPreview()
    }
    else{
        
        errorContainer.innerHTML = ""; 
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Fill all the Fields"
        errorMessage.style.color = "red"
        errorMessage.textAlign = "center"
        errorContainer.appendChild(errorMessage);

    }

})

