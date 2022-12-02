let links = $("a");

links.each((index, element) => {

    let url = youtube.generateThumbnailUrl($(element).attr("href"))

    let img = $("<img src="+ url +">")

    $(element).prepend(img).hide(2000)
    $(element).prepend(img).show(2000)
})








