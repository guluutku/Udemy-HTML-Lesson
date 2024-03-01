const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// Click Event
title.addEventListener("click", run);

// double Click
title.addEventListener("dbclick", run);

// Mouse Down
title.addEventListener("mousedown", run);

// Mouse Over
title.addEventListener("mouseover", run);

// Mouse Out
title.addEventListener("mouseout", run);

// Mouse Enter, Leave
cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);

function run(e){
    console.log(e.type);
}