import ImageGallery from 'react-image-gallery';
import { SlideContainer } from './Projects.styled';
import 'react-image-gallery/styles/css/image-gallery.css';
import Barber_img from 'images/projects/barber_project.webp';
import Animal_welfare_img from 'images/projects/animal_welfare_project.webp';
import Filmoteka_img from 'images/projects/filmoteka_project.webp';
import Ice_cream_img from 'images/projects/ice_cream_project.webp';
import Anastasia_img from 'images/projects/anastasya-studio.webp';
import Salamandra_img from 'images/projects/salamandra.webp';
import Finance_club_img from 'images/projects/finance_club.webp';
import Granat_img from 'images/projects/granat.webp';
import Homeforest_img from 'images/projects/homeforest.webp';
import { Container } from 'components/baseStyles/CommonStyle.styled';
// import { Button } from 'components/baseStyles/Button.styled';
import { useEffect } from 'react';
import { ButtonLink } from 'components/baseStyles/Button.styled';
import { TitleHome } from '../Home/Home.styled';
import { useTranslation } from 'react-i18next';

export const Project = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const hendleClickProject = e => {
    e.preventDefault();
    switch (e.target.alt) {
      case 'barbershop project':
        window
          .open('https://barbershop-kyiv.vercel.app/', '_blank')
          .focus();
        break;
      case 'animal welfare project':
        window
          .open(
            'https://studentvlad5.github.io/animal-welfare-network/',
            '_blank'
          )
          .focus();
        break;
      case 'ice cream project':
        window
          .open('https://studentvlad5.github.io/project_ice-cream/', '_blank')
          .focus();
        break;
      case 'filmoteka project':
        window
          .open(
            'https://filmoteka-home.netlify.app/',
            '_blank'
          )
          .focus();
        break;
      case 'Anastasia project':
        window
          .open(
            'https://web-studio-yvh6.onrender.com/',
            '_blank'
          )
          .focus();
        break;
      case 'salamandra project':
        window
          .open(
            'https://salamandra-cafe.vercel.app/',
            '_blank'
          )
          .focus();
        break;
      case 'finance club project':
        window
          .open(
            'https://finance-club-amber.vercel.app/',
            '_blank'
          )
          .focus();
        break;
      case 'bar association project':
        window
          .open(
            'https://lawyer-association-granat.vercel.app/',
            '_blank'
          )
          .focus();
        break;
      case 'homeforest shop project':
        window
          .open(
            'https://indoor-plants-alpha.vercel.app/addition/about_company',
            '_blank'
          )
          .focus();
        break;
      default:
        break;
    }
  };
  const images = [
    {
      original: Barber_img,
      thumbnail: Barber_img,
      description:
        t('A convenient service for hairdressers, massage salons, which helps users make online reservations for the selected service'),
      originalAlt: 'barbershop project',
      title:
        t('A convenient service for hairdressers, massage salons, which helps users make online reservations for the selected service'),
    },
    {
      original: Animal_welfare_img,
      thumbnail: Animal_welfare_img,
      description:
        t('A project that helps to find a pet for yourself or place a homeless animal in good hands'),
      originalAlt: 'animal welfare project',
      title:
        t('A project that helps to find a pet for yourself or place a homeless animal in good handsProject #2'),
    },
    {
      original: Filmoteka_img,
      thumbnail: Filmoteka_img,
      originalAlt: 'filmoteka project',
      description:
        t('This site helps to choose movies or cartoons for viewing by the whole family and records the preferences of each individual member of the family'),
      title:
        t('This site helps to choose movies or cartoons for viewing by the whole family and records the preferences of each individual member of the family'),
    },
    {
      original: Ice_cream_img,
      thumbnail: Ice_cream_img,
      originalAlt: 'ice cream project',
      description: t('A project for ordering delicious and cold ice cream'),
      title: 'A project for ordering delicious and cold ice cream',
    },
    {
      original: Anastasia_img,
      thumbnail: Anastasia_img,
      originalAlt: 'Anastasia project',
      description: t('The site is a business card for the design team'),
      title: 'The site is a business card for the design team',
    },
    {
      original: Salamandra_img,
      thumbnail: Salamandra_img,
      originalAlt: 'salamandra project',
      description: t('Сafe menu with administrative management'),
      title: 'Сafe menu with administrative management',
    },
    {
      original: Finance_club_img,
      thumbnail: Finance_club_img,
      originalAlt: 'finance club project',
      description: t('The platform for communication between the financial and banking community, the expert environment, regulators and society'),
      title: 'Сafe menu with administrative management',
    },
    {
      original: Granat_img,
      thumbnail: Granat_img,
      originalAlt: 'bar association project',
      description: t('The website is a visiting card for the bar association'),
    },
    {
      original: Homeforest_img,
      thumbnail: Homeforest_img,
      originalAlt: 'homeforest shop project',
      description: t('A stylish online store of plants'),
    },
  ];

  return (
    <Container>
      <TitleHome>{t("EXPLORE OUR WORKS")}</TitleHome>
      <SlideContainer>
        <ImageGallery
          autoPlay={true}
          items={images}
          lazyLoad={true}
          description={images}
          slideDuration={700}
          originalTitle={images}
          originalAlt={images}
          onClick={hendleClickProject}
        />
      </SlideContainer>
      <ButtonLink
        to="/contact"
        aria-label="Open order form"
        style={{ marginTop: '50px' }}
      >
        {t('Order')}
      </ButtonLink>
    </Container>
  );
};
