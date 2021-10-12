$("#Button").on("click", () => {
    $.get("https://dog.ceo/api/breeds/image/random", (data) => {
        $(".dog-image").attr("src", data.message);
    }).fail(() => {
        console.log("FAILED");
    });
});
