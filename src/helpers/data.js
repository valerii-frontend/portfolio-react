import flsImg from "../assets/certs/fls.png";
import soloHtml from "../assets/certs/solo-html.jpg";
import soloCss from "../assets/certs/solo-css.jpg";
import soloJs from "../assets/certs/solo-js.png";
import soloReact from "../assets/certs/solo-react.jpg";
import gbHtml from "../assets/certs/gb-html.jpg";
import gbPro from "../assets/certs/gb-pro.jpg";
import udemyJs from "../assets/certs/udemy-js.jpg";
import udemyReact from "../assets/certs/udemy-react.jpg";
import scrumCert from "../assets/certs/scrum.jpg";
import meta01 from "../assets/certs/meta01.jpg";
import meta02 from "../assets/certs/meta02.jpg";
import meta03 from "../assets/certs/meta03.jpg";
import meta04 from "../assets/certs/meta04.jpg";
import meta05 from "../assets/certs/meta05.jpg";
import meta06 from "../assets/certs/meta06.jpg";
import python from "../assets/certs/python.jpg";

const iframeLinks = [
  { name: "chess", link: "https://valerii-frontend.github.io/chess-react/" },
  { name: "food", link: "https://valerii-frontend.github.io/healthy-food/" },
  { name: "blog-app", link: "https://valerii-frontend.github.io/blog-app/" },
  { name: "city", link: "https://nextjs-cities.vercel.app/" },
  { name: "library", link: "https://valerii-frontend.github.io/library/dist/" },
  { name: "15", link: "https://valerii-frontend.github.io/15game/" },
  { name: "posting", link: "https://valerii-frontend.github.io/Landing_page--Aspgroup/" },
  { name: "lesniczowka", link: "https://valerii-frontend.github.io/lesniczowka/" },
  { name: "arteo", link: "https://valerii-frontend.github.io/arteo-dev/" },
  { name: "anter", link: "https://valerii-frontend.github.io/AnterSystem/" },
  { name: "design", link: "https://valerii-frontend.github.io/Corporate_website--ilyin_studio/" },
  { name: "guess", link: "https://guess-a-word.netlify.app/" },
  { name: "countries", link: "https://vl-countries.netlify.app/" },
  { name: "came", link: "https://valerii-frontend.github.io/Landing_page--Came-gates/" },
  { name: "dashboard", link: "https://valerii-frontend.github.io/dashboardToogle/" },
  { name: "v-slider", link: "https://valerii-frontend.github.io/verticalSlider/" },
  { name: "f-slider", link: "https://valerii-frontend.github.io/pureJsSlider/" },
  { name: "paint", link: "https://valerii-frontend.github.io/DrawingApp/" },
  { name: "films", link: "https://valerii-frontend.github.io/filmDataBaseApi/" },
  { name: "css-night", link: "https://valerii-frontend.github.io/City-animation/" },
  { name: "pig", link: "https://valerii-frontend.github.io/a_pig_game/" },
  { name: "casino", link: "https://valerii-frontend.github.io/OutComeBet-casino/" },
  { name: "cubes", link: "https://valerii-frontend.github.io/library/dist/cubes.html" },
  { name: "scroll", link: "https://valerii-frontend.github.io/library/dist/scroll.html" },
  { name: "blur", link: "https://valerii-frontend.github.io/library/dist/blur.html" },
  { name: "cards", link: "https://valerii-frontend.github.io/library/dist/cards.html" },
  { name: "steps", link: "https://valerii-frontend.github.io/library/dist/steps.html" },
  { name: "search", link: "https://valerii-frontend.github.io/library/dist/hidden-search.html" },
  { name: "loader", link: "https://valerii-frontend.github.io/library/dist/loader.html" },
  { name: "currency", link: "https://valerii-frontend.github.io/currency" },
  { name: "loaders", link: "https://valerii-frontend.github.io/loaders" },
  { name: "calculator", link: "https://valerii-frontend.github.io/calc-meta/" },
  { name: "memory", link: "https://valerii-frontend.github.io/memorize-game/" },
];

const worksCategory = {
  react: [
    { name: "blog-app", icon: "jsx", modal: "blog-app" },
    { name: "healthy-food", icon: "jsx", modal: "food" },
    { name: "poland-cities", icon: "jsx", modal: "city" },
    { name: "currency-converter", icon: "jsx", modal: "currency" },
    { name: "loaders animation", icon: "jsx", modal: "loaders" },
    { name: "simple calculator", icon: "jsx", modal: "calculator" },
    { name: "chess-game", icon: "jsx", modal: "chess" },
    { name: "memorize game", icon: "jsx", modal: "memory" },
  ],
  library: [
    { name: "app-for-drawing", icon: "js", modal: "paint" },
    { name: "blur-preloader", icon: "js", modal: "blur" },
    { name: "css-animation-loop", icon: "css", modal: "css-night" },
    { name: "cubes-css-animation", icon: "css", modal: "cubes" },
    { name: "custom-accordion-cards", icon: "js", modal: "cards" },
    { name: "dashboard-theme-swicher", icon: "js", modal: "dashboard" },
    { name: "full-page-slider", icon: "js", modal: "f-slider" },
    { name: "loader", icon: "css", modal: "loader" },
    { name: "progresive-steps", icon: "js", modal: "steps" },
    { name: "scroll-block-animation", icon: "js", modal: "scroll" },
    { name: "search-input-toggle", icon: "js", modal: "search" },
    { name: "vertical-slider", icon: "js", modal: "v-slider" },
  ],
  games: [
    { name: "15-puzzle-game", icon: "js", modal: "15" },
    { name: "guess-the-word", icon: "js", modal: "guess" },
    { name: "pig-game", icon: "js", modal: "pig" },
    { name: "chess-game", icon: "jsx", modal: "chess" },
    { name: "memorize game", icon: "jsx", modal: "memory" },
  ],
  sites: [
    { name: "auto-posting-service", icon: "html", modal: "posting" },
    { name: "casino-promo", icon: "html", modal: "casino" },
    { name: "constraction-company", icon: "html", modal: "arteo" },
    { name: "design-studio", icon: "html", modal: "design" },
    { name: "gate-sellers-parts", icon: "html", modal: "came" },
    { name: "meat-products", icon: "html", modal: "lesniczowka" },
    { name: "protective-barriers", icon: "html", modal: "anter" },
  ],
  api: [
    { name: "rest-countries", icon: "js", modal: "countries" },
    { name: "film-data-base", icon: "js", modal: "films" },
  ],
};
const certificates = [
  flsImg,
  soloHtml,
  soloCss,
  soloJs,
  soloReact,
  gbHtml,
  gbPro,
  udemyJs,
  udemyReact,
  scrumCert,
  python,
  meta01,
  meta02,
  meta03,
  meta04,
  meta05,
  meta06,
];
export { worksCategory, iframeLinks, certificates };
