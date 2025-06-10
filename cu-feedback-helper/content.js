window.addEventListener("load", () => {
    let selectedCount = 0;
  
    // Step 1: Select "Excellent (5)" for each question
    const questions = document.querySelectorAll("fieldset.rating");
    questions.forEach((fieldset) => {
      const excellentOption = [...fieldset.querySelectorAll("input[type='radio']")]
        .find((input) => input.title?.includes("Excellent") || input.nextElementSibling?.title?.includes("Excellent"));
  
      if (excellentOption) {
        excellentOption.checked = true;
        selectedCount++;
      }
    });
  
    console.log(`✅ Selected asd ${selectedCount} Excellent (5) stars`);
  
    // Step 2: Fill a default comment
    const commentBox = document.querySelector("#txtcomments");
    if (commentBox) {
      commentBox.value = "The course was excellent and very informative. Thank you!";
    }
  
    // Step 3: Auto-submit the form
    const submitBtn = document.querySelector("#SubmitBtn");
    if (submitBtn) {
      setTimeout(() => {
        console.log("📩 Form submitted automatically");
        submitBtn.click();
      }, 1000);
    }
  });
  