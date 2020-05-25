<!DOCTYPE html>

<head>
    <title>About Us: Hello World</title>

    <?php include 'head.php' ?>

    <link rel="stylesheet" href="styles/about.css">

</head>

<body>
<?php include 'nav.php' ?>

<!--Banner-->
<div class="banner">
    <canvas id="canvas" height="300"></canvas>
    <img id="bigLogo" src="imgs/Logo.svg" draggable="false">
</div>
<div class="content">


    <!--Meet the Instructors-->
    <div class="section">
        <h2>// Meet the Instructors</h2><br>
        <div class="instructors-container">
                <span class="instructors-item">
                    <img src="imgs/SydneySquare.jpg"><br>
                    <strong>Sydney Von Arx</strong>
                        <p>I am Sydney Von Arx, and I love to code! I’m a computer science major at Stanford. I have
                            experience with eight programming languages. I have completed three computer science-related
                            internships and built several programs and apps. My real specialty, though, is web
                            development.
                            One of the few things I love more than coding is teaching!
                        </p>
                </span>
            <span class="instructors-item">
                    <img src="imgs/SelenaSquare.jpg"><br>
                    <strong>Selena Zhang</strong>
                        <p>I’m Selena Zhang; I'm an avid web developer and love to teach and learn from others! Next year, I plan to study computer science at MIT, but in eighth grade, I was the only girl in my computer science class, and I felt discouraged and alienated. I want other girls to have a different experience, so I’ve devoted hundreds of hours to teaching after-school programs throughout high school.
                        </p>
                </span>
        </div>
    </div>
    <div class="section">
        <h2>// Our Organization</h2>
        <p>
            Hello World is run by a Portland nonprofit called Bit by Bit Coding. We started running programs in 2018, and incorporated in 2019. Our mission is to expand and diversify the programming community by equipping the next generation of programmers with the tools they need to master coding and leadership.

        </p>
    </div>
</div>
<!--Footer-->
<?php include 'footer.php' ?>
<script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
<script src="scripts/utils.js"></script>
<script src="scripts/sort.js"></script>
</body>