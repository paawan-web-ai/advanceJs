function createToaster(config) {
  return function (str) {
    const div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block space-y-3 z-50 ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded  font-bold shadow-lg pointer-events-none`;
    document.querySelector(".parent").appendChild(div);

    if (config.postionX !== "left" || positionY !== "top") {
      //   document.querySelector(".parent").classList.add("fixed");
      document.querySelector(".parent").className +=
        `${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : "top-5"} `;
    }

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 2000);
  };
}
let toster = createToaster({
  positionX: "left",
  positionY: "top",
  theme: "dark",
  duration: 3,
});

toster("Download Done");
toster("Download Done");
toster("Download Done");
toster("Download Done");
