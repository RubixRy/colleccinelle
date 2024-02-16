console.log("Hi");
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", function (data) {
    let copyright = data.copyright;
    let date = data.date;
    let description = data.description;
    let src = data.url;
    let title = data.title;

    $("#image_of_the_day_img").attr("src", src);
    $("#image_of_the_day_link").attr("href", src);
    $("#image_of_the_day_title").text(title);
    $("#image_of_the_day_description").text(description);
    $("#image_of_the_day_date").text(date);
    $("#image_of_the_day_copyright").text(copyright);
});