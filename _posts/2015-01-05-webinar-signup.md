---
title: 'Webinar'
date: 2015-01-05 00:00:00 
tags: 
layout: post
---
<p>
  <meta charset="utf-8">
  <style>

* {
  box-sizing: border-box
}
html,body {
  background: #f2f2f2;
  font: 17px 'Montserrat', sans-serif;
  color: #454545
}
#content {
  width: 950px;
  margin: 20px auto;
  background: #fff;
  background-size: 38px 40px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,.11);
  padding: 32px 92px;
  margin-left: -50%;
}
.logo {
  font-family: 'Pontano Sans', sans-serif;
  margin: 0 auto;
  width: 350px;
  text-align: center;
  color:#C01A2C;
  font-size: 33px;
}
.logo.logo-head {
  margin-top: 15px
}
h1,h2 {
  text-align: center
}
#content h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 43px;
  margin: 15px 0;
  /*color: #363636;*/
  color:#C01A2C;
  letter-spacing: -2px;
}
h2 {
  font-weight: normal;
  font-size: 32px;
  margin: 0 0 35px
}
.optin {
  background: url(/content/images/2015/01/optin.png) no-repeat;
  background-size: 767px 235px;
  width: 767px;
  height: 245px;
  padding: 5px 25px;
  margin-top: 21px;
  display: table
}
.optin.cta {
  background-image: url(confirmed.png);
  margin-top: 5px;
  margin-bottom: 10px
}
.optin.complete {
  background-image: url(confirmed.png)
}
.optin .webinar-details {
  display: table-cell;
  vertical-align: middle
}
.optin .webinar-details .free {
  background: #4a90e2;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  padding: 2px 5px
}
.optin .webinar-details .date {
  color: #7e2929;
  font-size: 34px
}
.optin .webinar-details .time {
  font-size: 20px
}
.optin .registration {
  display: table-cell;
  vertical-align: middle;
  width: 300px
}
.optin .registration .confirmed {
  font-weight: bold;
  font-size: 22px
}
.optin .registration input[type="text"],.optin .registration input[type="email"] {
  font-size: 22px;
  margin-bottom: 5px;
  padding: 3px 5px
}
.optin .registration input[type="submit"] {
  margin-top: 0;
  display: block;
  background: url(/content/images/2015/01/ctabutton.png);
  background-size: 217px 49px;
  width: 217px;
  height: 49px;
  cursor: pointer;
  border: none;
  text-indent: -1000px
}
.overview {
  margin-top: 35px;
  display: table;
  width: 100%
}
.overview .about {
  display: table-cell;
  vertical-align: top;
  width: 587px;
  padding-right: 18px
}
.overview .about ul {
  margin: 0;
  margin-left: -44px;
  padding: 0;
  list-style: none
}
.overview .about ul li {
  margin: 0;
  background: url(/content/images/2015/01/one.png) 0 50% no-repeat;
  background-size: 34px 34px;
  padding-left: 44px;
  margin-bottom: 22px
}
.overview .about ul li.two {
  background-image: url(/content/images/2015/01/two.png)
}
.overview .about ul li.three {
  background-image: url(/content/images/2015/01/three.png)
}
.overview .about ul li strong {
  display: block
}
.overview .bio {
  display: table-cell;
  vertical-align: top;
  width: 330px;
  border-left: 1px solid rgba(151,151,151,.27);
  padding-left: 18px
}
.overview .bio .bio-header {
  display: table;
  width: 100%
}
.overview .bio .bio-header .bio-avatar {
  display: table-cell;
  vertical-align: middle;
  width: 75px
}
.overview .bio .bio-header .bio-avatar img {
  width: 64px
}
.overview .bio .bio-header .bio-title {
  display: table-cell;
  vertical-align: middle
}
.overview .bio .bio-header .bio-title .bio-title-role {
  text-transform: uppercase;
  font-size: 15px;
  opacity: .8
}
.overview .bio .bio-header .bio-title .bio-title-name {
  font-weight: bold;
  font-size: 24px
}
.overview .bio .bio-entry, .overview .bio .bio-entry p {
  font-size: 16px;
  margin-top: 12px;
  line-height: 1.4;
  margin-bottom: 32px
}
div.fb-share-button.fb_iframe_widget {
  top: -6px
}
.cta-link {
  text-align: center;
  font-size: 120%;
  margin-top: 5px;
  background: #ffd;
  padding: 10px
}
.cta-link p {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 80%
}
#micronav {
  background: rgba(20,106,123,.8);
  height: 32px;
  line-height: 32px;
  text-align: left;
  padding-left: 20px;
  width: 100%;
  z-index: 10000
}
#micronav a {
  color: rgba(255,255,255,.7);
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Avenir Next W01';
  font-weight: 600;
  font-style: Regular;
  font-size: 14px
}
#micronav a: hover {
  color: #fff
}

