import { supabase } from "../config/supabaseClient";

const form = document.querySelector("#newsletter-form");

window.addEventListener("load", () => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formInputs = document.querySelectorAll("input");

    let submission = {};

    formInputs.forEach((element) => {
      const { value, name } = element;
      if (value) {
        submission[name] = value;
      }
    });

    await supabase.from("newsletter-subscriptions").insert([submission]);
    window.location.href = "/success-newsletter";

    const userName = document.getElementById("name");
    userName.value = "";

    const userEmail = document.getElementById("email");
    userEmail.value = "";
  });
});
