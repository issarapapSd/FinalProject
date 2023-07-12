import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/navbar/ResponsiveAppBar';
import axios from 'axios';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
interface CatG {
    id: number;
    data_Sci: string;
    category: string;
    description: string;

}
const Course = () => {
    const handleStartClick = (category: string) => {
        if (category === 'Data Science') {
            // Link to VideoDataSci page
            console.log('Navigate to VideoDataSci');
        } else if (category === 'Machine Learning') {
            // Link to VideoML page
            console.log('Navigate to VideoML');
        } else if (category === 'Programming Fundamentals') {
            // Link to VideoProgramFun page
            console.log('Navigate to VideoProgramFun');
        } else if (category === 'Web Development') {
            // Link to VideoWeb page
            console.log('Navigate to VideoWeb');
        } else if (category === 'All') {
            // Link to VideoProgramFun page
            console.log('Navigate to VideoProgramFun');
        }
    };
    const [courses, setCourses] = useState<CatG[]>([]);
    const [categories, setCategories] = useState([]);
    const [current, setCurrent] = useState('All');
    const [showAll, setShowAll] = useState<boolean>(true);
    const categoriesImage = [
        { name: 'Data Science', image: 'https://www.palermo.edu/Archivos_content/2021/negocios/julio/data/datascience-640.jpg' },
        { name: 'Programming Fundamentals', image: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2388074/settings_images/Jqq1mwFQdK2plLyrit89_file.jpg' },
        { name: 'Web Development', image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg' },
        { name: 'Machine Learning', image: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg' },
    ];
    useEffect(() => {
        axios.get('https://borntodev-final-project-api.borntodev.repl.co/categories')
            .then(response => {
                setCategories(response.data);
                // console.log(response.data[0]);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    useEffect(() => {
        console.log(current + 'test');
        axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses')
            .then(response => {
                setCourses(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, [current]);


    // const dataSci = categories[0];
    // const web = categories[1];
    // const mac = categories[2];
    // const program = categories[3];

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // setCurrent(e.currentTarget.value);
        const value = e.currentTarget.value;
        // console.log(e.target.value);
        // console.log(current);
        if (value === 'All') {
            setShowAll(true);
        } else {
            setCurrent(value);
            setShowAll(false);
        }
    };
    return (
        
        <Container maxWidth="xl">
            <ResponsiveAppBar />
            <div style={{ paddingTop: '5%' }}>
                <button onClick={handleOnClick} value='All'>All</button>
                {categories.map((category, index) => (
                    <button key={index} onClick={handleOnClick} value={category}>
                        {category}
                    </button>
                ))}
                <div>
                    {showAll ? (
                        courses.map((catG: CatG) => (
                            <div key={catG.id}>
                                <h2>{catG.category}</h2>
                                <center>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt={catG.category}
                                            height="140"
                                            image={
                                                categoriesImage.find(
                                                    (category) => category.name === catG.category
                                                )?.image || 'default_image_url'
                                            }
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {catG.category}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {catG.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {catG.category === 'Data Science' && (
                                                <Button
                                                    component={Link}
                                                    to="/video-data-science"
                                                    size="small"
                                                >
                                                    Start
                                                </Button>
                                            )}
                                            {catG.category === 'Machine Learning' && (
                                                <Button
                                                    component={Link}
                                                    to="/video-machine-learning"
                                                    size="small"
                                                >
                                                    Start
                                                </Button>
                                            )}
                                            {catG.category === 'Programming Fundamentals' && (
                                                <Button
                                                    component={Link}
                                                    to="/video-program-fundamentals"
                                                    size="small"
                                                >
                                                    Start
                                                </Button>
                                            )}
                                            {catG.category === 'Web Development' && (
                                                <Button
                                                    component={Link}
                                                    to="/video-web-development"
                                                    size="small"
                                                >
                                                    Start
                                                </Button>
                                            )}
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </center>
                            </div>
                        ))
                    ) : (
                        courses.map((catG: CatG) => (
                            catG.category === current && (
                                <div key={catG.id}>
                                    <h2>{catG.category}</h2>
                                    <center>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                alt={catG.category}
                                                height="140"
                                                image={
                                                    categoriesImage.find(
                                                        (category) => category.name === catG.category
                                                    )?.image || 'default_image_url'
                                                }
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {catG.category}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {catG.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                {catG.category === 'Data Science' && (
                                                    <Button
                                                        component={Link}
                                                        to="/video-data-science"
                                                        size="small"
                                                    >
                                                        Start
                                                    </Button>
                                                )}
                                                {catG.category === 'Machine Learning' && (
                                                    <Button
                                                        component={Link}
                                                        to="/video-machine-learning"
                                                        size="small"
                                                    >
                                                        Start
                                                    </Button>
                                                )}
                                                {catG.category === 'Programming Fundamentals' && (
                                                    <Button
                                                        component={Link}
                                                        to="/video-program-fundamentals"
                                                        size="small"
                                                    >
                                                        Start
                                                    </Button>
                                                )}
                                                {catG.category === 'Web Development' && (
                                                    <Button
                                                        component={Link}
                                                        to="/video-web-development"
                                                        size="small"
                                                    >
                                                        Start
                                                    </Button>
                                                )}
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </center>
                                </div>
                            )
                        ))
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Course;