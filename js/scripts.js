$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
        setTimeout(function(){
        $('#tooltip2').fadeOut() }, 5000);

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 5)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut();
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-940px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip1").fadeIn()
    })

  });




var boxs = [
    {
        selector: '#cover3',
        headline: '5 Spot Cafe',
        copy: 'So all I can say is go to the <a target="_blank" href="http://www.chowfoods.com/5-spot">5 Spot Cafe</a> if you want breakfast in Seattle. My word! The menu is huge - although largely egg-based, which is a problem for me - and there was also a special, which I went for. It was called Low Country Hash - smoked brisket, peppers, onions, rice, crumbled biscuit and jack cheese, with a side of toast and fruit. Jealous? You are.',
        address: "• <a target='_blank' href='http://www.chowfoods.com/5-spot'>5 Spot Cafe</a>, 1502 Queen Anne Ave N, Seattle",
        content: "<img src='images/resto.jpg'>"
    },

    {
        selector: '#cover2',
        headline: 'Astoria Bridge',
        copy: "The hotel in which we are staying in Astoria is too good for us. It's called the <a target='_blank' href='http://www.cannerypierhotel.com/'>Cannery Pier Hotel</a>, because it's at the end of a pier. We managed to get a room for three for $189. Admittedly, photographer Dan slept on a roll-out bed, but, still, stay here if you ever pitch up in Astoria. Our room overlooks Columbia river and there's a sign by the balcony asking you not to feed the seagulls.",
        content: '<img src="images/bridge.jpg">',
        address: "• <a target='_blank' href='http://www.cannerypierhotel.com/'>cannerypierhotel.com</a>, 10 Basin St, Astoria "
    },

    {
        selector: '#cover6',
        headline: 'Cannon Beach',
        copy: "Aloha! Sort of. We're at Cannon Beach and have just got back to the car because the rain has started. It's really started. It's the first time we've seen the Pacific Ocean on our trip and the first time we've seen a beach but it's not swimming weather. The tide's about to come in. The rain is impressive. The monolith is BIG. ",
        content: '<img src="images/sunglasses.jpg">',
        address: ""
    },

    {
        selector: '#cover4',
        headline: 'Experience Music Project',
        copy: "The model for the cover of In Utero by Nirvana. Big name retail stores found this image offensive. The band's label, DGC, considered the album 'unreleasable' and 'unlistenable'. What did they know, ha! Read more about it on this <a target='_blank' href='http://cltampa.com/dailyloaf/archives/2010/03/03/the-stories-behind-three-seminal-albums-by-nirvana-the-beach-boys-and-billy-joel#.UaPEar_i5Ss'>Daily Loaf post</a>",
        content: '<img src="images/inutero.jpg">',
        address: "• <a target='_blank' href='http://www.empmuseum.org/'>empmuseum.org</a>, 325 5th Ave N  Seattle "
    },

    {
        selector: '#cover1',
        headline: 'Space Needle',
        copy: "We're at the Space Needle. It's tall and has a stonking view of ... Everything.",
        content: '<img src="images/sculpt.jpg">',
        address: "• <a target='_blank' href='http://www.spaceneedle.com/'>spaceneedle.com</a>, 400 Broad St, Seattle"
    },

    {
        selector: '#cover7',
        headline: "Powell's books",
        copy: "As my cashier, Cy, said, you can get lost in here. 'You hear that a lot over the intercom,'' he laughs. And for a while, I did get lost in Powell's, standing in what turned out to be the wrong meeting place for a long time. We all loved the fact that the used books and the new books were in together. Equality street.",
        content: '<img src="images/powells.jpg">',
        address: '• <a target="_blank" href="http://www.powells.com">powells.com</a>'
    },

    {
        selector: '#cover8',
        headline: 'Deschutes Brewpub',
        copy: "The selection of beer in Deschutes is mighty fine. I've gone for a Black Butte Porter now, which is Deschute's flagship beer. It's rich but easy to drink. The menu notes a slight hop bitterness but one that's enhanced by the distinctive chocolate and roasted finish. ",
        content: '<img src="images/beer.jpg">',
        address: '• <a target="_blank" href="http://www.deschutesbrewery.com/locations/portland">deschutesbrewery.com</a>, 210 NW 11th Ave, Portland'
    },

    {
        selector: '#cover9',
        headline: "Astoria Column",
        copy: "The views are quite incredible. You can see all of Astoria and even as far as the Pacific, seeing where it meets Columbia River. Once you're up there it's pretty cold and blustery - making it ideal to throw the balsa wood gliders we'd purchased from the gift shop for $1 dollar each. We even saw two bald eagles soaring above the forest. I'm a little bit emotional now. I need a minute.",
        content: '<img src="images/tower.jpg">',
        address: '• 1 Coxcomb Dr, Astoria'
    },

    {
        selector: '#cover10',
        headline: 'Farewell, Oregon',
        copy: 'After leaving Grants Pass, we passed a sign wishing us farewell from Oregon and were soon greeted by a "Welcome to California sign". The weather got sunny at last on Route 101.',
        content: '<img src="images/welcome.jpg">',
        address: ''

    },

    {
        selector: '#cover11',
        headline: 'Oregon Ducks stadium, Eugene',
        copy: "We're trying to make good time to get to San Farncisco for the Giants game on Thursday. In Eugene, OR,  we went to see the Oregon Ducks' stadium and managed to creep on to the training field to get a picture. ",
        content: '<img src="images/football.jpg">',
        address: '• <a target="_blank" href="http://www.goducks.com/">goducks.com</a>'
    },

    {
        selector: '#cover12',
        headline: 'Former mayor of Portland with his bike',
        copy: "As we were walking to our Toyota Yaris from Stumptown, suddenly photographer Dan pointed out the former mayor of Portland, <a target='_blank' href='http://en.wikipedia.org/wiki/Sam_Adams_(politician)Sam Adams'>Sam Adams</a>. He was getting his bike off the back of a friend's car and was more than happy to stop for a photo. These politicians. ",
        content: '<img src="images/bike.jpg">',
        address: ''
    },

    {
        selector: '#cover13',
        headline: "Jimmy's Classic Drive-In, Grants Pass",
        copy: "So that was one of the best burgers I've had. The menu here is extensive and I went for the Barbie, which is better than the name suggests. They don't do quarter-pounders here, it's a thirder. It's topped with onion rings and crispy bacon and there's American cheese too, whatever that is. The yellow stuff. It's really good - the crispiness of the rings and the bacon sets off well against the meat. It's a tiny restaurant looking out on the road. ",
        content: '<img src="images/burger.jpg">',
        address: '• <a target="_blank" href="http://jimmysclassicdrivein.com/">jimmysclassicdrivein.com</a>, 515 NE E St, Grants Pass'
    },

    {
        selector: '#cover14',
        headline: 'Stumptown Coffee, Portland',
        copy: "It's a low-key breakfast at Stumptown Coffee. A smoked ham and cheese croissant for me along with the obligatory OJ. It's hipster and its proud in here.",
        content: '<img src="images/coffee.jpg">',
        address: "• <a target='_blank' href='http://stumptowncoffee.com/'>stumptowncoffee.com</a>, 128 SW 3rd Avenue"
    },

    {
        selector: '#cover15',
        headline: 'Highway 1',
        copy: "We're driving through the winding roads on Highway 1. It's just the most brilliant thing. The car is swerving more than Ryan Giggs as it turns the corners. The view is, as expected, excellent. We can see the Pacific Ocean.",
        content: '<img src="images/sea.jpg">',
        address: ""
    },

    {
        selector: '#cover16',
        headline: 'Avenue of the Giants',
        copy: '<a target="_blank" href="http://www.guardian.co.uk/travel/2013/may/30/pacific-road-trip-twitrip-day-four">We continued on Highway 101 and went through the Avenue of the Giants to see the redwoods</a>. Do it, do it, do it. It is awe-inspiring. We even drove through a tree.',
        content: '<img src="images/tree.jpg">',
        address: ''
    },

    {
        selector: '#cover18',
        headline: 'Francis Ford Coppola Winery.',
        copy: "A bit of a weird place. There's a lot of tat on sale and some fairly cool Godfather stuff. I got into my swimming shorts and fall backwards into the pool, leading the lifeguard to ask whether I was meant to be in there. Why? Is it a viewing pool or something?",
        content: '<img src="images/swim.jpg">',
        address: "• <a target='_blank' href='http://www.franciscoppolawinery.com'>franciscoppolawinery.com</a>, 300 Via Archimedes, Geyserville, CA"
    },

    {
        selector: '#cover17',
        headline: 'Samoa Cookhouse, Samoa CA',
        copy: "The Samoa Cookhouse was established circa 1893. The sign at the front says it's the last lumber camp-style cookhouse in America. They're big on their logging inside. We've just been served pancakes, sausages and scrambled eggs. 'This is a true working man's American breakfast.' ",
        content: '<img src="images/diner.jpg">',
        address: "• <a target='_blank' href='http://www.samoacookhouse.net/'>samoacookhouse.net</a>, 908 Vance Ave, Samoa"
    },

    {
        selector: '#cover19',
        headline: "Twin Peaks",
        copy: "We're all about the spectacular views over here. We've just driven up the windy hill and are now looking over the city from Twin Peaks.",
        content: '<img src="images/view.jpg">',
        address: ""
    },

    {
        selector: '#cover20',
        headline: 'Cliff House',
        copy: "Just pitched up around Cliff House. Peaceful - a recurring theme... Birds tweeting. It's a sunny day in San Francisco. We could yet see shorts. Stay tuned.",
        content: '<img src="images/pensive.jpg">',
        address: "• <a target='_blank' href='http://www.cliffhouse.com/'>cliffhouse.com</a>, 1090 Point Lobos Ave, San Francisco"
    },

    {
        selector: '#cover21',
        headline: 'Ferry Building, SF',
        copy: "And here we are now. San Francisco. We like it here. We're around the Ferry Building and need to find some breakfast. There are many options. It's an upmarket Pike Place Market.",
        content: '<img src="images/morning.jpg">',
        address: "• <a target='_blank' href='http://www.ferrybuildingmarketplace.com/'>southernmosthouse.com</a>, 1 Sausalito - San Francisco Ferry Bldg"
    },

    {
        selector: '#cover22',
        headline: "Shotwell's",
        copy: "The Mission District used to be a predominantly Irish area but has slowly turned into a more Hispanic area since the 60s.We're in Shotwell's, an old-fashioned pub on Shotwell and 20th street. We're having a beer. Might shoot some pool.",
        content: '<img src="images/shotwells.jpg">',
        address: "• <a target='_blank' href='http://www.shotwellsbar.com/'>shotwellsbar.com</a>, 3349 20th St, San Francisco"
    }


 ]

 function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
      $("#address").html(box.address)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });



}); //ready

