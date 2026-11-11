const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const success = document.getElementById("success");

const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const continue1 = document.getElementById("continue1");
const continue2 = document.getElementById("continue2");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");
const submitBtn = document.getElementById("submitBtn");

const stepText = document.getElementById("stepText");
const progressContainer = document.getElementById("progressContainer");
const dots = document.querySelectorAll(".dot");
const topicButtons = document.querySelectorAll(".topic");

const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryTopics = document.getElementById("summaryTopics");

// Store the topics selected by the user.
let selectedTopics = [];

// Show one step and update the progress indicator.
function showStep(stepNumber) {
    [step1, step2, step3, success].forEach((step) => {
        step.classList.remove("active");
    });

    const steps = {
        1: step1,
        2: step2,
        3: step3,
        4: success
    };

    steps[stepNumber].classList.add("active");

    if (stepNumber <= 3) {
        stepText.textContent = `Step ${stepNumber} of 3`;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active-dot", index < stepNumber);
        });
        progressContainer.style.display = "block";
    } else {
        progressContainer.style.display = "none";
    }
}

// Step 1: Check the name and email before continuing.
continue1.addEventListener("click", () => {
    if (registrationForm.checkValidity()) {
        showStep(2);
    } else {
        registrationForm.reportValidity();
    }
});

// Step 2: Allow users to select or deselect multiple topics.
topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const topicName = button.textContent.trim();
        const isSelected = selectedTopics.includes(topicName);

        if (isSelected) {
            selectedTopics = selectedTopics.filter((topic) => topic !== topicName);
        } else {
            selectedTopics.push(topicName);
        }

        button.classList.toggle("selected", !isSelected);
        button.setAttribute("aria-pressed", String(!isSelected));
    });
});

// Continue to the summary after at least one topic is selected.
continue2.addEventListener("click", () => {
    if (selectedTopics.length === 0) {
        alert("Please select at least one topic.");
        return;
    }

    summaryName.textContent = nameInput.value.trim();
    summaryEmail.textContent = emailInput.value.trim();

    // Build the summary list safely using textContent.
    summaryTopics.replaceChildren();

    selectedTopics.forEach((topic) => {
        const listItem = document.createElement("li");
        listItem.textContent = topic;
        summaryTopics.appendChild(listItem);
    });

    showStep(3);
});

// Back navigation.
back2.addEventListener("click", () => showStep(1));
back3.addEventListener("click", () => showStep(2));

// Finish the front-end demonstration.
submitBtn.addEventListener("click", () => showStep(4));