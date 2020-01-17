export function isValidZipCode(zipCode) {
    return /^\d{5}(-\d{4})?$/.test(zipCode);
}

// Display Alert Message Prompt
export function showAlert(message, classNmaee) {
    // create div
    const div = document.createElement("div");
    // Add Classes
    //div.className = "alert alert-danger";
    div.className = `alert alert-${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    //Get Container
    const container = document.querySelector(".coontainer");
    // Get Form
    const form = document.querySelector(".pet-form");
    // Insert Alert
    container.insertBefore(div, form);

    // Alert Message Cleaned Up
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
}