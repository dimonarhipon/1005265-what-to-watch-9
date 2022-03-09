import TabDetails from '../tab-details/tab-details';
import TabOverview from '../tab-overview/tab-overview';
import TabReview from '../tab-overview/tab-overview';
import {TabNames} from '../../const';
import {dataFilm} from '../../types/data';

type typeProps = {
  activeTab: string,
  film: dataFilm,
}

function Tabs({film, activeTab}: typeProps) {

  const renderActiveTab = (item: dataFilm, tab: string) => {
    switch (tab) {
      case TabNames.Overview:
        return <TabOverview film={item} />;
      case TabNames.Details:
        return <TabDetails film={item} />;
      case TabNames.Reviews:
        return <TabReview film={item}/>;
      default:
        return '';
    }
  };

  return (
    <>
      {renderActiveTab(film, activeTab)}
    </>
  );
}

export default Tabs;
