<!DOCTYPE html>

<head>
    <title>FAQs: Hello World</title>
    <?php include 'head.php' ?>
    <link rel="stylesheet" href="styles/faqs.css">
</head>

<body>
    <!--Nav Bar-->
    <?php include 'nav.php' ?>
    <div class="banner">
        <canvas id="canvas"></canvas>
        <img id="bigLogo" src="imgs/Logo.svg">
    </div>
    <div id="content">


    <!--FAQs-->
    <div class="section">
        <h2>// FAQs</h2>

        <button class="accordian">What about trans/gender-nonconforming youths?</button>
        <div class="panel">
            <p>They are all welcome! Hello World aims to support all genders that are underrepresented in the
                programming community.</p>
        </div>

        <button class="accordian">Do you need any previous experience with coding to participate in Hello
            World?</button>
        <div class="panel">
            <p>No! This program is designed for people with no previous exposure to web development at all.
                You do not need to be a computer whiz or a geeky person (though if you are, that’s great). All you need
                is a
                willingness to learn and try new things.</p>
        </div>

        <button class="accordian">I have a 4th grader who really wants to sign up.</button>
        <div class="panel">
            <p>Email <a href="mailto:info@bitbybit.su.domains">info@bitbybit.su.domains</a>.</p>
        </div>

        <button class="accordian">Do you teach (WordPress/Wix/Weebly/any other platform)?</button>
        <div class="panel">
            <p>Nope! We teach pure HTML, CSS, and JavaScript! We don’t even use any libraries or frameworks.
                We feel it is essential to understand these core components of the web before using any tools built on
                top of them.</p>
        </div>

        <button class="accordian">What if you already know how to program?</button>
        <div class="panel">
            <p>No worries; we’ll give you plenty of challenging tasks, no matter your skill level.</p>
        </div>

        <button class="accordian">Why is it limited to only girls?</button>
        <div class="panel">
            <p>We believe learning to code is a great experience for anyone, but we only have the resources to
                teach a limited number of students. Many camps exist already where boys can learn to program, and, while
                girls are technically allowed at these camps (and it’s always great when they attend them!) many find it
                very intimidating and isolating to be one of the only females in the room. According to the <a
                        href="https://insights.stackoverflow.com/survey/2019#developer-profile-_-gender">2019
                StackOverflow developer survey</a>, 92.1% of professional developers are male. For the 7.5% that are female,
                they must face a workplace where all their mentors, peers, and bosses are men. I can speak from
                experience as the only woman in many classes I’ve taken; it’s hard. Girls are actually as good (some studies even
                suggest better) programmers than guys, and at young ages they share the same level of interest. But, in
                middle school, they start to lose interest in programming and turn to more traditionally female roles.
                We aim to change that by showing girls how fun, useful, and powerful programming can be! So, sorry boys,
                but it’s time to give the girls a turn.</p>
        </div>

        <button class="accordian">Will there be a snack?</button>
        <div class="panel">
            <p>Yes! We will have allergy and special-diet friendly options.</p>
        </div>

        <button class="accordian">Do you provide computers?</button>
        <div class="panel">
            <p>If needed. We prefer that your child brings a laptop (and not a Chromebook). Please make sure
                parental restrictions aren’t too tight on the laptop–to prevent people from hacking the parental
                restrictions, they will sometimes stop users from being able to code at all on computers that are very
                locked-down. To test if restrictions are too tight, open a browser and press command (or control) +
                shift + i. If nothing happens, the restrictions are likely too tight.
                <br>
                If social-distancing is still in place in August and we move to an online program, your child will need computer access to participate.</p>
        </div>

        <button class="accordian">What if I have more questions?</button>
        <div class="panel">
            <p>No problem! Please email <a href="mailto:info@bitbybit.su.domains">info@bitbybit.su.domains</a>.</p>
        </div>
    </div>
    </div>

    <?php include 'footer.php' ?>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
    <script src="scripts/faqs.js"></script>
</body>