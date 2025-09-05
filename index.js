
      // Toggle mobile menu
      const menuBtn = document.getElementById('menu-btn');
      const navLinks = document.getElementById('nav-links');
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });

      // CV Download Confirmation
      document.getElementById('download-cv').addEventListener('click', function() {
        alert('CV download started! Thank you for your interest.');
      });

      document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = this.querySelector('#name').value;
  const email = this.querySelector('#email').value;
  const message = this.querySelector('#message').value;

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const result = await response.text();
    alert(result);  // backend response show ஆகும்
    this.reset();

  } catch (error) {
    console.error("❌ Error:", error);
    alert("Something went wrong. Please try again later.");
  }
});
    
