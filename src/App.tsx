import LanguageSelectDialog from './components/LanguageSelectDialog/LanguageSelectDialog';
import Projects from './components/Project/Projects';
import Resume from './components/Resume/Resume';
import LanguageProvider from './store/language/LanguageProvider';

const App = () => {
  return (
    <LanguageProvider>
      <main>
        <Resume />
        <Projects />
      </main>
      <LanguageSelectDialog />
    </LanguageProvider>
  );
};

export default App;
