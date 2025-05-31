<?php
// about.php
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- FontAwesome CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
  <!-- Your CSS -->
  <link rel="stylesheet" href="css/menu.css" />
  
  <!-- FontAwesome JS -->
  <script src="https://kit.fontawesome.com/3c63bc7a17.js" crossorigin="anonymous"></script>
  
  <title>About</title>
</head>

<body>
  <div class="head">
    <header>
      <ul>
        <li><a href="about.php"><h2>About Us</h2></a></li>
        <li><a href="menu.php"><h2>Menu</h2></a></li>
        <li><a href="reservation.php"><h2>Reservation</h2></a></li>
      </ul>
      <ul>
        <li><a href="home-page.php"><h1>Touché</h1></a></li>
      </ul>
      <ul>
        <li><a href="events.php"><h2>News Events</h2></a></li>
        <li><a href="gallery.php"><h2>Gallery</h2></a></li>
        <li><a href="contact.php"><h2>Contact</h2></a></li>
      </ul>
    </header>
  </div>

  <div class="third-part">
    <div class="row">
      <div class="col hidden">
        <img src="images/down-chevron.png" alt="Icon" />
        <p>Some text here</p>
      </div>
      <div class="col hidden">
        <img src="images/down-chevron.png" alt="Icon" />
        <p>Some other text</p>
      </div>
    </div>
    
    <div class="txt">
      <h2>Menu options</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        numquam eos perferendis itaque hic unde, ad, laudantium minima.
      </p>
    </div>

    <div class="row">
      <div class="col">
        <img src="images/brg.jpg" alt="" />
        <div class="txt">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.<span class="money">$10</span></p>
        </div>
      </div>
      <div class="col">
        <img src="images/dont.jpg" alt="" />
        <div class="txt">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.<span class="money">$13</span></p>
        </div>
      </div>
    </div>
    <!-- More rows same as your HTML -->
  </div>

  <div class="fourth-part">
    <div class="extraText">
      <h2>Our featured dishes</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        atque, numquam aliquid harum culpa fugiat explicabo delectus? Modi,
        eos commodi!
      </p>
    </div>

    <div class="row">
      <div class="col">
        <img src="images/brg.jpg" alt="" />
        <h3 title="Lorem ipsum dolor, sit amet consectetur">Lorem ipsum dolor, sit amet consectetur <span>13$</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque recusandae, distinctio delectus reiciendis nisi!</p>
      </div>
      <div class="col">
        <img src="images/crs.jpg" alt="" />
        <h3 title="Lorem ipsum dolor, sit amet consectetur">Lorem ipsum dolor, sit amet consectetur <span>13$</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque recusandae, distinctio delectus reiciendis nisi!</p>
      </div>
      <div class="col">
        <img src="images/egg.jpg" alt="" />
        <h3 title="Lorem ipsum dolor, sit amet consectetur">Lorem ipsum dolor, sit amet consectetur <span>10$</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque recusandae, distinctio delectus reiciendis nisi!</p>
      </div>
      <div class="col">
        <img src="images/waf.jpg" alt="" data-tooltip="Lorem ipsum dolor, sit amet consectetur" />
        <h3 title="Lorem ipsum dolor, sit amet consectetur">Lorem ipsum dolor, sit amet consectetur <span>9$</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque recusandae, distinctio delectus reiciendis nisi!</p>
      </div>
    </div>
  </div>

  <div class="fifth-part">
    <div class="extraNewText">
      <h2>Make online reservation</h2>
      <p class="specialColor">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        illo praesentium sequi in cum, beatae maiores quae qui.
      </p>
    </div>
    <div class="row">
      <div class="col">
        <input type="text" id="name" name="name" placeholder="Full Name" />
      </div>
      <div class="col">
        <select name="person" id="person">
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
          <option value="5">5 Persons</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="number" id="phonenumber" name="phonenumber" placeholder="Phone Number" />
      </div>
      <div class="col">
        <input type="date" name="date" id="date" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="email" id="email" name="email" placeholder="Email Address" />
      </div>
      <div class="col">
        <input type="time" name="time" id="time" />
      </div>
    </div>
    <a class="reserved" href="#">
      <h3>Reserve a Table</h3>
    </a>
  </div>

  <div class="footer">
    <div class="row">
      <div class="col">
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          optio cum dolorem tempora sint consequatur aliquid atque voluptatem
          aliquam voluptates.
        </p>
      </div>
      <div class="col">
        <h3>Contact Info</h3>
        <ul>
          <li><p><span><i class="fa-solid fa-location-dot"></i></span> Vushtrri, Kosovo</p></li>
          <li><p><span><i class="fa-solid fa-phone"></i></span> +383-45-498-382</p></li>
          <li><p><span><i class="fa-solid fa-envelope"></i></span> erinahoxhaxhiku24@gmail.com</p></li>
        </ul>
      </div>
      <div class="col">
        <h3>Opening Hours</h3>
        <p>Monday-Friday</p>
        <p>8Pm-8Am</p>
      </div>
    </div>
  </div>

  <script src="js/menu.js"></script>
</body>

</html>
