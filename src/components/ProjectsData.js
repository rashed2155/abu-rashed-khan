import library from "../assets/projects_images/library.png";
import cgpa from "../assets/projects_images/cgpa.png";
import party from "../assets/projects_images/party.png";
import movieapp from "../assets/projects_images/movieapp.png";
import covid from "../assets/projects_images/covid.png";
import weshop from "../assets/projects_images/weshop.png";
import androidCal from "../assets/projects_images/androidCal.png";
import quiz from "../assets/projects_images/quiz.png";
import news from "../assets/projects_images/news-app.png";
import ainews from "../assets/projects_images/ai-news.png";
import bd from "../assets/projects_images/bdknoledge.png";

const Data = [
  {
    id: 1,
    name: "AI News & Weather App",
    image: ainews,
    deployed_url: "https://news360.netlify.app/",
    github_url: "https://github.com/rashedabir/ai-news-app",
    category: ["react.js", "alan"],
  },
  {
    id: 2,
    name: "Library Management System",
    image: library,
    deployed_url: "https://github.com/rashed2155/Library_management_oracle",
    github_url: "https://github.com/rashed2155/Library_management_oracle",
    category: ["java", "oracle"],
  },
  {
    id: 3,
    name: "Party Management System",
    image: party,
    deployed_url: "https://party-managed.herokuapp.com/",
    github_url: "https://github.com/rashedabir/party-managed",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 4,
    name: "CGPA Calculator",
    image: cgpa,
    deployed_url: "https://rashedabir.github.io/cgpa_calculator/",
    github_url: "https://github.com/rashedabir/cgpa_calculator/tree/master",
    category: ["html", "css", "javascript"],
  },
  {
    id: 5,
    name: "Movie Flex",
    image: movieapp,
    deployed_url: "https://rashedabir.github.io/movie-flex/",
    github_url: "https://github.com/rashedabir/movie-flex/tree/master",
    category: ["react.js", "node.js"],
  },
  {
    id: 6,
    name: "Corona Virus Report",
    image: covid,
    deployed_url: "https://rashedabir.github.io/covid19-report/",
    github_url: "https://github.com/rashedabir/covid19-report/tree/master",
    category: ["react.js", "node.js"],
  },
  {
    id: 7,
    name: "Wee Shop",
    image: weshop,
    deployed_url: "https://weeshop.netlify.app/",
    github_url: "https://github.com/rashedabir/we-shop",
    category: ["react.js", "node.js"],
  },
  {
    id: 8,
    name: "Android Calculator App",
    image: androidCal,
    deployed_url: "https://github.com/rashedabir/android-calculator",
    github_url: "https://github.com/rashedabir/android-calculator",
    category: ["java"],
  },
  {
    id: 9,
    name: "Quiz Application",
    image: quiz,
    deployed_url: "https://github.com/rashedabir/quiz-app",
    github_url: "https://github.com/rashedabir/quiz-app",
    category: ["java"],
  },
  {
    id: 10,
    name: "News Application",
    image: news,
    deployed_url: "https://news360app.herokuapp.com/",
    github_url: "https://github.com/rashed-abir/news_app",
    category: ["react.js", "node.js"],
  },
  {
    id: 11,
    name: "BD Knowledge App",
    image: bd,
    deployed_url: "https://github.com/rashedabir/BD-Knowledge",
    github_url: "https://github.com/rashedabir/BD-Knowledge",
    category: ["java"],
  },
];

export default Data;
