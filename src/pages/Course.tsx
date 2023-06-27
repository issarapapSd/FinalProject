import React from 'react'
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
    name: string;
    category: string;
    description: string;

}
const Course = () => {
    const [courses, setCourses] = useState<CatG[]>([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://borntodev-final-project-api.borntodev.repl.co/categories')
            .then(response => {
                setCategories(response.data);
                console.log(response.data[0]);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    useEffect(() => {
        axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses')
            .then(response => {
                setCourses(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);


    const name = categories[0];
    const web = categories[1];
    const mac = categories[2];
    const program = categories[3];
    const handleOnClick = () => {



    };
    return (
        <Container maxWidth="xl">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left' }}>         <Typography variant="h3" component="h2">
                Hello, Is
            </Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', placeItems: 'flex-end', textAlign: 'end', paddingLeft: '75%' }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>

            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left' }}>
                <Button sx={{}}>All</Button>
                <Button>Design</Button>
                <Button>Illustration</Button>
            </div> */}
            <div>
                <Button onClick={handleOnClick}>
                    {name}
                </Button>
                <Button>{web}</Button>
                <Button>{mac}</Button>
                <Button>{program}</Button>
            </div>
            <br />

            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>xs=2</Item>
                        </Grid>
                    ))}
                </Grid>



            </Box> */}
            <div>
                {courses.map((catG: CatG) => (
                    <div key={catG.id}>
                        <h2>{catG.name}</h2>
                        <p>{catG.category}</p>
                        {/* <img src={catG.image} alt={product.title} /> */}
                        <p>{catG.description}</p>
                    </div>
                ))}
            </div>
        </Container>

    )
}

export default Course
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function YourComponent() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get('https://borntodev-final-project-api.borntodev.repl.co/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);

//   // แสดงผลลัพธ์ของ categories ที่ดึงมาจาก API
//   return (
//     <div>
//       {categories.map(category => (
//         <div key={category.id}>
//           <h3>{category.name}</h3>
//           <p>{category.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }