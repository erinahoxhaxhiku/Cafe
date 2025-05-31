<?php
// contact.php - main page
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/contact.css" />
  <script src="https://kit.fontawesome.com/3c63bc7a17.js" crossorigin="anonymous"></script>
</head>

<body>
  <?php include 'includes/header.php'; ?>

  <div class="head">
    <div class="txt">Contact Us</div>
  </div>

  <div class="first-part">
    <h2>Get in touch with us</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo
      praesentium sequi in cum, beatae maiores quae qui.
    </p>
  </div>

  <div class="second-part">
    <div class="row">
      <div class="col">
        <!-- Wrap inputs inside a form -->
        <form method="post" action="">
          <input type="text" id="name" name="name" placeholder="Full Name" required />
          <input type="email" id="email" name="email" class="nine-input" placeholder="Email Address" required />
          <textarea id="message" name="message" placeholder="Message" required></textarea>
          <div class="form-container">
            <button type="submit" class="submit-btn">Submit</button>
          </div>
        </form>
      </div>

      <div class="col">
        <h3>Write to me:</h3>
        <p>erinahoxhaxhiku24@gmail.com</p>
        <h3>Call me</h3>
        <p>045-498-382</p>
        <h3>Visit us</h3>
        <p>Vushtrri, Kosova</p>
      </div>
    </div>
  </div>

  <div class="map">
    <img src="image/pristina_map.png" alt="Map" />
  </div>

  <?php include 'includes/footer.php'; ?>

  <button id="scrollToTopBtn" onclick="scrollToTop()">↑</button>

  <script src="javascript/contact.js"></script>
</body>

</html>
