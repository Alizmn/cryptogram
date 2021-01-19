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
        <h1> Rank 1</h1>
        <h1> Status <CheckCircleIcon/></h1>
      </div>
      <div className='price'>
        <h1>Price<br/></h1>
        <h2>$1,226.93</h2>
      </div>
      <div className='AllTimeHigh'>
        <h1>All-Time High<br/></h1>
        <h2>$1,391.74</h2>
      </div>
      <div className='oWeek'>
        <h1> Last Week<br/></h1>
        <h2>$1,391.74</h2>
      </div>
      <div className='oMonth'>
        <h1>Last Month<br/></h1>
        <h2>$1,391.74</h2>
      </div>
    </div>
    <Divider/>
    <div className='secondGrid'>
      <div className='maxSupply'>
        <h1> Last Week<br/></h1>
        <h2>$1,391.74</h2>
      </div>
      <div className='circul'>
        <h1>Last Month<br/></h1>
        <h2>$1,391.74</h2>
      </div>
      <div><PieChart/></div>
    </div>
    <Divider/>
    <div className='thirdGrid'>
      <div className='market'>
        <h1> Last Week<br/></h1>
        <h2>$1,391.74</h2>
      </div>
      <div className='trans'>
        <h1>Last Month<br/></h1>
        <h2>$1,391.74</h2>
      </div>
      <div><PieChart/></div>
    </div>
</>
  );
}