<?php
// index.php

// For now, this is mostly static content, but you can add PHP here if needed.

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <!-- Your custom CSS -->
    <link rel="stylesheet" href="css/gallery.css" />
    <!-- FontAwesome kit -->
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
                <li><a href="index.php"><h1>Touché</h1></a></li>
            </ul>
            <ul>
                <li><a href="events.php"><h2>News Events</h2></a></li>
                <li><a href="gallery.php"><h2>Gallery</h2></a></li>
                <li><a href="contact.php"><h2>Contact</h2></a></li>
            </ul>
        </header>
        <h1 class="galery">Our Gallery</h1>
    </div>
    <div class="first-part">
        <h2>Take a sneak peek</h2>
        <p>
            Asperiores temporibus fuga possimus labore ex porro pariatur sed, nisi
            dolor, nobis architecto. Placeat facilis voluptas alias ducimus.
        </p>
        <img src="images/gallery1.jpg" alt="Gallery main image" />
    </div>
    <div class="final-part">
        <h2>Our gallery</h2>
        <div class="row">
            <div class="col"><img class="end1" src="images/end-1.jpg" alt="Gallery image 1" /></div>
            <div class="col"><img class="end4" src="images/end-4.jpg" alt="Gallery image 4" /></div>
            <div class="col"><img class="end6" src="images/end-6.jpg" alt="Gallery image 6" /></div>
        </div>
        <div class="row">
            <div class="col"><img class="end2" src="images/end-2.jpg" alt="Gallery image 2" /></div>
            <div class="col"><img class="end5" src="images/end-5.jpg" alt="Gallery image 5" /></div>
            <div class="col"><img class="end7" src="images/end-7.jpg" alt="Gallery image 7" /></div>
        </div>
        <div class="row">
            <div class="col"><img class="end3" src="images/end-3.jpg" alt="Gallery image 3" /></div>
            <div class="col"><img class="end8" src="images/end-8.jpg" alt="Gallery image 8" /></div>
        </div>
    </div>
    <div class="nine-part">
        <div class="nine-part-container">
            <h2>Newsletter</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
                illo praesentium sequi in cum, beatae maiores quae qui.
            </p>
            <div class="row">
                <div class="col">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="nine-input"
                        placeholder="Email Address"
                    />
                </div>
                <div class="col">
                    <a class="subscribe" href="#">SUBSCRIBE</a>
                </div>
            </div>
        </div>
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

    <!-- Your JS -->
    <script src="js/gallery.js"></script>
</body>
</html>
