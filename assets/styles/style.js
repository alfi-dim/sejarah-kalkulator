$(window).scroll(function () {
	let posisi = $(window).scrollTop();

	
	if ($("#nav-content").is(':visible')) {
		
		if (posisi >= 400 ) {
			$("nav").slideDown();

		}

		else {
			$("nav").slideUp();
		}
	}

	else {
		$("nav").slideDown();
	}

});

$(document).ready(function () {
	$("#sejarah , #sejarah-a").click(function () {
		let sejarah = document.getElementById("sejarah-awal");
  		sejarah.scrollIntoView();
	});
	$("#perkembangan, #perkembangan-a").click(function () {
		let perkembangan = document.getElementById("perkembangan-kalkulator");
  		perkembangan.scrollIntoView();
	});
	$("#elektrik, #elektrik-a").click(function () {
		let elektrik = document.getElementById("kalkulator-elektrik");
  		elektrik.scrollIntoView();
	});
});

function nav() {
  var x = document.getElementById("mobile");
  if (x.className === "pc") {
    x.className += " responsive";

  } else {
    x.className = "pc";
  }
}