.flashsale {
  background: #182938;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px
}
.flashsale .wrapper {
  display: table;
  height: 100%;
  width: 900px;
  margin: 0 auto
}
.flashsale .limited {
  display: table-cell;
  padding-left: 20px;
  vertical-align: middle
}
.flashsale .countdown {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  padding-right: 20px
}
.flashsale .countdown span {
  font-weight: bold
}
/* ---------- TIMER ---------- */


#timer {
	display: inline-block; 
	position: relative; 
	margin: 0 20px 0 0;
}
ul#countdown li {
	float: left;
  	display: inline-block;
  	background: transparent url('/content/images/2015/01/clock-bg.png') no-repeat left top;
  	width: 71px;
  	text-align: center;
  	margin-right: 10px;
}
ul#countdown li span {
  	font-family: 'Oswald', sans-serif;
  	font-weight: 400;
  	font-size: 2.1em;
  	color: #1f2225;
  	line-height: 70px;
  	position: relative;
  	text-shadow: 1px 1px 1px white;
  	text-align: center;
  	padding-right: 1px;
}
ul#countdown li span::before {
  	content: '';
  	width: 100%;
  	height: 1px;
  	border-top: 2px solid #e0e0e0;
  	position: absolute;
  	top: 50%;
  	text-align: center;
  	left: 1px;
}
ul#countdown li p.timeRefDays,
ul#countdown li p.timeRefHours,
ul#countdown li p.timeRefMinutes,
ul#countdown li p.timeRefSeconds {
  	display: inline-block;
  	float: left;
  	font-family: 'Oswald', sans-serif;
  	font-weight: 300;
  	text-transform: uppercase;
  	font-size: 14px;
   		*font-size:8px;
   		 font-size:10px;
  	text-align: center;
  	margin: 2px auto ;
  	letter-spacing: 1px;
  		*letter-spacing: 0px;
  		letter-spacing: 0px;
}
ul#countdown li p.timeRefDays {
	padding-left: 22px;
}
ul#countdown li p.timeRefHours {
	padding-left: 12px;
		padding-left: 20px;
}
ul#countdown li p.timeRefMinutes {
	padding-left: 8px;
		padding-left: 15px;
}
ul#countdown li p.timeRefSeconds {
	padding-left: 7px;
		padding-left: 13px;
}
#box-bottom {
	position: relative;
	background: #2792d6 url(/content/images/2015/01/bg-btm.png) top left repeat;
	-webkit-border-radius: 0px 0px 10px 10px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    padding: 20px 5px 10px 5px;
    z-index: 0;

}
  </style>
  <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Pontano+Sans' rel='stylesheet' type='text/css'>
  <style type="text/css">
    h1 {font-family: 'Oswald', sans-serif;}
    /*h1 {font-family: 'Montserrat', sans-serif;}*/
  </style>
</p>
<div id="content">
    <h1>Measuring the Business Impact of Technology</h1>
    <h2>Most IT projects fail — do yours?<br>Learn how to ensure your success before you even start.</h2>

    <div class="optin">
        <div class="webinar-details">
            <div class="free">Free Event</div>
            <div class="date">Tuesday, <span id="month">January</span> <span id="day">27</span></div>
            <div class="time">11am Pacific / 2pm Eastern / 6pm GMT</div>
							<div id="timer">
								<ul id="countdown">
									<li>
										<span class="days">21</span>
										<p class="timeRefDays">days</p>
									</li>
									<li>
										<span class="hours">22</span>
										<p class="timeRefHours">hours</p>
									</li>
									<li>
										<span class="minutes">36</span>
										<p class="timeRefMinutes">minutes</p>
									</li>
									<li>
										<span class="seconds">00</span>
										<p class="timeRefSeconds">seconds</p>
									</li>
								</ul>
							</div>
                          </div>
        <div class="registration">
            <form action="http://twentyfivetwenty.us9.list-manage.com/subscribe/post?u=e3d5c70b38a966cb27cb923d1&amp;id=56338badd2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <!-- <form accept-charset="UTF-8" action="https://ye150.infusionsoft.com/app/form/process/508b2c7752ae2a80ed8be872d3c24cb2" class="infusion-form" method="POST"> -->
              <input type="text" value="" name="FNAME" class="" id="mce-FNAME" placeholder="Your first name">
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your email address">
              <input type="hidden" name="COURSE_DAT[month]" id="mce-COURSE_DAT-month" value="01">
		<input type="hidden" name="COURSE_DAT[day]" id="mce-COURSE_DAT-day" value="27">
		<input type="hidden" name="COURSE_DAT[year]" id="mce-COURSE_DAT-year" value="2014">
              <input type="submit" value="" id="mc-embedded-subscribe" >
            </form>
        </div>
    </div>
	
    <div class="overview">
        <div class="about">

            <p>During this FREE workshop, you’ll learn how to:</p>
            <ul>
                <li class="one">
                    <strong><i>Prove</i> the value of your project</strong> Avoid opinion by using a quanititative number.
                </li>

                <li class="two">
                    <strong>Get the best bang for your buck.</strong> Ensure you are investing in the <i>right</i> technology
                </li>

                <li class="three">
                    <strong>Get buy-in</strong> Project your differentiators and get <i>everyone</i> excited about your project
                </li>
            </ul>
            <p>
              All in 5 easy steps.  
            </p>
            <p>
              Space is limited (this is a live event and there will be time for Q&amp;A), so be sure to claim your spot now.
            </p>

        </div>
        <div class="bio">
            <div class="bio-header">
                <div class="bio-avatar">
                    <img src="/content/images/2015/01/me.jpg" style="border-radius:50px; border: 3px solid #ddd;">
                </div>
                <div class="bio-title">
                    <div class="bio-title-role">Host</div>
                    <div class="bio-title-name">Jon Holt</div>
                </div>
            </div>
            <div class="bio-entry">
                <p>Jon Holt has been a technology consultant for over 15 years and worked on 100s of projects.  </p>            
                <p>He's worked with everyone from grizzled mainframe DBAs to CEOs, in companies from 5 to 5000 employees.  </p>
                <p>His specialty is translating technology into English and helping people to understand technology in the context of their business.</p>
 </div>

        </div>

    </div>

