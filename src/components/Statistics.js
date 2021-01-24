import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PieChart from './PieChart';
import './visualStyle/Statistics.scss';

export default function Statistics(props) {
  return(
  <>
    <h1 className='stathead'>Bitcoin Statistics</h1>
    <Divider/>
    <div className='firstGrid'>
      <div className='stat'>
        <h2>Status<br/></h2>
        <h3><CheckCircleIcon/></h3>
      </div>
      <div className='price'>
        <h2>Price<br/></h2>
        <h3>$1,226.93</h3>
      </div>
      <div className='AllTimeHigh'>
        <h2>All-Time High<br/></h2>
        <h3>$1,391.74</h3>
      </div>
      <div className='oWeek'>
        <h2> Last Week<br/></h2>
        <h3>$1,391.74</h3>
      </div>
      <div className='oMonth'>
        <h2>Last Month<br/></h2>
        <h3>$1,391.74</h3>
      </div>
    </div>
    <Divider/>
    <div className='secondGrid'>
      <div className='maxSupply'>
        <h2> Last Week<br/></h2>
        <h3>$1,391.74</h3>
      </div>
      <div className='circul'>
        <h2>Last Month<br/></h2>
        <h3>$1,391.74</h3>
      </div>
      <div><PieChart/></div>
    </div>
    <Divider/>
    <div className='thirdGrid'>
      <div className='market'>
        <h2> Last Week<br/></h2>
        <h3>$1,391.74</h3>
      </div>
      <div className='trans'>
        <h2>Last Month<br/></h2>
        <h3>$1,391.74</h3>
      </div>
      <div><PieChart/></div>
    </div>
</>
  );
}