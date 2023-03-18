import React, { useState } from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Grid } from '@mui/material';
import styled from 'styled-components';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

import { IconButton } from '@mui/material';

import serviceImage1 from './serviceImage1.jpeg';
import serviceImage2 from './serviceImage2.jpeg';
import serviceImage3 from './serviceImage3.jpeg';
import styles from './styles.module.css'; // <-- Import the styles module
import { useNavigate } from 'react-router-dom';



const StyledSection = styled.section`
  background-color: #fff;
  padding: 5rem 0;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 5rem;
`;

const services = [
  {
    id: 1,
    title: 'AI Solutions',
    image: serviceImage1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://ge.globo.com/futebol/times/corinthians/',
  },
  {
    id: 2,
    title: 'Software Engineering',
    image: serviceImage2,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://ge.globo.com/futebol/times/corinthians/',
  },
  {
    id: 3,
    title: 'Data Science',
    image: serviceImage3,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: 'https://ge.globo.com/futebol/times/corinthians/',
  },
  {
    id: 4,
    title: 'Service 4',
    image: serviceImage1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: '#',
  },
  {
    id: 5,
    title: 'Service 5',
    image: serviceImage2,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: '#',
  },
  {
    id: 6,
    title: 'Service 6',
    image: serviceImage3,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: '#',
  },
];


const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const servicesToShow = services.slice(activeSlide, activeSlide + 3);
  const showLeftArrow = activeSlide !== 0;
  const showRightArrow = activeSlide + 3 < services.length;

  const handleLeftArrowClick = () => {
    setActiveSlide(activeSlide - 1);
  };

  const handleRightArrowClick = () => {
    setActiveSlide(activeSlide + 1);
  };

  return (
    <section id="services">
      <StyledSection>
        <StyledTypography variant="h4" align="center">
          Our Services
        </StyledTypography>
        <Grid container spacing={2} justifyContent="center">
          {servicesToShow.map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
              <div className={styles.service}>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={service.image}
                      alt={service.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={styles.actions}>
                    <Button
                      size="small"
                      color="primary"
                      to={service.url}
                      className={styles.button}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
          <Grid item>
            {showLeftArrow && (
              <IconButton onClick={handleLeftArrowClick}>
                <ChevronLeft />
              </IconButton>
            )}
          </Grid>
          <Grid item>
            {showRightArrow && (
              <IconButton onClick={handleRightArrowClick}>
                <ChevronRight />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </StyledSection>
    </section>
  );
};

export default Services;