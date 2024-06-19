import dynamic from 'next/dynamic';
import { Footer, Loader, Navbar } from '@shared-components';
import { Company, PersonalDetails } from '@utils/types';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false,
  loading: () => <Loader />
});

type Props = {
  personalDetails: PersonalDetails;
  companyDetails: Company[];
};

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
