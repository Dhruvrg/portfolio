import Landing from './landing';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
// import WordCloud from './wordcloud';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          {/* <Work /> */}
          {/* <WordCloud /> */}
          <Projects />
          <Contact />
          {/* <RepoDetails /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
