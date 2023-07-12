import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
const classes: Array<ClassType> = [
  {
    name: "Web development ",
    description:
      "refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.",
    image: image1,
  },
  {
    name: "Online Classes",
    image: image2,
  },
  {
    name: "Machine Learning",
    description:
      "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.",
    image: image3,
  },
  {
    name: "Data Science",
    description:
      "is an international peer-reviewed (refereed) journal which publishes original and quality research articles in the field of Data Science and its applications. DataSCI is published twice per year online. The aim of the journal is to publish original scientific researches based on data analysis from both life and social sciences. DataSCI also provides a data-sharing platform that will bring together international researchers, professionals and academics. The DataSCI magazine accepts articles written in English.",
    image: image4,
  },
  {
    name: "Programming Classes",
    image: image5,
  },
  {
    name: "Introduction To Programming Fundamentals",
    description:
      "If you’re new to the world of programming, you’ve come to the right place! Programming is a fascinating and rewarding field that’s constantly evolving with endless possibilities.",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              excepturi facilis incidunt, fuga iste nesciunt animi sequi facere
              eligendi porro maxime nulla maiores eos ullam tempore autem
              eveniet mollitia distinctio.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
