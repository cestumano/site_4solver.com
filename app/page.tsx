import SiteInteractions from './SiteInteractions';
import CasesSection from './components/CasesSection';
import CompanyIntroSection from './components/CompanyIntroSection';
import ContactSection from './components/ContactSection';
import DiagnosticSection from './components/DiagnosticSection';
import FocusSection from './components/FocusSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SectionRail from './components/SectionRail';
import SolutionsSection from './components/SolutionsSection';
import StackFrame from './components/StackFrame';

export default function Home() {
  return (
    <>
      <Header />
      <SectionRail />
      <main>
        <StackFrame index={0}>
          <Hero />
        </StackFrame>
        <StackFrame index={1}>
          <FocusSection />
        </StackFrame>
        <StackFrame index={2}>
          <SolutionsSection />
        </StackFrame>
        <StackFrame index={3}>
          <DiagnosticSection />
        </StackFrame>
        <StackFrame index={4}>
          <ProjectsSection />
        </StackFrame>
        <StackFrame index={5}>
          <CasesSection />
        </StackFrame>
        <StackFrame compact index={6}>
          <CompanyIntroSection />
        </StackFrame>
        <StackFrame compact index={7}>
          <ContactSection />
        </StackFrame>
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
