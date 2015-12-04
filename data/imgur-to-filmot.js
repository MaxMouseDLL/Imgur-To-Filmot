var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	if (links[i].href.indexOf("imgur.com") != -1) {
	    links[i].href = links[i].href.replace("gifv","gif");
	    links[i].href = links[i].href.replace("https","http");
	    links[i].href = links[i].href.replace("i.imgur.com","filmot.org");
	    links[i].href = links[i].href.replace("imgur.com","filmot.org");
	}
}
