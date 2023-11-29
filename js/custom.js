/*!
 * Item: CodeX
 * Description:  Personal Portfolio / Resume / CV / vCard Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
/*----------- CUSTOM JS SCRIPTS -----------*/

(function ($) {
  "use strict";
  $(function () {
    // Code here executes when the DOM is loaded...
  });
  $(window).on("load", function () {
    // Code here executes when the page is loaded
  });
})(jQuery);

// (function () {
//   emailjs.init("299XfdeB_Ap9iw3m1");
// })();

const copyrightElement = document.getElementById("copy-date");
const currentYear = new Date().getFullYear(); // Corrected

copyrightElement.textContent = ` Copyright ©${currentYear} rahelh.com, all rights reserved.`;

// const form = document.getElementById("contact-form-1");
// const username = document.getElementById("contact-name");
// const subject = document.getElementById("contact-subject");
// const message = document.getElementById("contact-message");
// const email = document.getElementById("contact-email");

// Function to send the email
// function sendEmail() {
//   emailjs
//     .sendForm(
//       "service_ik1xg6r",
//       "template_vks04ck",
//       {
//         name: username.value,
//         email: email.value,
//         subject: subject.value,
//         message: message.value,
//       }, // Corrected
//       "299XfdeB_Ap9iw3m1"
//     )
//     .then(
//       function (response) {
//         console.log("Email sent successfully", response);
//       },
//       function (error) {
//         console.error("Email sending failed", error);
//       }
//     );
// }

// // Add a form submit event listener
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   sendEmail(); // Call the function to send the email

//   // You can also add additional logic here, such as showing a success message or redirecting to a thank-you page.
// });
