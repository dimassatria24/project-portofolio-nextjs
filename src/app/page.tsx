import AboutMe from './home/partials/aboutMe';
import Cardskills from './home/partials/cardskills';
import Comparasion from './home/partials/comparasion';
import ContactForm from './home/partials/contact-form';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import { PortofolioX } from './home/partials/portofolio ';
import QNA from './home/partials/qna';
import Testimonials from './home/partials/testimonials';
import { WorkexperienceCards } from './home/partials/workexperienceCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Cardskills />
      <Comparasion />
      <PortofolioX />
      <WorkexperienceCards />
      <Testimonials />
      <QNA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
