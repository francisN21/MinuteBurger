document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const burgerDevour = document.querySelectorAll(".devoured");

  // Set up the event listener for the create button
  if (burgerDevour) {
    burgerDevour.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const notDevoured = e.target.getAttribute("data-notDevoured");

        const devour = {
          devoured: notDevoured,
        };

        fetch(`/api/burger/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(devour),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed sleep to: ${devour}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const addBurgerForm = document.getElementById("add-burger-form");

  if (addBurgerForm) {
    // listens to the submit button event
    addBurgerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // creates new burger
      const addBurger = {
        burger_name: document.getElementById("new_burger").value.trim(),
        devoured: document.getElementById("devour").checked,
      };

      // Send POST request to create a new burger
      fetch("/api/burger", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(addBurger),
      }).then(() => {
        // empties the form for next submittion
        document.getElementById("add-burger-form").value = "";

        // Reload the page so the user can see the new quote
        console.log("Burger added!");
        location.reload();
      });
    });
  }

  // DELETE
  const deleteBurger = document.querySelectorAll(".delete-burger");

  // Set up the event listeners for each delete button
  deleteBurger.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      // Send the delete request
      fetch(`/api/burger/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
