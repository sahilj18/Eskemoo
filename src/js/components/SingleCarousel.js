
// TODO: Alt ko proper add karna hai
export default function SingleCarousel(src, active = false) {
    const div = document.createElement("div");
    div.classList.add("carousel-item", `${active && "active"}`);
    div.innerHTML = `<img src="${src}" class="d-block w-100 rounded-3" alt="dog"/>`;
    return div;
  }
  