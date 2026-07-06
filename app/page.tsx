import SiteInteractions from './SiteInteractions';
import AboutSection from './components/AboutSection';
import CasesSection from './components/CasesSection';
import ContactSection from './components/ContactSection';
import DiagnosticDeliverablesSection from './components/DiagnosticDeliverablesSection';
import DiagnosticSection from './components/DiagnosticSection';
import FocusSection from './components/FocusSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import SectionRail from './components/SectionRail';
import SolutionsSection from './components/SolutionsSection';
import StackFrame from './components/StackFrame';
import TechStrip from './components/TechStrip';

export default function Home() {
  return (
    <>
      <Header />
      <SectionRail />
      <main>
        <StackFrame index={0}>
          <Hero />
        </StackFrame>
        <TechStrip />
        <StackFrame index={1}>
          <FocusSection />
        </StackFrame>
        <StackFrame index={2}>
          <DiagnosticSection />
        </StackFrame>
        <StackFrame index={3}>
          <DiagnosticDeliverablesSection />
        </StackFrame>
        <StackFrame index={4}>
          <SolutionsSection />
        </StackFrame>
        <StackFrame index={5}>
          <ProcessSection />
        </StackFrame>
        <StackFrame index={6}>
          <ProjectsSection />
        </StackFrame>
        <StackFrame index={7}>
          <CasesSection />
        </StackFrame>
        <StackFrame compact index={8}>
          <AboutSection />
        </StackFrame>
        <StackFrame compact index={9}>
          <ContactSection />
        </StackFrame>
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