</div>
<img src="/content/images/2015/01/optin.png" style="display:none;">
<img src="/content/images/2015/01/one.png" style="display:none;">
<img src="/content/images/2015/01/two.png" style="display:none;">
<img src="/content/images/2015/01/three.png" style="display:none;">
<img src="/content/images/2015/01/me.jpg" style="display:none;">
<img src="/content/images/2015/01/ctabutton.png" style="display:none;">
<img src="/content/images/2015/01/clock-bg.png" style="display:none;">
<img src="/content/images/2015/01/bg-btm.png" style="display:none;">
<script>

		//custom 'this' selector
		thisEl = document.getElementById('countdown');

		//Get next tuesday
        var date=new Date();
		var dif=date.getDay()-2;
		dif=dif>0?dif=7-dif:-dif;
		date.setDate(date.getDate()+dif);
        date.setHours(12,0,0);
		//array of custom settings
		var settings = { 
			date: date.toJSON(),
			format: "on"
		};
        
        //Set the text
        var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    	var day = document.getElementById("day");
        var month = document.getElementById("month");
        month.innerHTML=monthNames[date.getMonth()];
        day.innerHTML=date.getUTCDate();
    	

		
		//main countdown function
		function countdown_proc() {
			
			eventDate = Date.parse(settings['date']) / 1000;
			currentDate = Math.floor((new Date).getTime() / 1000);
			
			if(eventDate <= currentDate) {
				callback.call(this);
				clearInterval(interval);
			}
			
			seconds = eventDate - currentDate;
			
			days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
			seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed
			
			hours = Math.floor(seconds / (60 * 60));
			seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed
			
			minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
            seconds = Math.floor(seconds);
			
            //conditional Ss
            var timeRefDays = thisEl.getElementsByClassName ("timeRefDays")[0];
            var timeRefHours = thisEl.getElementsByClassName ("timeRefHours")[0];
            var timeRefMins = thisEl.getElementsByClassName ("timeRefMinutes")[0];
            var timeRefSecs = thisEl.getElementsByClassName ("timeRefSeconds")[0];
			if (days == 1) { timeRefDays.innerHTML="day"; } else { timeRefDays.innerHTML="days"; }
			if (hours == 1) { timeRefHours.innerHTML="hour"; } else { timeRefHours.innerHTML="hours"; }
			if (minutes == 1) { timeRefMins.innerHTML="minute"; } else { timeRefMins.innerHTML="minutes"; }
			if (seconds == 1) { timeRefSecs.innerHTML="second"; } else { timeRefSecs.innerHTML="seconds"; }
			
			//logic for the two_digits ON setting
			if(settings['format'] == "on") {
				days = (String(days).length >= 2) ? days : "0" + days;
				hours = (String(hours).length >= 2) ? hours : "0" + hours;
				minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
				seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
			}
			
			//update the countdown's html values.
			if(!isNaN(eventDate)) { thisEl.getElementsByClassName("days")[0].innerHTML=days; thisEl.getElementsByClassName("hours")[0].innerHTML=hours;		 thisEl.getElementsByClassName("minutes")[0].innerHTML=minutes;	thisEl.getElementsByClassName("seconds")[0].innerHTML=seconds;
			} else { 
				alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
				clearInterval(interval); 
			}
		}
		
		//run the function
		countdown_proc();
		
		//loop the function
		interval = setInterval(countdown_proc, 1000);

</script>
