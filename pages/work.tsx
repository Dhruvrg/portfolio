import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar } from '@shared-components';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Work = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <WorkPage />
      <Footer />
    </>
  );
};

export default Work;
