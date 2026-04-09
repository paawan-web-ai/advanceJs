function createToaster(config) {
  return function (str) {
    const div = document.createElement("div");
    div.textContent = str;
    div.className =
      "inline-block space-y-3 z-50 bg-blue-500 px-6 py-3 rounded text-white font-bold shadow-lg pointer-events-none transition-opacity duration-300";
    document.querySelector(".parent").appendChild(div);

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}
let toster = createToaster({
  postionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 3,
});

toster("Download Done");
toster("Download Done");
toster("Download Done");
toster("Download Done");
