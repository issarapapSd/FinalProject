import ActionButton from "@/shared/ActionButton";
import { useEffect, useState } from "react";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import CoursesPageGraphic from "@/assets/CoursesPageGraphic.png";
import axios from "axios";
import DataCourse from "./DataCourse";

// import Benefit from "./Benefit";
interface CatG {
  id: number;
  name: string;
  category: string;
  description: string;
}

// const course: Array<CourseType> = [
//   {
//     icon: <HomeModernIcon className="h-6 w-6" />,
//     title: "State of the Art Facilities",
//     description:
//       "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
//   },
//   {
//     icon: <UserGroupIcon className="h-6 w-6" />,
//     title: "100's of Diverse Classes",
//     description:
//       "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
//   },
//   {
//     icon: <AcademicCapIcon className="h-6 w-6" />,
//     title: "Expert and Pro Trainers",
//     description:
//       "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
//   },
// ];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Courses = ({ setSelectedPage }: Props) => {
  const [courses, setCourses] = useState<CatG[]>([]);
  const [current, setCurrent] = useState("All");
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState<boolean>(true);
  const categoriesImage = [
    {
      name: "Data Science",
      image:
        "https://www.palermo.edu/Archivos_content/2021/negocios/julio/data/datascience-640.jpg",
    },
    {
      name: "Programming Fundamentals",
      image:
        "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2388074/settings_images/Jqq1mwFQdK2plLyrit89_file.jpg",
    },
    {
      name: "Web Development",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      name: "Machine Learning",
      image:
        "https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg",
    },
  ];

  useEffect(() => {
    axios
      .get("https://borntodev-final-project-api.borntodev.repl.co/categories")
      .then((response) => {
        setCategories(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  useEffect(() => {
    console.log(current + "test");
    axios
      .get("https://borntodev-final-project-api.borntodev.repl.co/courses")
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [current]);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setCurrent(e.currentTarget.value);
    const value = e.currentTarget.value;
    // console.log(e.target.value);
    // console.log(current);
    if (value === "All") {
      setShowAll(true);
    } else {
      setCurrent(value);
      setShowAll(false);
    }
  };
  return (
    <section id="courses" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Courses)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN CLASSES.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            repellendus magni at perspiciatis quasi ea, corporis temporibus
            tempore, nemo quas illum facilis non suscipit accusantium laborum.
            Facere fuga fugiat itaque.
          </p>
        </motion.div>

        {/* COURSES */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* here */}
          <div style={{ paddingTop: "5%" }}>
            <button
              className="gap-8 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
              onClick={handleOnClick}
              value="All"
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                className="gap-8 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                key={index}
                onClick={handleOnClick}
                value={category}
              >
                {category}
              </button>
            ))}
            <motion.div
              className="mt-5 items-center justify-between gap-8 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {showAll
                ? courses.map((catG: CatG) => (
                    <div key={catG.id}>
                      <br />
                      <center>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            alt={catG.category}
                            height="140"
                            image={
                              categoriesImage.find(
                                (category) => category.name === catG.category
                              )?.image || "default_image_url"
                            }
                          />
                          <CardContent>
                            <HText>{catG.category}</HText>
                            <p className="my-5 text-sm">{catG.description}</p>
                          </CardContent>
                          <CardActions className="justify-center">
                            {catG.category === "Data Science" && (
                              <Button
                                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                component={Link}
                                to="/video-data-science"
                                size="small"
                              >
                                Start
                              </Button>
                            )}
                            {catG.category === "Machine Learning" && (
                              <Button
                                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 "
                                component={Link}
                                to="/video-machine-learning"
                                size="small"
                              >
                                Start
                              </Button>
                            )}
                            {catG.category === "Programming Fundamentals" && (
                              <Button
                                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                component={Link}
                                to="/video-program-fundamentals"
                                size="small"
                              >
                                Start
                              </Button>
                            )}
                            {catG.category === "Web Development" && (
                              <Button
                                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                component={Link}
                                to="/video-web-development"
                                size="small"
                              >
                                Start
                              </Button>
                            )}
                          </CardActions>
                        </Card>
                      </center>
                    </div>
                  ))
                : courses.map(
                    (catG: CatG) =>
                      catG.category === current && (
                        <div key={catG.id}>
                          <br />
                          {/* <h2>{catG.category}</h2> */}
                          <center>
                            <Card
                              sx={{ maxWidth: 345 }}
                              className="justify-center"
                            >
                              <CardMedia
                                component="img"
                                alt={catG.category}
                                height="140"
                                image={
                                  categoriesImage.find(
                                    (category) =>
                                      category.name === catG.category
                                  )?.image || "default_image_url"
                                }
                              />
                              <CardContent>
                                <HText> {catG.category}</HText>
                                <p className="my-5 text-sm">
                                  {catG.description}
                                </p>
                              </CardContent>
                              <CardActions className="justify-center">
                                {catG.category === "Data Science" && (
                                  <Button
                                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                    component={Link}
                                    to="/video-data-science"
                                    size="small"
                                  >
                                    Start
                                  </Button>
                                )}
                                {catG.category === "Machine Learning" && (
                                  <Button
                                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                    component={Link}
                                    to="/video-machine-learning"
                                    size="small"
                                  >
                                    Start
                                  </Button>
                                )}
                                {catG.category ===
                                  "Programming Fundamentals" && (
                                  <Button
                                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                    component={Link}
                                    to="/video-program-fundamentals"
                                    size="small"
                                  >
                                    Start
                                  </Button>
                                )}
                                {catG.category === "Web Development" && (
                                  <Button
                                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                    component={Link}
                                    to="/video-web-development"
                                    size="small"
                                  >
                                    Start
                                  </Button>
                                )}
                              </CardActions>
                            </Card>
                          </center>
                        </div>
                      )
                  )}
            </motion.div>
          </div>
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="courses-page-graphic"
            src={CoursesPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY STUDEN{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                quisquam id nulla aspernatur tempore doloribus eaque ipsam, vero
                sequi quasi distinctio sapiente ipsa inventore delectus? Magnam
                iusto sunt obcaecati et!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                illo amet repellendus voluptatem, possimus, corrupti accusamus
                quasi alias, id natus fuga! Voluptatem natus sit qui, distinctio
                deleniti quos possimus iure.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Courses;
